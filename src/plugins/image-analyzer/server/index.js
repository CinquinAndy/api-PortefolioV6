module.exports = async (strapi) => {
  // Plugin initialization logic
  strapi.log.info('Initializing image-analyzer plugin');

  // Register plugin routes
  strapi.server.routes([
    {
      method: 'GET',
      path: '/image-analyzer',
      handler: 'imageAnalyzer.index',
      config: {
        policies: [],
      },
    },
    // Add other routes here
  ]);

  // Register plugin service
  strapi.plugin('image-analyzer').service('imageAnalyzer', {
    // Add service methods here
  });

  strapi.log.info('image-analyzer plugin initialized');

  return strapi.plugin('image-analyzer').service('imageAnalyzer');
};
