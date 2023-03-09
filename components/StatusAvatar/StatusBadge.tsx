import Badge from "@mui/material/Badge";
import { getStyles } from "./styles";
import { StatusBadgeProps } from "./types";

export const StatusBadge = (props: StatusBadgeProps) => {
  const { status, children } = props;

  return (
    <Badge
      sx={getStyles(status).badge}
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      variant="dot"
    >
      {children}
    </Badge>
  );
};
