"use client";
import { ProductCard } from "@src/components/ProductCard";
import { SwiperNavButtons } from "@src/components/SwiperNavButtons";
import React, { CSSProperties } from "react";
import { SwiperOptions, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const slideStyles: CSSProperties = {
  boxSizing: "border-box",
  maxWidth: "350px",
};

export const FeaturedProducts = () => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, Autoplay],
    spaceBetween: 10,
    slidesPerView: "auto",
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };
  return (
    <div>
      <Swiper {...sliderSettings} style={{ width: "100%", height: "100%" }}>
        <SwiperSlide style={slideStyles}>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
          <ProductCard />
        </SwiperSlide>

        <SwiperNavButtons />
      </Swiper>
    </div>
  );
};
