import Link from "next/link";
import MuiAvatar from "@mui/material/Avatar";
import { Divider, ListItemIcon } from "@mui/material";
import { Menu, MenuItem } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import { AvatarMenuProps } from "../types";
import { styles } from "./styles";

export const AvatarMenu = (props: AvatarMenuProps) => {
  const { profilePage, menuItems } = props;
  const { anchorEl, handleClose, signOut } = props;

  const open = Boolean(anchorEl);
  const PaperProps = { elevation: 0, sx: styles.menuPaper };
  const menuProps = { anchorEl, open, PaperProps, sx: styles.menu };

  const profileBtn = profilePage ? (
    <Link href="/profile" passHref>
      <MenuItem onClick={handleClose} href="/profile">
        <MuiAvatar /> Profile
      </MenuItem>
    </Link>
  ) : null;

  return (
    <Menu {...menuProps} onClose={handleClose} onClick={handleClose}>
      {profileBtn}
      {menuItems}
      {profileBtn || menuItems ? <Divider /> : null}
      <MenuItem onClick={signOut}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};
