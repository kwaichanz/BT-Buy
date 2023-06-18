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
import { cardStyles } from "./style";

export const TopCategories = () => {
  return (
    <Box w={{ base: "100%", lg: "90%" }} mx="auto" py="3rem" px="2rem">
      <SectionHeading title="Shop Our Top Categories" />

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: " repeat(2, 1fr)",
          xl: "repeat(4,1fr)",
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
    <Card {...cardStyles}>
      <Image src="product1.jpg" alt="" w={100} h={100} />
      <CardBody>
        <Heading size={{ base: "sm", lg: "md" }}>Watches</Heading>
      </CardBody>
    </Card>
  );
};
