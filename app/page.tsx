import CarouselTextBanner from "@/components/carousel-text-banner";
import BannerProduct from "@/components/ui/banner-product";
import ChooseCategory from "@/components/ui/choose-category";
import FeaturedProducts from "@/components/ui/featured-products";


export default function Home() {
  return (
    <main>
      <CarouselTextBanner />
      <FeaturedProducts/>
      <ChooseCategory />
      <BannerProduct />
    </main>
  );
}
