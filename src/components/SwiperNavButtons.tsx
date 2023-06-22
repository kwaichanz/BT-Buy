import { Box, IconButton, IconButtonProps } from "@chakra-ui/react";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";

const btnStyles: IconButtonProps = {
  rounded: "lg",
  borderColor: "brand.primary",
  borderWidth: "1px",
  color: "brand.primary",
  bgColor: "white",
  mx: "1",
  "aria-label": "",
};

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <Box m="1.5rem">
      <IconButton
        {...btnStyles}
        icon={<FaChevronLeft />}
        aria-label="Prev"
        onClick={() => swiper.slidePrev()}
      />
      <IconButton
        {...btnStyles}
        icon={<FaChevronRight />}
        aria-label="Prev"
        onClick={() => swiper.slideNext()}
      />
    </Box>
  );
};
