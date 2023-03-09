import { useImperativeHandle, forwardRef, useState } from "react";
import { Box, DialogTitle } from "@mui/material";
import { DialogContentText, DialogActions, DialogContent } from "@mui/material";
import { IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DragResizePaper, ExtendedDialog } from "@/components";
import * as controller from "./controller";
import { defaults } from "./defaults";
import { settings } from "./settings";
import { useStyles } from "./styles";
import { LiveDialogProps, LiveDialogHandle } from "./types";

export const LiveDialog = forwardRef<LiveDialogHandle, LiveDialogProps>(
  (props, ref) => {
    const [open, setOpen] = useState<boolean>(false);
    const [content, setContent] = useState<any>(props.children);
    const [title, setTitle] = useState<string>(props.title || "");
    const { dialog } = props;

    const { backdrop = defaults.backdrop } = props;
    const styles = useStyles(props);

    const {
      confirmButton,
      confirmButtonOnClick,
      confirmButtonText = "Confirm",
    } = props;

    const {
      cancelButton,
      cancelButtonOnClick,
      cancelButtonText = "Cancel",
    } = props;

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    useImperativeHandle(
      ref,
      () => ({
        open: handleOpen,
        close: handleClose,
        setTitle,
        setContent,
      }),
      []
    );

    const handleConfirmButtonClick = () => {
      if (typeof confirmButtonOnClick === "function") {
        confirmButtonOnClick();
        handleClose();
      } else {
        handleClose();
      }
    };

    const handleCancelButtonClick = () => {
      if (typeof cancelButtonOnClick === "function") {
        cancelButtonOnClick();
        handleClose();
      } else {
        handleClose();
      }
    };

    return (
      <ExtendedDialog
        open={open}
        // TODO Add click away listener
        // onClose={handleClose}
        hideBackdrop={!backdrop}
        PaperComponent={DragResizePaper}
        PaperProps={controller.getPaperProps(props, styles.paperComponent)}
        aria-labelledby={settings.handleId}
        {...dialog}
        sx={styles.dialog}
      >
        <Box>
          <DialogTitle style={styles.title.container} id={settings.handleId}>
            {title}
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={styles.title.iconButton}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent>
            {typeof content === "string" ? (
              <DialogContentText>{content}</DialogContentText>
            ) : (
              content
            )}
          </DialogContent>
        </Box>

        <Box sx={styles.footer.container}>
          <DialogActions>
            {cancelButton ? (
              <Button autoFocus onClick={handleCancelButtonClick}>
                {cancelButtonText}
              </Button>
            ) : null}
            {confirmButton ? (
              <Button onClick={handleConfirmButtonClick}>
                {confirmButtonText}
              </Button>
            ) : null}
          </DialogActions>
        </Box>
      </ExtendedDialog>
    );
  }
);

LiveDialog.displayName = "LiveDialog";
