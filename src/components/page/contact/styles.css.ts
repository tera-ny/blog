import { style } from "styled-vanilla-extract/qwik";

export const main = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "80px",
  padding: "20px 12px 32px"
});

export const section = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "40px"
});

export const sectionTitle = style({
  fontWeight: 500,
  fontSize: "24px"
});
