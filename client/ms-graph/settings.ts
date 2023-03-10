import { RedirectRequest } from "@azure/msal-browser";

export const settings: { request: { scopes: RedirectRequest["scopes"] } } = {
  request: {
    scopes: [
      // MSAL scopes from settings should be here
      "User.Read.All",
    ],
  },
};
