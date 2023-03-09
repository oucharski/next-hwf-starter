import { ComponentType } from "react";
export type DrawerItem = DrawerItemIcon | DrawerItemDivider;

export type DrawerItemDivider = {
  type: "divider";
};

export type DrawerItemIcon = {
  type: "icon";
  icon: ComponentType;
  text: string;
  path: string;
};

export type DrawerSettings = {
  open?: boolean;
  items: DrawerItem[];
  width: {
    closed: number;
    open: number;
  };
  triggerDrawer?: () => void;
  footer?: any;
};
