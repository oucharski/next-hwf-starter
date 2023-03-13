import Image from "next/image";
import { useImageSize } from "react-image-size";
import { Box, Typography } from "@mui/material";
import { ContactIcon } from "@/components";
import { styles } from "./styles";
import { UserAvatarInfoProps } from "./types";

export const UserAvatarInfo = (props: UserAvatarInfoProps) => {
  const { user, image } = props;
  const [imageDimensions, { loading: _loading }] = useImageSize(image);

  return (
    <Box sx={styles.container}>
      <Image
        alt={user.mail}
        src={image}
        height={imageDimensions?.height || 350}
        width={imageDimensions?.width || 350}
        style={{ maxHeight: 200, width: "auto" }}
      />

      <Typography component="span" sx={styles.iconsContainer}>
        <ContactIcon.Phone phone={user.mobilePhone} />
        <ContactIcon.Outlook email={user.mail} />
        <ContactIcon.Teams email={user.mail} />
      </Typography>
      <Typography variant="h2">{user.displayName}</Typography>
      <Typography variant="subtitle1">{user.jobTitle}</Typography>
      <Typography variant="body2">{user.mail}</Typography>
      <Typography variant="body2">{user.mobilePhone}</Typography>
      <Typography variant="body2">{user.officeLocation}</Typography>
    </Box>
  );
};
