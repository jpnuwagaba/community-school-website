"use client";

import React from "react";
import { gilda } from "@/lib/fonts";
import { MessageSquareQuote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "My child has blossomed at [School Name]. Not only are they excelling academically, but they've also found their passion for [specific activity]. The supportive teachers and caring environment have made all the difference.",
    author: "Sarah Williams",
    designation: "Parent of Grade 3 student",
  },
  {
    quote:
      "[School Name] has challenged me intellectually and helped me grow as a leader. The diverse community and engaging classes have prepared me for college and beyond.",
    author: "Michael Jones",
    designation: "Class of 2024, Valedictorian",
  },
  {
    quote:
      "As a new student, I felt welcomed and included right away. The teachers go above and beyond to help students succeed, and the extracurricular activities offer something for everyone.",
    author: "Emily Chen",
    designation: "Transfer student",
  },
];

const Testimonial = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <>
      <div className="text-center container">
        <div className="flex flex-col items-center mb-8">
          <MessageSquareQuote size={42} color="#06284b" />
        </div>
        <Carousel
          className="relative"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <p
                  className={`text-xl text-oxfordblue md:text-2xl italic max-w-[700px] m-auto ${gilda.className}`}
                >
                  {testimonial.quote}
                </p>
                <p className="text-sm mt-4">
                  {testimonial.author}, <span className="font-bold text-gray-700">{testimonial.designation}</span>
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute left-[50%] bottom-0 translate-y-[150%] -translate-x-[50%] flex flex-row gap-5 items-center">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Testimonial;
