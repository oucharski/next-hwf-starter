import useSWR, { SWRResponse } from "swr";
import { fetcherWithToken } from "@/client/common";
import { useAccessToken } from "./accessToken";
import { settings } from "./settings";
import { UserPresence } from "./types";

const proceed = settings.request.scopes.includes("Read.Presence.All");

export const useUserPresence = (userId?: string): SWRResponse<UserPresence> => {
  const { data } = useAccessToken({ proceed });

  const url = userId
    ? `https://graph.microsoft.com/v1.0/users/${userId}/presence`
    : `https://graph.microsoft.com/v1.0/me/presence`;

  const args = [url, data];

  return useSWR(args, ([url, token]) => fetcherWithToken(url, token));
};
