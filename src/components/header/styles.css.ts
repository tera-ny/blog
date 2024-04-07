import { style } from "styled-vanilla-extract/qwik";

export const header = style({
  padding: "34px 54px 0",
  display: "flex",
  gap: "28px",
  fontSize: "20px",
  "@media": {
    "(max-width: 700px)": {
      padding: "20px 20px 12px"
    }
  }
});

export const link = style({
  color: "#000000",
  selectors: {
    "&:hover": {
      color: "#f8ab38"
    }
  }
});
