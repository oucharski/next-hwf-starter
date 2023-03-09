import { ReactNode } from "react";
import { SetStateFn } from "@/types";
import { DrawerSettings } from "./Drawer/types";
import { HeadSettings } from "./Head/types";
import { TopbarSettings } from "./Topbar/types";

export type LayoutGeneralSettings = {
  spacing: {
    content: number;
  };
};

export type LayoutSettings = {
  topbar: TopbarSettings;
  head: HeadSettings;
  drawer: DrawerSettings;
  general: LayoutGeneralSettings;
};

export type LayoutProps = {
  children?: ReactNode;
} & LayoutSettings;

export type LayoutCtxInterface = LayoutSettings & {
  setHead: SetStateFn<HeadSettings>;
  setTopbar: SetStateFn<TopbarSettings>;
  setDrawer: SetStateFn<DrawerSettings>;
  setGeneral: SetStateFn<LayoutGeneralSettings>;
};
