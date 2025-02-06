'use strict';

/**
 * service-grid service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-grid.service-grid');
