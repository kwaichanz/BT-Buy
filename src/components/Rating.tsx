import { Flex, Text } from "@chakra-ui/react";
import { colors } from "@src/app/theme";
import React from "react";
import ReactStars from "react-stars";

export const Rating = () => {
  return (
    <Flex>
      <ReactStars
        count={5}
        value={4.5}
        half={true}
        size={18}
        color2={colors.brand.primary}
        edit={false}
      />
      <Text>({200})</Text>
    </Flex>
  );
};
