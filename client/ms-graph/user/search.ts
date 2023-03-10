import useSWR, { SWRResponse } from "swr";
import { fetcherWithToken, useAccessToken } from "@/client/common";
import { ExtendedUser } from "../types";

type ValueExtendedUser = { value: ExtendedUser[] };
type SWRExtendedUsers = SWRResponse<ValueExtendedUser>;
type SWRExtendedUser = SWRResponse<ExtendedUser>;

const useGetUsersBase = <T extends object>(
  field: string,
  value: string,
  unwrap?: any
): SWRResponse<T> => {
  const { data } = useAccessToken();
  const url = `https://graph.microsoft.com/beta/users?$count=true&ConsistencyLevel=eventual&$search="${field}:${value}"`;
  const args = [url, data];

  return useSWR(args, ([url, token]) =>
    fetcherWithToken(url, token).then((swrData) => {
      if (unwrap && swrData) {
        return unwrap(swrData);
      }

      return swrData;
    })
  );
};

/* ---------------------------------- Many ---------------------------------- */

export const useGetUsersByLocalname = (value: string): SWRExtendedUsers => {
  return useGetUsersBase<ValueExtendedUser>("onPremisesSamAccountName", value);
};

export const useGetUsersByName = (value: string): SWRExtendedUsers => {
  return useGetUsersBase<ValueExtendedUser>("displayName", value);
};

export const useGetUsersByMail = (value: string): SWRExtendedUsers => {
  return useGetUsersBase<ValueExtendedUser>("mail", value);
};

/* --------------------------------- Single --------------------------------- */

const firstOrUndefined = (swrData: ValueExtendedUser) => {
  const first = swrData.value[0];
  return first;
};

export const useGetUserByLocalname = (value: string): SWRExtendedUser => {
  const field = "onPremisesSamAccountName";
  return useGetUsersBase<ExtendedUser>(field, value, firstOrUndefined);
};

export const useGetUserByName = (value: string): SWRExtendedUser => {
  const field = "displayName";
  return useGetUsersBase<ExtendedUser>(field, value, firstOrUndefined);
};

export const useGetUserByMail = (value: string): SWRExtendedUser => {
  const field = "mail";
  return useGetUsersBase<ExtendedUser>(field, value, firstOrUndefined);
};
