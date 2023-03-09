import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { LayoutProps } from "@/components/types";
import { LayoutContext } from "./context";
import { Drawer } from "./Drawer";
import { Head } from "./Head";
import { Main } from "./Main";
import { Topbar } from "./Topbar";

export const LayoutProvider = (props: LayoutProps) => {
  const [head, setHead] = useState<LayoutProps["head"]>(props.head);
  const [topbar, setTopbar] = useState<LayoutProps["topbar"]>(props.topbar);
  const [drawer, setDrawer] = useState<LayoutProps["drawer"]>(props.drawer);
  const [general, setGeneral] = useState<LayoutProps["general"]>(props.general);

  const triggerDrawer = () => setDrawer({ ...drawer, open: !drawer.open });

  const _drawer = { ...drawer, triggerDrawer };

  const values = { head, topbar, drawer: _drawer, general };

  const setters = { setHead, setTopbar, setDrawer, setGeneral };

  const value = { ...values, ...setters };

  return (
    <LayoutContext.Provider value={value}>
      <Head />
      <CssBaseline />
      <Topbar />
      <Drawer />
      <Main>{props.children}</Main>
    </LayoutContext.Provider>
  );
};

export * from "./hooks";
export { BreadcrumbInfo } from "./Breadcrumbs";
