import { Banner } from "@src/features/home/Banner";
import { FeaturedProducts } from "@src/features/home/FeaturedProducts";
import { TopCategories } from "@src/features/home/TopCategories";

export default function Home() {
  return (
    <div>
      <Banner />
      <TopCategories />
      <FeaturedProducts />
    </div>
  );
}
