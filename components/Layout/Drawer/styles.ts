import { SxProps, useTheme } from "@mui/material/styles";
import { useLayout } from "../hooks";

export const useStyles = () => {
  const theme = useTheme();
  const { drawer } = useLayout();
  const { width, open } = drawer;
  const closedWidth = width.closed;
  const openWidth = width.open;

  const drawerWidthMixin = () => ({
    width: open ? openWidth : closedWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
    zIndex: theme.zIndex.appBar + 1,
  });

  return {
    drawer: {
      flexShrink: 0,
      whiteSpace: "nowrap",
      boxSizing: "border-box",
      ...drawerWidthMixin(),
      "& .MuiDrawer-paper": drawerWidthMixin(),
    } as SxProps,
    header: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "space-between",
      transition: theme.transitions.create("margin-left", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    } as SxProps,

    content: {
      container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      },
      list: {
        icon: {
          width: `calc(${width.closed}px)`,
          justifyContent: "center",
        },
        text: {
          ml: open ? "1%" : "5%",
          trasition: "all 1000ms",
        },
      },
      footer: { p: 0.75 },
    },
  };
};
