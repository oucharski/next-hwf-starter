import { useEffect } from "react";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useAccount, useMsal } from "@azure/msal-react";
import { msalConfig } from "./msalConfig";

const msalInstance = new PublicClientApplication(msalConfig);

export const AuthenticationProvider = ({ children }: any) => {
  return (
    <MsalProvider instance={msalInstance}>
      <Authentication>{children}</Authentication>
    </MsalProvider>
  );
};

const Authentication = ({ children }: { children: any }) => {
  const { accounts } = useMsal();
  const account = useAccount();

  useEffect(() => {
    if (!account && Boolean(accounts.length)) {
      msalInstance.setActiveAccount(accounts[0]);
    }
  }, [account, accounts]);

  useEffect(() => {
    (async () => {
      await msalInstance.handleRedirectPromise();
      const activeAccount = msalInstance.getAllAccounts()[0];
      if (!activeAccount) {
        // No user signed in
        try {
          await msalInstance.loginRedirect();
        } catch (e: any) {
          // Authentication (hopefully) in progress
          console.log(e.message);
        }
      }
    })();
  }, []);

  return accounts ? children : null;
};
