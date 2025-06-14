import { HeroSection } from "@/components/HeroSection";
import { FeaturedDishes } from "@/components/FeaturedDishes";
import { MenuPreview } from "@/components/MenuPreview";
import { ChooseUsSection } from "@/components/ChooseUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedDishes />
      <MenuPreview />
      <ChooseUsSection />
    </>
  );
}
