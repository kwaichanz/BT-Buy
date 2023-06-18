import { Button } from "@chakra-ui/react";
import React from "react";

export const AddToCartButton = () => {
  return (
    <Button
      variant="outline"
      borderColor="brand.primary"
      color="brand.primary"
      rounded="full"
      size="sm"
      w="150px"
    >
      Add to Cart
    </Button>
  );
};
