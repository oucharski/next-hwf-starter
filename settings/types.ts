import { Theme } from "@mui/material";
import { LayoutSettings } from "@/components/types";

export type { LayoutSettings } from "@/components/types";

export type ApplicationSettings = {
  title: string;
  description: string;
};

export type AppSettings = {
  application: ApplicationSettings;
  layout: LayoutSettings;
  theme: Theme;
};
