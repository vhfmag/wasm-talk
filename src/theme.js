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
  pre: {
    ...baseTheme.pre,
    overflow: "auto",
    maxWidth: "90vw"
  },
  blockquote: {
    ...baseTheme.blockquote,
    borderLeft: "0.25em solid currentColor",
    paddingLeft: "0.75em",
    marginLeft: "0"
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
    "[name=wrapper] > img, [name=wrapper] > a > img": {
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
