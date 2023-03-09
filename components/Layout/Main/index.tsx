import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useStyles } from "./styles";
import { MainProps } from "./types";

export const Main = ({ children }: MainProps) => {
  const styles = useStyles();
  return (
    <Box sx={styles.container}>
      <Paper elevation={0} sx={styles.paper}>
        {children}
      </Paper>
    </Box>
  );
};
