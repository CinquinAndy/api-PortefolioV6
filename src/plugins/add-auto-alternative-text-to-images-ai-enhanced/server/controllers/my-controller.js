'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('add-auto-alternative-text-to-images-ai-enhanced')
      .service('myService')
      .getWelcomeMessage();
  },
});
