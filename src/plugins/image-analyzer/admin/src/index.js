import {prefixPluginTranslations} from '@strapi/helper-plugin';
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Initializer from './components/Initializer';
import ImageAnalyzerPage from './pages/App';

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.createSettingSection(
      [
        {
          id: pluginId,
          intlLabel: {
            id: `${pluginId}.plugin.name`,
            defaultMessage: name,
          },
        },
      ],
      [
        {
          intlLabel: {
            id: `${pluginId}.plugin.name`,
            defaultMessage: name,
          },
          id: pluginId,
          to: `/settings/${pluginId}`,
          Component: async () => {
            return ImageAnalyzerPage;
          },
          permissions: [],
        },
      ]
    );

    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    });
  },

  bootstrap(app) {
  },
  async registerTrads({locales}) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({default: data}) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
