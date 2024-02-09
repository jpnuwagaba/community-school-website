import React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BlogCard from "./BlogCard";

const data = [
  {
    title: "Scool Information on Night and Open Houses",
    date: "12-12-1999",
    link: "",
  },
  {
    title: "Auction procures $100,000 for school",
    date: "12-12-1999",
    link: "",
  },
  { title: "New School Year Begins", date: "12-12-1999", link: "" },
  { title: "3th Annual Fundraiser", date: "12-12-1999", link: "" },
];

const BlogSingleCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <div className="relative">
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem key={index}>
                <BlogCard title={item.title} date={item.date} link={item.link} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-0 right-0 translate-y-[150%] flex items-center gap-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default BlogSingleCarousel;
