"use client";

import React from "react";
import { gilda } from "@/lib/fonts";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import EventsVertComponent from "./EventsVertComponent";
import BlogSingleCarousel from "./BlogSingleCarousel";

const NewsAndEvents = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  return (
    <>
      <div className="relative container lg:w-[1100px] grid lg:flex flex-row  gap-6 pb-32">
        <div className="">
          <div
            className={`text-3xl font-bold text-oxfordblue ${gilda.className}`}
          >
            News and Events
          </div>
          <Button variant={"link"} className="mt-2 p-0 text-oxfordblue">
            Learn More
          </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 w-full">
          <EventsVertComponent />
          <div className="">
            <BlogSingleCarousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsAndEvents;
