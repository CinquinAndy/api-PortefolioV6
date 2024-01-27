/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import documentation from "@strapi/plugin-documentation/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import translate from "strapi-plugin-translate/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    documentation: documentation,
    i18n: i18N,
    "users-permissions": usersPermissions,
    translate: translate,
  },
});
