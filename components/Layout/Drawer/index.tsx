import ClickAwayListener from "@mui/base/ClickAwayListener";
import MaterialDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { useDrawer } from "../hooks";
import { Content } from "./Content";
import { Header } from "./Header";
import { useStyles } from "./styles";

export const Drawer = () => {
  const { open, triggerDrawer } = useDrawer();
  const styles = useStyles();

  const sx = styles.drawer;

  const handleClickAway = () => {
    if (open && triggerDrawer) {
      triggerDrawer();
    }
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <MaterialDrawer sx={sx} variant="permanent" anchor="left" open={open}>
        <Header />
        <Divider />
        <Content />
      </MaterialDrawer>
    </ClickAwayListener>
  );
};
