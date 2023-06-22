import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Rating } from "./Rating";
import { AddToCartButton } from "./AddToCartButton";
import { IProduct } from "@src/model";

interface IProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: IProductCardProps) => {
  return (
    <Card w="xs" pos="relative" m="0.5rem">
      <CardBody>
        <Image src={product.mainImage} alt={product.name} />
        <Stack mt="6" spacing="3">
          <Flex justify="space-between" align="center">
            <Heading size="md">{product.name}</Heading>
            <Flex color="brand.primary.dark" fontWeight="bold">
              <Text fontSize="sm">$</Text>
              <Text fontSize="lg">{product.price}</Text>
            </Flex>
          </Flex>
          <Text>{product.description}</Text>
          <Rating rating={product.rating} />

          <AddToCartButton />
        </Stack>
      </CardBody>
    </Card>
  );
};
