import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Avatar } from "./Avatar";
import { Breadcrumbs } from "../Breadcrumbs";
import { useStyles } from "./styles";
import { Logo } from "./Logo";

export const Topbar = () => {
  const styles = useStyles();

  return (
    <AppBar sx={styles.appBar} elevation={0} color={"transparent"}>
      <Toolbar sx={styles.toolbar}>
        <Box sx={{ display: "flex", alignItems: "center", height: 30 }}>
          <Logo />
          <Breadcrumbs />
        </Box>
        <Avatar />
      </Toolbar>
    </AppBar>
  );
};
