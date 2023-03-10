import { Configuration } from "@azure/msal-browser";

const clientId = process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID!;
const tenantId = process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID!;
const redirectUri = process.env.NEXT_PUBLIC_MSAL_REDIRECT_URI!;
const postLogoutRedirectUri =
  process.env.NEXT_PUBLIC_MSAL_POST_LOGOUT_REDIRECT_URI;

export const msalConfig: Configuration = {
  auth: {
    clientId,
    authority: `https://login.microsoftonline.com/${tenantId}`,
    redirectUri,
    postLogoutRedirectUri,
  },
};
