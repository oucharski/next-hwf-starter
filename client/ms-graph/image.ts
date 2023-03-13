import useSWR, { SWRResponse } from "swr";
import { fetcherBlobWithToken } from "@/client/common";
import { useAccessToken } from "./accessToken";

export const useUserImage = (userId?: string): SWRResponse<string> => {
  const { data } = useAccessToken();

  const url = userId
    ? `https://graph.microsoft.com/v1.0/users/${userId}/photo/$value`
    : `https://graph.microsoft.com/v1.0/me/photo/$value`;

  const args = [url, data];

  return useSWR(args, ([url, token]) =>
    fetcherBlobWithToken(url, token, "/profile_placeholder.png")
  );
};
