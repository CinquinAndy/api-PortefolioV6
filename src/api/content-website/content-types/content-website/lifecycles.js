/**
 * Lifecycle hooks for Content Website (global content)
 *
 * Automatically triggers ISR revalidation when global website content is updated
 * This content type affects all pages, so revalidation is critical
 */

const { handleLifecycleEvent } = require('../../../../services/revalidation');

module.exports = {
  async afterCreate(event) {
    await handleLifecycleEvent(event, 'create');
  },

  async afterUpdate(event) {
    await handleLifecycleEvent(event, 'update');
  },

  async afterDelete(event) {
    await handleLifecycleEvent(event, 'delete');
  },
};
