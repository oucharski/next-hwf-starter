import { settings } from "./settings";
import { useMsalToken } from "@/client/common";
import { UseMsalToken, UseAccessTokenProps } from "@/client/common";

const { scopes } = settings.request;

export const useAccessToken = (props?: UseAccessTokenProps): UseMsalToken => {
  const { proceed = true } = props || {};
  return useMsalToken({ proceed, scopes });
};
