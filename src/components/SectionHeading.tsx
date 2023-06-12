import { Heading } from "@chakra-ui/react";
import React from "react";

interface SectionHeadingProps {
  title: string;
}
export const SectionHeading = ({ title }: SectionHeadingProps) => {
  return <Heading>{title}</Heading>;
};
