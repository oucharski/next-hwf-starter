import { Avatar } from "../Avatar";
import { StatusBadge } from "./StatusBadge";
import { StatusAvatarProps } from "./types";

export const StatusAvatar = (props: StatusAvatarProps) => {
  const { status, ...avatar } = props;

  return (
    <StatusBadge status={status}>
      <Avatar {...avatar} />
    </StatusBadge>
  );
};
