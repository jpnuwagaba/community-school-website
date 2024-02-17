import Image from "next/image";
import { gilda } from "@/lib/fonts";
import { wix } from "@/lib/fonts";
import HeroSection from "@/components/HeroSection";
import GridCards from "@/components/GridCards";
import InfoSection from "@/components/InfoSection";
import NewsAndEvents from "@/components/NewsAndEvents";
import Testimonial from "@/components/Testimonial";
import NewsCard from "@/components/NewsCard";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 gap-12 md:gap-36">
        <HeroSection />
        <GridCards />
        <WhoWeAre />
        <Testimonial />
        <NewsAndEvents />
      </div>
    </>
  );
}
