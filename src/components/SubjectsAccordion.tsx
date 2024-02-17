import React from "react";
import GridCols from "./GridCols";
import { gilda } from "@/lib/fonts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const data = [
  {
    subject: "Mathematics",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deleniti facere dolorem voluptates. Excepturi, alias porro? Praesentium voluptas laboriosam obcaecati modi neque odio cumque porro minima illo sit. Suscipit accusamus dolore quisquam, beatae tempore ea in? Ullam temporibus sunt quas?",
  },
  {
    subject: "English",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deleniti facere dolorem voluptates. Excepturi, alias porro? Praesentium voluptas laboriosam obcaecati modi neque odio cumque porro minima illo sit. Suscipit accusamus dolore quisquam, beatae tempore ea in? Ullam temporibus sunt quas?",
  },
  {
    subject: "Science",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deleniti facere dolorem voluptates. Excepturi, alias porro? Praesentium voluptas laboriosam obcaecati modi neque odio cumque porro minima illo sit. Suscipit accusamus dolore quisquam, beatae tempore ea in? Ullam temporibus sunt quas?",
  },
  {
    subject: "Social Studies",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deleniti facere dolorem voluptates. Excepturi, alias porro? Praesentium voluptas laboriosam obcaecati modi neque odio cumque porro minima illo sit. Suscipit accusamus dolore quisquam, beatae tempore ea in? Ullam temporibus sunt quas?",
  },
];

const SubjectsAccordion = () => {
  return (
    <>
      <div className="container">
        <GridCols
          component1={
            <>
              <div className="lg:w-[80%]">
                <h1
                  className={`${gilda.className} text-2xl md:text-5xl text-oxfordblue font-bold`}
                >
                  Learn about our subjects
                </h1>
                <p className="mt-6 text-lg">
                  Explore our subjects and discover the
                   knowledge waiting to be uncovered.
                </p>
              </div>
            </>
          }
          component2={
            <>
              <div>
                <Accordion type="single" collapsible className="w-full">
                  {data.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{item.subject}</AccordionTrigger>
                      <AccordionContent>{item.description}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default SubjectsAccordion;
