import { useMsalToken } from "@/client/common";
import { UseMsalToken, UseAccessTokenProps } from "@/client/common";

export const useAccessToken = (props?: UseAccessTokenProps): UseMsalToken => {
  const { proceed = true } = props || {};
  const envScopes = process.env.NEXT_PUBLIC_MS_GRAPH_SCOPES || "";
  const scopes = envScopes.split(" ");
  return useMsalToken({ proceed, scopes });
};
