import { Theme, useTheme } from "@mui/material/styles";
import { useLayout } from "@/components/Layout";

export const useStyles = () => {
  const { drawer, general } = useLayout();
  const { mixins } = useTheme();
  const closedWidth = drawer.width.closed;

  const contentSpacing = general.spacing.content;
  const marginLeftPxl = `${closedWidth}px`;
  const toolbarHeightPxl = `${mixins.toolbar.minHeight}px`;

  return {
    container: {
      marginTop: toolbarHeightPxl,
      marginLeft: marginLeftPxl,
      position: "fixed",
      height: "100%",
      width: `calc(100% - ${marginLeftPxl})`,
    },
    paper: {
      height: (t: Theme) =>
        `calc(100% - ${toolbarHeightPxl} - ${t.spacing(contentSpacing)})`,
      mt: (theme: Theme) => theme.spacing(contentSpacing),
      p: (theme: Theme) => theme.spacing(contentSpacing),
    },
  };
};
