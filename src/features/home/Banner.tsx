"use client";

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { bannerStyles, bannerHeadingStyles, bannerTextStyles } from "./style";
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
          <Button
            rounded="full"
            minW="10rem"
            bgColor="brand.primary"
            color="white"
            _hover={{ bgColor: "brand.primaryDark" }}
          >
            {" "}
            Shop Now{" "}
          </Button>
        </Link>
      </Box>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Box
          my="2rem"
          w={{ base: "300px", lg: "600px" }}
          h={{ base: "300px", lg: "500px" }}
          bg="center / cover no-repeat url(mockup.svg)"
        ></Box>
      </Box>
    </Flex>
    </Box>
  );
};
