import { application } from "./application";
import { drawer } from "./drawer";
import { LayoutSettings } from "./types";

export const layout: LayoutSettings = {
  head: {
    title: application.title,
    description: application.description,
  },
  topbar: {
    title: application.title,
    avatar: {
      size: 50,
      profilePage: true,
    },
  },
  drawer: {
    width: { closed: 60, open: 240 },
    open: false,
    items: drawer.items,
    footer: drawer.footer,
  },
  general: {
    spacing: {
      content: 2,
    },
  },
};
