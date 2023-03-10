import useSWR, { SWRResponse } from "swr";
import { fetcherWithToken } from "@/client/common";
import { useAccessToken } from "../accessToken";
import { ExtendedUser, UserOnPrem, User } from "../types";

export const useUser = (userId?: string): SWRResponse<User> => {
  const { data } = useAccessToken();

  const url = userId
    ? `https://graph.microsoft.com/v1.0/users/${userId}`
    : `https://graph.microsoft.com/v1.0/me`;

  const args = [url, data];

  return useSWR(args, ([url, token]) => fetcherWithToken(url, token));
};

export const useLocalUsername = (userId?: string): SWRResponse<UserOnPrem> => {
  const { data } = useAccessToken();

  const url = userId
    ? `https://graph.microsoft.com/beta/users/${userId}?$select=mailNickname,onPremisesSamAccountName`
    : `https://graph.microsoft.com/beta/me/?$select=mailNickname,onPremisesSamAccountName`;

  const args = [url, data];

  return useSWR(args, ([url, token]) => fetcherWithToken(url, token));
};

export const useExtendedUser = (userId?: string): SWRResponse<ExtendedUser> => {
  const { data } = useAccessToken();

  const url = userId
    ? `https://graph.microsoft.com/beta/users/${userId}`
    : `https://graph.microsoft.com/beta/me`;

  const args = [url, data];

  return useSWR(args, ([url, token]) => fetcherWithToken(url, token));
};

export * from "./search";
