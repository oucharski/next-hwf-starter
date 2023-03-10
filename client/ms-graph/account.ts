import { useEffect, useState } from "react";
import { AccountInfo } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";

type UseAccount = { data?: AccountInfo; isLoading: boolean };

export const useAccount = (): UseAccount => {
  const [data, setData] = useState<AccountInfo>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { instance } = useMsal();

  useEffect(() => {
    setData(instance.getAllAccounts()[0]);
    setIsLoading(false);
  }, [instance]);

  return { data, isLoading };
};
