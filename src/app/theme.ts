import { extendTheme } from "@chakra-ui/react";

export const colors = {
  /* `brand` is defining a color palette for the brand colors of the application. It includes shades of
  the primary color, such as `primaryLight` and `primaryDark`. */
  brand: {
    primary: "hsl(337,79%,60%)",
    primaryLight: "hsl(337,79%,70%)",
    primaryDark: "hsl(337,79%,50%)",
  },
};

export const theme = extendTheme({ colors });
