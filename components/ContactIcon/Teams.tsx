import { Box } from "@mui/material";
import { SiMicrosoftteams } from "react-icons/si";
import { EmailButtonProps } from "./types";
import { defaults } from "./defaults";
import { settings } from "./settings";

const { colors } = settings;

export const IconTeams = (props: EmailButtonProps) => {
  const { email, fontSize = defaults.fontSize, ...boxProps } = props;
  return email ? (
    <Box {...boxProps}>
      <a href={`sip:${email}`}>
        <SiMicrosoftteams
          title={email}
          fontSize={fontSize}
          color={colors.teams}
        />
      </a>
    </Box>
  ) : null;
};
