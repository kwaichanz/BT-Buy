import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Search() {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.400" />
        </InputLeftElement>
        <Input type="tel" placeholder="Phone number" />
      </InputGroup>
    </Box>
  );
}
