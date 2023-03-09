import { SetStateFn } from "@/types";
import { ExtendedDialogProps } from "@/components/types";

export type LiveDialogHandle = {
  open: () => void;
  close: () => void;
  setContent: SetStateFn<any>;
  setTitle: SetStateFn<string>;
};

export type LiveDialogProps = {
  backdrop?: boolean;
  resizable?: boolean;
  draggable?: boolean;
  title?: string;
  children?: any;
  dialog?: Omit<ExtendedDialogProps, "open" | "PaperProps">;
} & LiveDialogButtons;

export type LiveDialogButtons = {
  confirmButton?: boolean;
  confirmButtonText?: string;
  confirmButtonOnClick?: any;
  cancelButton?: boolean;
  cancelButtonText?: string;
  cancelButtonOnClick?: any;
};

export type ResizableWrapperProps = {
  children: any;
  resizable?: boolean;
};
