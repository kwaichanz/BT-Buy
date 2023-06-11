"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { bannerStyles, bannerHeadingStyles, bannerTextStyles } from "./style";

export const Banner = () => {
  return (
    <Flex {...bannerStyles}>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Heading {...bannerHeadingStyles}>
          Online Shopping <br /> Made Easy
        </Heading>
        <Text {...bannerTextStyles}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit rerum, iure ex illum nobis vitae unde asperiores
          repellat veniam deleniti.
        </Text>
      </Box>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Box mx="2rem" w={{ base: "300px", lg: "600px" }} h={{ base: "300px", lg: "600px" }}></Box>
      </Box>
    </Flex>
  );
};
