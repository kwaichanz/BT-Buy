import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { AppLogo } from "../AppLogo";
import { mobileNavContainerStyles, mobileSearchWrapper } from "./styles";
import Search from "../Search/Search";

export const MobileNav = () => {
  return (
    <>
      <Flex {...mobileNavContainerStyles}>
        <Box>Nav Menu</Box>
        <AppLogo />

        <Stack direction="column" spacing={1}>
          <Text>Wishlist</Text>
          <Text>Cart</Text>
        </Stack>
      </Flex>
      <Box {...mobileSearchWrapper}>
        <Search />
      </Box>
    </>
  );
};
