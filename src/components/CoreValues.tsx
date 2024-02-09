import React from "react";
import { gilda } from "@/lib/fonts";
import { ThumbsUp } from "lucide-react";
import { HeartHandshake } from "lucide-react";
import { Club } from "lucide-react";
import { Atom } from "lucide-react";
import { HandPlatter } from "lucide-react";

const corevalues = [
  {
    value: "Excellence",
    description:
      "We are committed to providing a rigorous and comprehensive education that prepares students for success in college and beyond.",
    icon: <ThumbsUp size={36} color="#06284b" />,
  },
  {
    value: "Community",
    description:
      "We foster a sense of belonging and inclusion, where students, families, and staff feel safe, supported, and valued.",
    icon: <HeartHandshake size={36} color="#06284b" />,
  },
  {
    value: "Integrity",
    description:
      "We hold ourselves to the highest ethical standards and strive to model honesty, respect, and responsibility.",
    icon: <Club size={36} color="#06284b" />,
  },
  {
    value: "Innovation",
    description:
      "We embrace new ideas and technologies to enhance learning and inspire creativity.",
    icon: <Atom size={36} color="#06284b" />,
  },
  {
    value: "Service",
    description:
      "We encourage students to give back to their communities and develop a lifelong commitment to helping others.",
    icon: <HandPlatter size={36} color="#06284b" />,
  },
];

const CoreValues = () => {
  return (
    <>
      <div className="container">
        <div
          className={`text-center text-3xl lg:text-5xl font-bold text-oxfordblue mb-6 ${gilda.className}`}
        >
          Our Core Values
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corevalues.map((value, index) => (
            <div
              key={index}
              className={`bg-cultured p-8 flex flex-col items-start gap-2`}
            >
              {value.icon}
              <div className={`text-oxfordblue font-bold text-lg  mb-1`}>
                {value.value}
              </div>
              <div className="">{value.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoreValues;
