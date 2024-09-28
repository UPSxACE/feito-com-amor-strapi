const utils = require("@strapi/utils");

export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  {
    resolve: "./src/middlewares/vyzion-middleware",
  },
  {
    name: "strapi::body",
    config: {
      formLimit: "5mb", // modify form body
      jsonLimit: "5mb", // modify JSON body
      textLimit: "5mb", // modify text body
      formidable: {
        filter: function ({ name, originalFilename, mimetype }) {
          const valid = mimetype && mimetype.includes("image");
          if (!valid)
            throw new utils.errors.ApplicationError(
              // "Only IMAGE files of 2MB or less are accepted."
              "Apenas IMAGENS de 2MB ou menos são permitidas."
            );
          return true;
        },
        maxFileSize: 2 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
