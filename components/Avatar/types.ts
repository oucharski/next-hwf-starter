import { AvatarProps as MUIAvatarProps } from "@mui/material/Avatar";

export type AvatarProps = MUIAvatarProps & {
  alt: string;
  size?: number;
  image?: string;
  text?: string;
};
