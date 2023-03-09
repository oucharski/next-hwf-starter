import Image from "next/image";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useDrawer } from "../hooks";
import { useStyles } from "./styles";

export const Header = () => {
  const drawer = useDrawer();
  const styles = useStyles();
  const { open, triggerDrawer } = drawer;

  return (
    <Box sx={styles.header}>
      {open ? (
        <Box height="20px">
          <Image
            alt="Andritz Hydro"
            src={"/logo.svg"}
            height={1}
            width={1}
            style={{ position: "relative", height: "100%", width: "100%" }}
          />
        </Box>
      ) : null}
      <IconButton onClick={triggerDrawer}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </Box>
  );
};
