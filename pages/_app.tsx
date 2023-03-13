import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { AuthenticationProvider } from "@/providers";
import { LayoutProvider } from "@/components";
import { useHideSplashScreen } from "@/components/SplashScreen";
import { settings } from "settings";

const { layout, theme } = settings;

export default function App({ Component, pageProps }: AppProps) {
  useHideSplashScreen();
  return (
    <ThemeProvider theme={theme}>
      <AuthenticationProvider>
        <LayoutProvider {...layout}>
          <Component {...pageProps} />
        </LayoutProvider>
      </AuthenticationProvider>
    </ThemeProvider>
  );
}
