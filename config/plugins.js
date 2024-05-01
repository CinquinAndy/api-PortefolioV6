module.exports = ({env}) => ({
  upload: {
    config: {
      // provider: "strapi-provider-cloudflare-r2",
      // providerOptions: {
      //   endPoint: env("S3_ENDPOINT"), //s3.example.com
      //   port: 443, // parseInt(env("S3_PORT"), 9000), //9000
      //   useSSL: env("S3_SSL", false) === "true", //true or false
      //   accessKey: env("S3_ACCESS_KEY_ID"),
      //   secretKey: env("S3_ACCESS_SECRET"),
      // },
      provider: "strapi-provider-cloudflare-r2",
      providerOptions: {
        accessKeyId: env("S3_ACCESS_KEY_ID"),
        secretAccessKey: env("S3_ACCESS_SECRET"),
        /**
         * `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`
         */
        endpoint: env("S3_ENDPOINT"),
        params: {
          Bucket: env("S3_BUCKET"),
        },
        /**
         * Set this Option to store the CDN URL of your files and not the R2 endpoint URL in your DB.
         * Can be used in Cloudflare R2 with Domain-Access or Public URL: https://pub-<YOUR_PULIC_BUCKET_ID>.r2.dev
         * This option is required to upload files larger than 5MB, and is highly recommended to be set.
         * Check the cloudflare docs for the setup: https://developers.cloudflare.com/r2/data-access/public-buckets/#enable-public-access-for-your-bucket
         */
        cloudflarePublicAccessUrl: env("S3_ENDPOINT_PUBLIC"),
      },
    },
  },
  'auto-alt-caption-title-on-images-ai-enhanced': {
    enabled: true,
  },
  'drag-drop-content-types': {
    enabled: true
  },
  translate: {
    enabled: true,
    config: {
      // Choose one of the available providers
      provider: 'deepl',
      // Pass credentials and other options to the provider
      providerOptions: {
        // use custom locale mapping (for example 'en' locale is deprecated so need to choose between 'EN-GB' and 'EN-US')
        localeMap: {
          // use uppercase here!
          FR: 'FR',
          EN: 'EN-US',
        },
        apiOptions: {
          // see <https://github.com/DeepLcom/deepl-node#text-translation-options> for supported options.
          // note that tagHandling Mode cannot be set this way.
          // use with caution, as non-default values may break translation of markdown
          formality: 'default',
          // ...
        }
      },
    }
  }
});
