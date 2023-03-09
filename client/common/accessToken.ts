import { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { RedirectRequest } from "@azure/msal-browser";

type UseAccessToken = { scopes?: RedirectRequest["scopes"]; proceed?: boolean };

type UseAccessTokenResponse = {
  data: string;
  isLoading: boolean;
  error: boolean;
};

export const useAccessToken = (
  props?: UseAccessToken
): UseAccessTokenResponse => {
  const { scopes = [] } = props || {};
  const { proceed = true } = props || {};

  const { instance } = useMsal();
  const [data, setData] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(false);
  const [expiresOn, setExpiresOn] = useState<Date>();

  if (expiresOn) {
    const expired = expiresOn < new Date();
    if (expired && valid) {
      console.log("Invalidating Access Token...");
      setValid(false);
    }
  }

  useEffect(() => {
    const getToken = async () => {
      const account = instance.getAllAccounts()[0];

      if (account && !valid) {
        const req = { scopes, account };
        console.log("Acquiring Access Token...");
        await instance
          .acquireTokenSilent(req)
          .then(({ accessToken, expiresOn }) => {
            setIsLoading(false);
            setData(accessToken);
            setExpiresOn(expiresOn!);
            setValid(true);
          })
          .catch((error: any) => {
            console.error(error.message);
            setIsLoading(false);
            setError(true);
          });
      }
    };
    if (proceed && !valid) {
      getToken();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instance, valid]);

  return { data, isLoading, error };
};
