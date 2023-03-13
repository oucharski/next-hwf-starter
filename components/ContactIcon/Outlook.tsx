import { Box } from "@mui/material";
import { SiMicrosoftoutlook } from "react-icons/si";
import { defaults } from "./defaults";
import { settings } from "./settings";
import { EmailButtonProps } from "./types";

const { colors } = settings;

export const IconOutlook = (props: EmailButtonProps) => {
  const { email, fontSize = defaults.fontSize, ...boxProps } = props;
  return email ? (
    <Box {...boxProps}>
      <a href={`email:${email}`}>
        <SiMicrosoftoutlook
          title={email}
          fontSize={fontSize}
          color={colors.outlook}
        />
      </a>
    </Box>
  ) : null;
};
