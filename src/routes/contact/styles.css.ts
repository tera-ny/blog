import { style } from "@vanilla-extract/css";

export const main = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "80px"
});

export const section = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "40px",
  padding: "0 8px"
});

export const sectionTitle = style({
  fontWeight: 500,
  fontSize: "24px"
});
