/**
 * Lifecycle hooks for Course content type
 *
 * Automatically triggers ISR revalidation when courses are created, updated, or deleted
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
