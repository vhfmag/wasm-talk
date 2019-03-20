import { swiss as baseTheme } from "mdx-deck/themes";

const wasmColor = "#654ff0";

export const theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    text: wasmColor,
    code: "#00a5ff"
  },
  a: {
    ...baseTheme.a,
    color: wasmColor
  },
  heading: {
    ...baseTheme.heading,
    width: "90vw"
  },
  css: {
    ...baseTheme.css,
    "[name=wrapper] > p, [name=wrapper] > ul, [name=wrapper] > ol, [name=wrapper] > small": {
      color: baseTheme.colors.text
    },
    "[name=wrapper] > img": {
      maxHeight: "50vh",
      width: "90vw",
      objectFit: "contain",
      objectPosition: "center center"
    },
    "[name=wrapper]": {
      padding: "5vw"
    }
  }
};
