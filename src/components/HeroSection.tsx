"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { gilda } from "@/lib/fonts";

const data = [
  {
    title: "Welcome to our school",
    description:
      "Empowering minds through education and innovation. Join us in our journey!",
    bg: "/assets/school.jpg",
  },
  {
    title: "Explore Our Campus",
    description:
      "State-of-the-art facilities nestled in a vibrant community. Your academic adventure awaits!",
    bg: "/assets/campus.jpg",
  },
  {
    title: "Meet Our Dedicated Faculty",
    description:
      "Passionate educators inspiring greatness. Discover mentors who nurture and guide.",
    bg: "/assets/faculty.jpg",
  },
];

const HeroSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <>
      <div className="relative">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem key={index}>
                <div className="">
                  <div
                    style={{
                      backgroundImage: `url(${item.bg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="relative container h-[60vh] md:h-[80vh] flex flex-col items-start text-white bg-black bg-opacity-50"
                  >
                    <div className="absolute z-10 top-[50%] translate-y-[-50%]">
                      <div className="flex flex-col md:flex-row items-start gap-5 md:gap-8 lg:w-[70%] lg:ml-20">
                        <div className="flex flex-row md:flex-col gap-4 mb-5">
                          <CarouselPrevious />
                          <CarouselNext />
                        </div>
                        <div>
                          <h1
                            className={`text-3xl md:text-6xl font-bold ${gilda.className}`}
                          >
                            {item.title}
                          </h1>
                          <p className="text-lg mt-4">{item.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute bg-tuftsblue bottom-0 right-0 translate-y-[50%] py-5">
          <div className="grid grid-cols-3 divide-x">
            <div className="px-6 text-sm text-cultured font-bold">Apply</div>
            <div className="px-6 text-sm text-cultured font-bold">Visit</div>
            <div className="px-6 text-sm text-cultured font-bold">Map</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
