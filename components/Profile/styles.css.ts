import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px"
});

export const image = style({
  borderRadius: "50%",
  overflow: "hidden"
});
