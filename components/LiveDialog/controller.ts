import { SxProps } from "@mui/material";
import { DragResizePaperDimesions } from "@/components/types";
import { LiveDialogProps } from "./types";
import { defaults } from "./defaults";
import { settings } from "./settings";

const { handleId } = settings;

export const getPaperDimensions = (props: LiveDialogProps) => {
  const fields = ["minWidth", "maxWidth", "minHeight", "maxHeight"] as const;

  const dimensions: DragResizePaperDimesions = {
    minWidth: defaults.paperDimensions.minWidth,
    maxWidth: defaults.paperDimensions.maxWidth,
    minHeight: defaults.paperDimensions.minHeight,
    maxHeight: defaults.paperDimensions.maxHeight,
  };

  fields.forEach((field) => {
    const fromStyle = props.dialog?.style?.[field];
    // @ts-ignore
    const fromSx = props.dialog?.sx?.[field];
    const fromDefaults = defaults.paperDimensions[field];

    dimensions[field] = fromSx || fromStyle || fromDefaults;
  });

  return dimensions;
};

export const getPaperProps = (props: LiveDialogProps, sx: SxProps) => {
  const { draggable = defaults.draggable } = props;
  const { resizable = defaults.resizable } = props;
  const dimensions = getPaperDimensions(props);

  return { sx, draggable, resizable, handleId, ...dimensions };
};
