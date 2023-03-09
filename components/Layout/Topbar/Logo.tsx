import { Box } from "@mui/material";
import Image from "next/image";

export const Logo = () => {
  return (
    <Box height="20px">
      <Image
        alt="Andritz Hydro"
        src={"/logo_short.svg"}
        height={1}
        width={1}
        style={{ position: "relative", height: "100%", width: "100%" }}
      />
    </Box>
  );
};
