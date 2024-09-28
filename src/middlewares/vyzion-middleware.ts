const utils = require("@strapi/utils");
import type { Core } from "@strapi/strapi";

const middleware = (config, { strapi }: { strapi: Core.Strapi }) => {
  const redirects: Omit<Core.Route, "info">[] = [
    "/",
    "/admin",
    "/index.html",
  ].map((path) => ({
    method: "GET",
    path,
    handler: (ctx) => ctx.redirect("/admin/content-manager"),
    config: { auth: false },
  }));

  strapi.server.routes(redirects);

  return async (ctx, next) => {
    const maxSize = 2 * 1024 * 1024;
    const size = ctx.req.headers["content-length"];
    if (size > maxSize)
      throw new utils.errors.ApplicationError(
        // "Only IMAGE files of 2MB or less are accepted."
        "Apenas IMAGENS de 2MB ou menos são permitidas."
      );
    await next();
  };
};

export default middleware;
