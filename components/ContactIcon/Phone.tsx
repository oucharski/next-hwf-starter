import { Box } from "@mui/material";
import { FcPhone } from "react-icons/fc";
import { defaults } from "./defaults";
import { PhoneButtonProps } from "./types";

export const IconPhone = (props: PhoneButtonProps) => {
  const { phone, fontSize = defaults.fontSize, ...boxProps } = props;
  return phone ? (
    <Box {...boxProps}>
      <a href={`tel:${phone}`}>
        <FcPhone title={phone} fontSize={fontSize} />
      </a>
    </Box>
  ) : null;
};
