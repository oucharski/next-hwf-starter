import useSWR, { SWRResponse } from "swr";
import { fetcherWithToken } from "@/client/common";
import { useAccessToken } from "./accessToken";
import { UserPresence } from "./types";

export const useUserPresence = (userId?: string): SWRResponse<UserPresence> => {
  const envScopes = process.env.NEXT_PUBLIC_MS_GRAPH_SCOPES || "";
  const scopes = envScopes.split(" ");
  const proceed = scopes.includes("Read.Presence.All");

  const { data } = useAccessToken({ proceed });

  const url = userId
    ? `https://graph.microsoft.com/v1.0/users/${userId}/presence`
    : `https://graph.microsoft.com/v1.0/me/presence`;

  const args = [url, data];

  return useSWR(args, ([url, token]) => fetcherWithToken(url, token));
};
