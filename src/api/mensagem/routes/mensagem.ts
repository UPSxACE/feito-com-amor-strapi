/**
 * mensagem router
 */

import { factories } from "@strapi/strapi";
import type { Middleware } from "koa";
import emailTemplate from "./email-template";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.EMAIL_API_KEY);

export default factories.createCoreRouter("api::mensagem.mensagem", {
  config: {
    create: {
      middlewares: [
        // send email
        (async (ctx, next) => {
          // before request
          const result = await next();
          // after request
          try {
            const {
              nome_completo: name,
              assunto: subject,
              telefone: phone,
              email: email,
              mensagem: message,
            } = ctx?.request?.body?.data;

            const { emailHtml, emailText } = emailTemplate(
              name,
              phone,
              email,
              subject,
              message
            );

            const emailConfig = {
              from: `${process.env.EMAIL_NOTIFICATIONS_FROM_NAME} <${process.env.EMAIL_NOTIFICATIONS_FROM}>`,
              to: `${process.env.EMAIL_TO_FORWARD_NAME} <${process.env.EMAIL_TO_FORWARD}>`,
              subject: "Novo pedido de contacto",
              text: emailText,
              html: emailHtml,
              reply_to: email,
            };

            await sgMail.send(emailConfig);
          } catch (err) {
            console.log("Error sending email.");
            console.log(err);
            throw err;
          }
          return result;
        }) as Middleware,
      ],
    },
  },
});
