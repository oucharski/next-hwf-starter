import { createTheme } from "@mui/material/styles";

const mainColor = process.env.NEXT_PUBLIC_THEME_MAIN_COLOR!;
const mainColorLight = process.env.NEXT_PUBLIC_THEME_MAIN_COLOR_LIGHT!;
const mainColorDark = process.env.NEXT_PUBLIC_THEME_MAIN_COLOR_DARK!;
const secondaryColor = process.env.NEXT_PUBLIC_THEME_MAIN_COLOR!;
const secondaryColorLight = process.env.NEXT_PUBLIC_THEME_MAIN_COLOR_LIGHT!;
const secondaryColorDark = process.env.NEXT_PUBLIC_THEME_MAIN_COLOR_DARK!;

export const theme = createTheme({
  typography: {
    body1: { color: secondaryColorDark },
    fontFamily:
      '"Roboto","Segoe UI","GeezaPro","DejaVu Serif","sans-serif","-apple-system","BlinkMacSystemFont"',
    h1: {
      fontSize: "44px",
      fontWeight: "700",
      color: mainColorDark,
      marginBottom: "15px",
      letterSpacing: ".01em",
      width: "100%",
      lineHeight: "1.2em",
      "@media (max-width:768px)": {
        fontSize: "36px",
      },
      "@media (max-width:480px)": {
        fontSize: "28px",
      },
    },
    h2: {
      fontSize: "20px",
      fontWeight: "600",
      color: mainColorDark,
      lineHeight: "1.25em",
      marginBottom: "25px",
      "@media (max-width:768px)": {
        fontSize: "24px",
      },
      "@media (max-width:480px)": {
        fontSize: "20px",
      },
    },
    h3: {
      fontSize: "20px",
      fontWeight: "400",
      color: secondaryColorDark,
      marginBottom: "10px",
      lineHeight: "1.35em",
      "@media (max-width:768px)": {
        fontSize: "24px",
      },
      "@media (max-width:480px)": {
        fontSize: "20px",
      },
    },
    h4: {
      fontSize: "24px",
      fontWeight: "600",
      color: secondaryColorLight,
      marginBottom: "25px",
      letterSpacing: "0.1em",
      "@media (max-width:768px)": {
        fontSize: "20px",
      },
      "@media (max-width:480px)": {
        fontSize: "20px",
      },
    },
    h5: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#FFF",
      marginBottom: "20px",
      textTransform: "uppercase",
    },
    h6: {
      fontSize: "20px",
      fontWeight: "400",
      color: mainColor,
      marginBottom: "15px",
    },
  },
  palette: {
    primary: {
      main: mainColor,
      light: mainColorLight,
      dark: mainColorLight,
    },
    secondary: {
      main: secondaryColor,
      light: secondaryColorLight,
      dark: secondaryColorDark,
    },
  },
});
