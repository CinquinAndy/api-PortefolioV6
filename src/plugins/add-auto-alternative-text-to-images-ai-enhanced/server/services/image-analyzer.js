// path: ./src/plugins/image-analyzer/server/services/image-analyzer.js

const {ApplicationError} = require('@strapi/utils').errors;
const axios = require('axios');

module.exports = ({strapi}) => ({
  async analyzeImage(imageBuffer) {
    try {
      // Analyze the image using OpenAI API (gpt-4-vision-preview)
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4-vision-preview',
          messages: [
            {
              role: 'user',
              content: [
                {
                  type: 'text',
                  text: "What's in this image? Make it simple, just provide the context and an idea (think about alt text).",
                },
                {
                  type: 'image_url',
                  image_url: `data:image/png;base64,${imageBuffer.toString('base64')}`,
                },
              ],
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          },
        }
      );

      const imageDescription = response.data.choices[0].message.content;

      // Generate alt text, caption, and title for the image using OpenAI API (gpt-3.5-turbo-0125)
      const completion = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo-0125',
          messages: [
            {
              role: 'user',
              content: `You are an SEO expert and you are writing alt text, caption, and title for this image. The description of the image is: ${imageDescription}.
                Give me a title (name) for this image, an SEO-friendly alternative text, and a caption for this image.
                Generate this information and respond with a JSON object using the following fields: name, alternativeText, caption.
                Use this JSON template: {"name": "string", "alternativeText": "string", "caption": "string"}.`,
            },
          ],
          max_tokens: 750,
          n: 1,
          stop: null,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          },
        }
      );

      const {name, alternativeText, caption} = JSON.parse(completion.data.choices[0].message.content.trim());

      return {name, alternativeText, caption};
    } catch (error) {
      throw new ApplicationError('Failed to analyze the image');
    }
  },
});
