import { useState, useEffect, MouseEvent } from "react";
import { IconButton } from "@mui/material";
import { useAccount, useMsal } from "@azure/msal-react";
import { useUserImage, useUserPresence } from "@/client/msal";
import { StatusAvatar } from "@/components";
import { useTopbar } from "@/components/Layout";
import { AvatarMenu } from "./AvatarMenu";

/**
 * If the name is truthy, split it into an array of two strings, otherwise, return an array of two
 * empty strings. Then, if the first and last names are truthy, return the first letter of each,
 * otherwise, return an empty string
 * @param {string} [name] - string
 * @returns A function that takes a name and returns the initials of the name.
 */
const getInitials = (name?: string) => {
  const [lastName, firstName] = name ? name.split(" ") : ["", ""];
  const initials = firstName && lastName ? `${firstName[0]}${lastName[0]}` : "";
  return initials;
};

type ClickEvent = MouseEvent<HTMLElement>;

export const Avatar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [username, setUsername] = useState<string>("");
  const [name, setName] = useState<string>();
  const { instance } = useMsal();
  const { avatar } = useTopbar();
  const account = useAccount();
  const { data: presence } = useUserPresence();
  const { data: image = "" } = useUserImage();

  const { profilePage = false, menuItems } = avatar;

  const handleClick = (ev: ClickEvent) => setAnchorEl(ev.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const signOut = () => instance.logout();

  useEffect(() => {
    if (account) {
      setUsername(account.username);
      setName(account.name);
    }
  }, [account]);

  const initials = getInitials(name);
  const status = presence?.availability;
  const statusAvatarProps = { alt: username, image, text: initials, status };

  return (
    <>
      <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
        <StatusAvatar {...statusAvatarProps} />
      </IconButton>
      <AvatarMenu
        anchorEl={anchorEl}
        handleClose={handleClose}
        profilePage={profilePage}
        menuItems={menuItems}
        signOut={signOut}
      />
    </>
  );
};
