import { Theme } from "@mui/material/styles";
import { colorsDict } from "./settings";
import { StatusType } from "./types";

export const getStyles = (presence?: StatusType) => {
  const color = presence ? colorsDict[presence] : "grey";

  return {
    badge: {
      "& .MuiBadge-badge": {
        display: presence ? undefined : "none",
        backgroundColor: color,
        color: color,
        boxShadow: (theme: Theme) =>
          `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          animation: "ripple 1.2s infinite ease-in-out",
          border: "1px solid currentColor",
          content: '""',
        },
      },
      "@keyframes ripple": {
        "0%": {
          transform: "scale(.8)",
          opacity: 1,
        },
        "100%": {
          transform: "scale(2.4)",
          opacity: 0,
        },
      },
    },
  };
};
