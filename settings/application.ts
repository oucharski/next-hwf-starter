import { ApplicationSettings } from "./types";

export const application: ApplicationSettings = {
  title: process.env.NEXT_PUBLIC_APPLICATION_TITLE || "",
  description: process.env.NEXT_PUBLIC_APPLICATION_TITLE || "",
};
