// path: ./src/plugins/image-analyzer/server/controllers/image-analyzer.js

const { ApplicationError } = require('@strapi/utils').errors;
const { parseMultipartData } = require('@strapi/utils');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

module.exports = {
  async uploadImage(ctx) {
    const { files } = await parseMultipartData(ctx);
    if (!files || files.length === 0) {
      throw new ApplicationError('No files uploaded');
    }

    const file = files[0];
    const { filepath } = file;

    // Read the image file
    const imageBuffer = fs.readFileSync(filepath);

    // Analyze the image
    const { name, alternativeText, caption } = await strapi
      .plugin('image-analyzer')
      .service('image-analyzer')
      .analyzeImage(imageBuffer);

    // Update the file information
    file.name = name;
    file.alternativeText = alternativeText;
    file.caption = caption;

    // Upload the file to Strapi
    const uploadedFile = await strapi.plugin('upload').service('upload').uploadFileAndPersist(file);

    // Return the uploaded file information
    ctx.send(uploadedFile);
  },

  async getImages(ctx) {
    const images = await strapi.plugin('upload').service('upload').findMany();
    ctx.send(images);
  },

  async updateImage(ctx) {
    const { id } = ctx.params;
    const { nameFromBody, captionFromBody, alternativeTextFromBody } = ctx.request.body;

    const image = await strapi.plugin('upload').service('upload').findOne({ id });
    if (!image) {
      throw new ApplicationError('Image not found');
    }

    // Read the image file
    const imageBuffer = fs.readFileSync(image.url);

    // Analyze the image
    const { name, alternativeText, caption } = await strapi
      .plugin('image-analyzer')
      .service('image-analyzer')
      .analyzeImage(imageBuffer);

    // Update the image information
    image.name = name;
    image.alternativeText = alternativeText;
    image.caption = caption;

    await strapi.plugin('upload').service('upload').update({ id }, image);

    ctx.send(image);
  },
};
