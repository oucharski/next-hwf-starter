import { ReactNode } from "react";
import { StatusAvatarProps } from "@/components/types";

export type AvatarSettings = Omit<StatusAvatarProps & AvatarMenuBase, "alt">;

type AvatarMenuBase = {
  profilePage?: boolean;
  menuItems?: ReactNode;
  signOut?: () => void;
  authenticated?: boolean;
};

export type AvatarMenuProps = AvatarMenuBase & {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
};

export type TopbarSettings = {
  title: string;
  avatar: AvatarSettings;
};
