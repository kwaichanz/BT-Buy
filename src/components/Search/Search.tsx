import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { searchInputStyles } from "./styles";

export default function Search() {
  return (
    <Box pos="relative" w={{ base: "100%", lg: "32rem" }}>
      <InputGroup size="sm" width={{ Base: "100%", lg: "32rem" }}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.400" />
        </InputLeftElement>
        <Input {...searchInputStyles} />
      </InputGroup>
    </Box>
  );
}
