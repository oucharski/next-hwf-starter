import { useLayout } from "../hooks";

const dark = false;
const backgroundColor = dark ? "#006EB4" : "white";
const fontColor = dark ? "white" : "#312f2f";

export const useStyles = () => {
  const { drawer, general } = useLayout();
  const closedWidth = drawer.width.closed;
  const contentSpacing = general.spacing.content;

  return {
    appBar: {
      position: "fixed",
      "& .MuiToolbar-root": {
        pl: (theme: any) => theme.spacing(contentSpacing),
      },
      borderBottom: "1px solid rgba(0, 0, 0, 0.025)",
      backgroundColor,
      color: fontColor,
    },
    toolbar: {
      ml: `${closedWidth}px`,
      flex: 1,
      justifyContent: "space-between",
    },
  };
};
