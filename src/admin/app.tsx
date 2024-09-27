import type { StrapiApp } from "@strapi/strapi/admin";

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      "pt-BR",
      // "pt",
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    translations: {
      "pt-BR": {
        "upload.header.actions.add-assets": "Adicionar novos assets",
        "upload.modal.folder.create.title": "Adicionar nova pasta",
        "upload.modal.folder.edit.title": "Editar pasta",
      },
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
