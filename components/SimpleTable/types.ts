import { ReactNode } from "react";
import { SxProps } from "@mui/material";

export type SimpleTableProps<T> = {
  fields: (keyof T)[];
  source: T;
  title: string;
  prepend?: ReactNode;
  displayUndefined?: boolean;
  sx?: SxProps;
};
