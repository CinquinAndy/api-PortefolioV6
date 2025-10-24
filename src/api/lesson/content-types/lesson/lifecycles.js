/**
 * Lifecycle hooks for Lesson content type
 *
 * Automatically triggers ISR revalidation when lessons are created, updated, or deleted
 * Note: Lessons revalidate the 'courses' tag since they are part of courses
 */

const { handleLifecycleEvent } = require('../../../../../services/revalidation');

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
