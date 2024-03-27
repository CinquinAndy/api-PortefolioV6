// path: ./src/plugins/image-analyzer/server/routes/image-analyzer.js

module.exports = {
  type: 'content-api',
  routes: [
    {
      method: 'POST',
      path: '/',
      handler: 'imageAnalyzer.uploadImage',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/',
      handler: 'imageAnalyzer.getImages',
      config: {
        policies: [],
      },
    },
    {
      method: 'PUT',
      path: '/:id',
      handler: 'imageAnalyzer.updateImage',
      config: {
        policies: [],
      },
    },
  ],
};
