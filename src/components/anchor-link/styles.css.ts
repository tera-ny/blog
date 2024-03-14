import { style } from "@vanilla-extract/css";

export const link = style({
  color: "#000000",
  fontSize: "18px",
  selectors: {
    "&:hover": {
      color: "#f8ab38"
    }
  }
});
