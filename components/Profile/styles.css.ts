import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px"
});

export const imageWrapper = style({
  position: "relative",
  maxWidth: "240px",
  width: "100%",
  aspectRatio: "1/1",
  borderRadius: "50%",
  overflow: "hidden"
});
