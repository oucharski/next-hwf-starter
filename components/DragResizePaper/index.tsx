import { useRef } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import { Box, Paper } from "@mui/material";
import { useStyles } from "./styles";
import { DragResizePaperProps } from "./types";

export const DragResizePaper = (props: DragResizePaperProps) => {
  const nodeRef = useRef(null);
  const styles = useStyles(props);

  /**  
    handleId is not on the type if it is not draggable, therefore
    I had to ignore it, because this was being passed to DOM and 
    causing errors.
  **/

  // @ts-ignore
  const { children, resizable, draggable, handleId, ...rest } = props;

  const paperContent = resizable ? (
    <Box sx={styles.resizableContainer}>
      <ResizableBox height={400} width={600} className={"resizable"}>
        {children}
      </ResizableBox>
    </Box>
  ) : (
    children
  );

  const paper = (
    <Paper {...rest} ref={nodeRef}>
      {paperContent}
    </Paper>
  );

  if (draggable) {
    return (
      <Draggable nodeRef={nodeRef} handle={`#${handleId}`}>
        {paper}
      </Draggable>
    );
  }

  return paper;
};

export { ExtendedDialog } from "./ExtendedDialog";
