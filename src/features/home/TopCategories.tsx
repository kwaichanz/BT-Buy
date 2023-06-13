"use client";

import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Image,
} from "@chakra-ui/react";
import { SectionHeading } from "@src/components/SectionHeading";
import React from "react";

export const TopCategories = () => {
  return (
    <Box w={{ base: "100%", lg: "90%" }} mx="auto" py="3rem" px="2rem">
      <SectionHeading title="Shop Our Top Categories" />

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: " repeat(2, 1fr)",
          lg: "repeat(4,1fr)",
        }}
      >
        <GridItem>
          <TopCategoryCard />
        </GridItem>
        <GridItem>
          <TopCategoryCard />
        </GridItem>
        <GridItem>
          <TopCategoryCard />
        </GridItem>
        <GridItem>
          <TopCategoryCard />
        </GridItem>
      </Grid>
    </Box>
  );
};

const TopCategoryCard = () => {
  return (
    <Card
      direction="row"
      align="center"
      overflow="hidden"
      variant="outline"
      w="100%"
      h="100%"
      p="10px"
    >
      <Image alt="" />
      <CardBody>
        <Heading size={{ base: "sm", lg: "md" }}>Watches</Heading>
      </CardBody>
    </Card>
  );
};
