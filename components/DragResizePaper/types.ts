import { CSSProperties } from "react";
import { PaperProps, DialogProps } from "@mui/material";

export type ExtendedDialogProps = DialogProps & {
  PaperProps?: DragResizePaperProps;
  // TODO fix this type
  PaperComponent?: any;
};

export type DragResizePaperDimesions = {
  minHeight: CSSProperties["minHeight"];
  maxHeight: CSSProperties["maxHeight"];
  minWidth: CSSProperties["minWidth"];
  maxWidth: CSSProperties["maxHeight"];
};

interface DraggableProps {
  draggable: true;
  handleId: string;
}

interface NotDraggableProps {
  draggable: false;
}

interface ResizableProps extends DragResizePaperDimesions {
  resizable: true;
}

interface NotResizableProps {
  resizable: false;
}

export type DragResizePaperProps = PaperProps &
  (DraggableProps | NotDraggableProps) &
  (ResizableProps | NotResizableProps);
