import { SVGAttributes } from "react";
import { BoxProps } from "@mui/system";

type ContactIconBaseProps = {
  fontSize?: SVGAttributes<SVGElement>["fontSize"];
} & BoxProps;

export type EmailButtonProps = ContactIconBaseProps & {
  email: string;
};

export type PhoneButtonProps = ContactIconBaseProps & {
  phone: string;
};
