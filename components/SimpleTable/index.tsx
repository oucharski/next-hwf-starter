import _, { Dictionary } from "lodash";
import { Typography, Box } from "@mui/material";
import { styles } from "./styles";
import { SimpleTableProps } from "./types";

export const SimpleTable = <T extends Dictionary<string>>(
  props: SimpleTableProps<T>
) => {
  const { sx = {}, displayUndefined = true } = props;

  return (
    <Box sx={{ ...styles.container, ...sx }}>
      <Typography variant="h6">{props.title}</Typography>
      {props.prepend}
      <Box sx={styles.table}>
        {props.fields.map((_field, index) => {
          const f = _field.toString();
          const field = _.startCase(f);
          const value = props.source[f];

          if (value === undefined && !displayUndefined) {
            return null;
          }

          return (
            <Box key={index} sx={styles.row}>
              <Box sx={styles.field}>{field}</Box>
              <Box sx={styles.value}>{value}</Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
