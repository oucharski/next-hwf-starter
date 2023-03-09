import { useContext } from "react";
import { LayoutContext } from "./context";

export const useLayout = () => useContext(LayoutContext);

export const useTopbar = () => useContext(LayoutContext).topbar;

export const useDrawer = () => useContext(LayoutContext).drawer;
