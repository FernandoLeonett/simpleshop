import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  colors: {
    primary: theme.colors["orange"],
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },
  // styles: {
  //   global: {
  //     body: {
  //       backgroundColor: "orange.10",
  //     },
  //   },
  // },
});
