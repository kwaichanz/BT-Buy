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
import { ICategory } from "@src/model";

interface ITopCategoriesProps {
  categories: ICategory[];
}

export const TopCategories = ({ categories }: ITopCategoriesProps) => {
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
        {categories.map((category) => (
          <GridItem key={category.id}>
            <TopCategoryCard category={category}/>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

interface ITopCategoryCardProps {
  category: ICategory;
}

const TopCategoryCard = ({ category }: ITopCategoryCardProps) => {
  return (
    <Card {...cardStyles}>
      <Image src={category.image} alt={category.slug} w={100} h={100} />
      <CardBody>
        <Heading size={{ base: "sm", lg: "md" }}>{category.name}</Heading>
      </CardBody>
    </Card>
  );
};
