import Link from "next/link";
import { Divider, Box, List, ListItem } from "@mui/material";
import { ListItemButton, ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import { useDrawer } from "@/components/Layout/hooks";
import { useStyles } from "./styles";

export const Content = () => {
  const drawer = useDrawer();
  const { items, open, triggerDrawer, footer } = drawer;
  const styles = useStyles().content;

  const handleOnClick = () => {
    if (open && triggerDrawer) {
      triggerDrawer();
    }
  };

  return (
    <Box sx={styles.container}>
      <List>
        {items.map((item, index) => {
          switch (item.type) {
            case "divider":
              return <Divider key={index} sx={{ my: 0.5 }} />;
            case "icon":
              return (
                <Link key={index} href={item.path}>
                  <ListItem onClick={handleOnClick} disablePadding>
                    <ListItemButton sx={{ px: 0 }}>
                      <ListItemIcon sx={styles.list.icon}>
                        {<item.icon />}
                      </ListItemIcon>
                      <ListItemText primary={item.text} sx={styles.list.text} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              );
          }
        })}
      </List>
      <Box sx={styles.footer}>{footer}</Box>
    </Box>
  );
};
