"use client";

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import {
  bannerStyles,
  bannerHeadingStyles,
  bannerTextStyles,
  bannerBtnStyles,
  bannerImageBoxStyles,
} from "./style";
import Link from "next/link";

export const Banner = () => {
  return (
    <Box maxH="600px">
      <Flex {...bannerStyles}>
        <Box w={{ base: "100%", lg: "50%" }}>
          <Heading {...bannerHeadingStyles}>
            Online Shopping <br /> Made Easy
          </Heading>
          <Text {...bannerTextStyles}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit rerum, iure ex illum nobis vitae unde.
          </Text>
          <Link href="/products">
            <Button {...bannerBtnStyles}> Shop Now </Button>
          </Link>
        </Box>
        <Box w={{ base: "100%", lg: "50%" }}>
          <Box {...bannerImageBoxStyles}></Box>
        </Box>
      </Flex>
    </Box>
  );
};
