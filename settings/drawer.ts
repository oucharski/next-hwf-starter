import { LayoutSettings } from "./types";

export const drawer: Omit<LayoutSettings["drawer"], "width" | "open"> = {
  items: [],
  footer: "",
};
