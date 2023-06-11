import { Box } from "@chakra-ui/react";
import React from "react";
import { navbarStyles } from "./style";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export const Navbar = () => {
  return (
    <Box className="navbar-wrapper" h="120">
      <Box {...navbarStyles}>
        <DesktopNav />
        <MobileNav />
      </Box>
    </Box>
  );
};
