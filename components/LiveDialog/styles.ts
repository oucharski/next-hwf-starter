import { Theme } from "@mui/material";
import { defaults } from "./defaults";
import { LiveDialogProps } from "./types";
import * as controller from "./controller";

export const useStyles = (props: LiveDialogProps) => {
  const { draggable = defaults.draggable } = props;
  const paperDimensions = controller.getPaperDimensions(props);
  return {
    dialog: {},
    paperComponent: {
      ...paperDimensions,
    },
    title: {
      container: { cursor: draggable ? "move" : undefined },
      iconButton: {
        position: "absolute",
        right: 8,
        top: 8,
        color: (theme: Theme) => theme.palette.grey[500],
      },
    },
    footer: {
      container: {
        flexGrow: 1,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
      },
    },
  };
};
