import { createContext } from "react";
import { LayoutCtxInterface } from "./types";

const initial: LayoutCtxInterface = {
  head: {
    title: "",
    description: "",
  },
  topbar: {
    title: "",
    avatar: { profilePage: true, menuItems: [] },
  },
  drawer: {
    width: { closed: 60, open: 240 },
    open: false,
    items: [],
    footer: "",
  },
  general: {
    spacing: {
      content: 1,
    },
  },
  setHead: () => null,
  setTopbar: () => null,
  setDrawer: () => null,
  setGeneral: () => null,
};

export const LayoutContext = createContext<LayoutCtxInterface>(initial);
