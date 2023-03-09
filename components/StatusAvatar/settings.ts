import { CSSProperties } from "react";
import { StatusType } from "./types";

export const colors: { status: StatusType; color: CSSProperties["color"] }[] = [
  { status: "Available", color: "#93c100" },
  { status: "Busy", color: "#c23300" },
  { status: "DoNotDisturb", color: "#c23300" },
  { status: "Away", color: "#fbd000" },
  { status: "BeRightBack", color: "#fbd000" },
  { status: "Out", color: "#b2159c" },
  { status: "PresenceUnknown", color: "#949494" },
  { status: "Offline", color: "#949494" },
];

export const colorsDict = colors.reduce(
  (prev, curr) => ({ ...prev, [curr.status]: curr.color }),
  {}
) as { [key: string]: string };
