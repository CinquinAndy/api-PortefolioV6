module.exports = {
  async index(ctx) {
    ctx.send({
      message: 'Welcome to the image-analyzer plugin',
    });
  },
  // Add other controllers here
};
