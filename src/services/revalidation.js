/**
 * ISR Revalidation Service
 *
 * This service handles automatic revalidation of Next.js ISR pages
 * when content is created, updated, or deleted in Strapi.
 */

const fetch = require('node-fetch');

/**
 * Configuration loaded from environment variables
 */
const getConfig = () => ({
  nextPublicUrl: process.env.NEXT_PUBLIC_URL,
  nextPublicUrlAlt: process.env.NEXT_PUBLIC_URL_ALT,
  revalidationSecret: process.env.REVALIDATION_SECRET,
  enabled: process.env.ENABLE_ISR_REVALIDATION !== 'false', // Enabled by default
});

/**
 * Trigger revalidation on Next.js frontend
 *
 * @param {string[]} tags - Array of cache tags to revalidate (e.g., ['articles', 'strapi-content'])
 * @param {Object} options - Additional options
 * @param {string} options.contentType - Content type being revalidated (for logging)
 * @param {string} options.action - Action performed (create, update, delete)
 * @returns {Promise<void>}
 */
const triggerRevalidation = async (tags = [], options = {}) => {
  const config = getConfig();

  // Check if revalidation is enabled
  if (!config.enabled) {
    strapi.log.debug('[ISR] Revalidation is disabled via ENABLE_ISR_REVALIDATION');
    return;
  }

  // Validate configuration
  if (!config.revalidationSecret) {
    strapi.log.warn('[ISR] REVALIDATION_SECRET is not configured. Skipping revalidation.');
    return;
  }

  if (!config.nextPublicUrl) {
    strapi.log.warn('[ISR] NEXT_PUBLIC_URL is not configured. Skipping revalidation.');
    return;
  }

  // Ensure tags is an array and not empty
  if (!Array.isArray(tags) || tags.length === 0) {
    strapi.log.warn('[ISR] No tags provided for revalidation. Skipping.');
    return;
  }

  const { contentType = 'unknown', action = 'unknown' } = options;
  const tagsParam = tags.join(',');

  // List of frontend URLs to revalidate
  const urls = [config.nextPublicUrl];
  if (config.nextPublicUrlAlt) {
    urls.push(config.nextPublicUrlAlt);
  }

  strapi.log.info(
    `[ISR] Triggering revalidation for ${contentType} (${action}) with tags: ${tagsParam}`
  );

  // Send revalidation requests to all configured URLs
  const revalidationPromises = urls.map(async (baseUrl) => {
    const url = `${baseUrl}/api/revalidate?secret=${encodeURIComponent(
      config.revalidationSecret
    )}&tags=${encodeURIComponent(tagsParam)}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000, // 10 seconds timeout
      });

      if (!response.ok) {
        const errorText = await response.text();
        strapi.log.error(
          `[ISR] Revalidation failed for ${baseUrl}: ${response.status} - ${errorText}`
        );
        return { success: false, url: baseUrl, error: errorText };
      }

      const result = await response.json();
      strapi.log.info(`[ISR] Successfully revalidated ${baseUrl}`);
      return { success: true, url: baseUrl, result };
    } catch (error) {
      strapi.log.error(`[ISR] Revalidation error for ${baseUrl}: ${error.message}`);
      return { success: false, url: baseUrl, error: error.message };
    }
  });

  // Wait for all revalidation requests to complete
  const results = await Promise.allSettled(revalidationPromises);

  const successCount = results.filter(
    (r) => r.status === 'fulfilled' && r.value.success
  ).length;

  strapi.log.info(
    `[ISR] Revalidation completed: ${successCount}/${urls.length} successful`
  );
};

/**
 * Get cache tags for a content type
 *
 * @param {string} uid - Content type UID (e.g., 'api::article.article')
 * @returns {string[]} Array of cache tags to revalidate
 */
const getTagsForContentType = (uid) => {
  // Extract content type name from UID
  const contentTypeName = uid.split('.').pop();

  // Map content types to cache tags
  const tagMapping = {
    article: ['articles', 'strapi-content'],
    realisation: ['realisations', 'strapi-content'],
    course: ['courses', 'strapi-content'],
    lesson: ['courses', 'strapi-content'], // Lessons are part of courses
    'content-website': ['content-website', 'strapi-content'],
  };

  return tagMapping[contentTypeName] || ['strapi-content'];
};

/**
 * Check if content is published
 *
 * @param {Object} data - Content data
 * @returns {boolean} True if content is published
 */
const isPublished = (data) => {
  // If publishedAt exists and is not null, content is published
  return data && data.publishedAt !== null && data.publishedAt !== undefined;
};

/**
 * Handle lifecycle event and trigger revalidation if needed
 *
 * @param {Object} event - Strapi lifecycle event
 * @param {string} action - Action performed (create, update, delete)
 */
const handleLifecycleEvent = async (event, action) => {
  try {
    const uid = event.model?.uid;
    if (!uid) {
      strapi.log.warn('[ISR] No model UID found in lifecycle event');
      return;
    }

    // For delete events, always revalidate (content was removed)
    if (action === 'delete') {
      const tags = getTagsForContentType(uid);
      await triggerRevalidation(tags, {
        contentType: uid,
        action: 'delete',
      });
      return;
    }

    // For create/update events, check if content is published
    const data = event.result || event.params?.data;
    if (!isPublished(data)) {
      strapi.log.debug(
        `[ISR] Skipping revalidation for unpublished ${uid} (${action})`
      );
      return;
    }

    const tags = getTagsForContentType(uid);
    await triggerRevalidation(tags, {
      contentType: uid,
      action,
    });
  } catch (error) {
    // Never throw errors from lifecycle hooks
    // Revalidation failures should not break Strapi operations
    strapi.log.error(`[ISR] Error in handleLifecycleEvent: ${error.message}`);
  }
};

module.exports = {
  triggerRevalidation,
  getTagsForContentType,
  isPublished,
  handleLifecycleEvent,
};
