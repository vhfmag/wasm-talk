import { swiss as baseTheme } from "mdx-deck/themes";

const wasmColor = "#654ff0";

export const theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    text: wasmColor,
    code: "#00a5ff"
  },
  heading: {
    ...baseTheme.heading,
    maxWidth: "90vw"
  },
  a: {
    ...baseTheme.a,
    color: wasmColor
  },
  css: {
    ...baseTheme.css,
    "p, ul, ol": {
      color: baseTheme.colors.text
    }
  }
};
