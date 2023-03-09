import { DragResizePaperProps } from "./types";
import { defaults } from "./defaults";

export const useStyles = (props: DragResizePaperProps) => {
  if (props.resizable) {
    const minHeight = props.minHeight || defaults.resizableContainer;
    const maxHeight = props.maxHeight || defaults.resizableContainer;
    const minWidth = props.minWidth || defaults.resizableContainer;
    const maxWidth = props.maxWidth || defaults.resizableContainer;
    return {
      resizableContainer: {
        ["& .resizable"]: {
          minHeight,
          maxHeight,
          minWidth,
          maxWidth,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          "& .react-resizable-handle": {
            position: "absolute",
            width: 20,
            height: 20,
            bottom: 0,
            right: 0,
            background:
              "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+')",
            "background-position": "bottom right",
            padding: "0 3px 3px 0",
            "background-repeat": "no-repeat",
            "background-origin": "content-box",
            "box-sizing": "border-box",
            cursor: "se-resize",
          },
        },
      },
    };
  }

  return {};
};
