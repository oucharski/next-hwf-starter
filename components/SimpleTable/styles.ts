import { settings } from "./settings";

export const styles = {
  container: { mb: 1 },
  table: {
    "& > div:nth-of-type(odd)": {
      backgroundColor: settings.zebraColor,
    },
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    p: 0.5,
    px: 1,
    fontSize: "0.8em",
    mb: 0.1,
  },
  field: { fontWeight: 600 },
  value: {},
};
