import { style } from "styled-vanilla-extract/qwik";
import { globalStyle } from "@vanilla-extract/css";

export const container = style({
  minHeight: "100vh",
  display: "grid",
  gridTemplateRows: "58px auto 1px 38px"
});

export const hr = style({
  margin: "0 28px",
  "@media": {
    "(max-width: 700px)": {
      margin: "0 12px"
    }
  }
});

export const footer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "12px",
  fontWeight: 300,
  padding: "12px",
  justifyContent: "space-around"
});

globalStyle("h1, h2, h3, h4, h5, p, a, img", {
  margin: 0
});

globalStyle("h1, h2, h3, h4, h5, p, html, body", {
  fontFamily: '"Rubik", "M PLUS Rounded 1c", sans-serif',
  margin: 0
});

globalStyle("h1, h2, h3", {
  fontWeight: 500
});

globalStyle("h4", {
  fontWeight: 300
});

globalStyle("h1", {
  paddingTop: "4px",
  fontSize: "24px"
});

globalStyle("h2", {
  paddingTop: "4px",
  paddingBottom: 0
});

globalStyle("p", {
  fontSize: "14px",
  color: "#494949"
});

globalStyle("img", {
  verticalAlign: "middle"
});
