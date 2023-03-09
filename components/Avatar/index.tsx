import Image from "next/image";
import MuiAvatar from "@mui/material/Avatar";
import { defaults } from "./defaults";
import { AvatarProps } from "./types";

export const Avatar = (props: AvatarProps) => {
  const { text = defaults.text, size = defaults.size } = props;
  const { image, alt } = props;

  const sx = { width: size, height: size };
  return (
    <MuiAvatar sx={sx} {...props}>
      {image ? <Image alt={alt} src={image} {...sx} /> : text}
    </MuiAvatar>
  );
};
