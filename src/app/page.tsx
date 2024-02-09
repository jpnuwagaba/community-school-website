import Image from "next/image";
import { gilda } from "@/lib/fonts";
import { wix } from "@/lib/fonts";
import HeroSection from "@/components/HeroSection";
import GridCards from "@/components/GridCards";
import InfoSection from "@/components/InfoSection";
import { Button } from "@/components/ui/button";
import NewsAndEvents from "@/components/NewsAndEvents";
import Testimonial from "@/components/Testimonial";
import NewsCard from "@/components/NewsCard";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 gap-12 md:gap-36">
        <HeroSection />
        <GridCards />
        <InfoSection
          image="/assets/school.jpg"
          component={
            <div className="p-4">
              <h1
                className={`text-3xl lg:text-5xl font-bold mb-4 text-oxfordblue ${gilda.className}`}
              >
                Who we are
              </h1>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                eget sapien in arcu tincidunt pharetra. Nullam nec odio in dolor
                pharetra luctus. Curabitur et nunc vel ligula facilisis bibendum
                ac in arcu. Pellentesque habitant morbi tristique senectus et
                net us et malesuada fames ac turpis egestas.
              </p>
              <Button variant={"link"} className="mt-5 p-0 text-oxfordblue">
                Learn More
              </Button>
            </div>
          }
        />
        <Testimonial />
        <NewsAndEvents />
      </div>
    </>
  );
}
