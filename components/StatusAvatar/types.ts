import { BadgeProps } from "@mui/material";
import { AvatarProps } from "../Avatar/types";

export const statusStype = [
  "Available",
  "Busy",
  "DoNotDisturb",
  "Away",
  "BeRightBack",
  "Out",
  "PresenceUnknown",
  "Offline",
] as const;

export type StatusType = typeof statusStype[number] | string;

export type StatusAvatarProps = AvatarProps & {
  status?: StatusBadgeProps["status"];
};

export type StatusBadgeProps = BadgeProps & {
  status?: StatusType;
};
