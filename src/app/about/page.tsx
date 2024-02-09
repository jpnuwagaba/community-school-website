import React from "react";
import SchoolOverview from "@/components/SchoolOverview";
import Testimonial from "@/components/Testimonial";
import CoreValues from "@/components/CoreValues";
import CallToAction from "@/components/CallToAction";
import PageHeader from "@/components/PageHeader";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-12 md:gap-24 mb-12 md:mb-24">
        <PageHeader
          bg="/assets/campus.jpg"
          title="About Us"
          description="At Somename, those who come to study, research, teach, work, and develop themselves become part of a long tradition of learners and educators dedicated to seeking truth, expanding knowledge, and striving for a brighter future. Join us in our pursuit of excellence and positive change."
        />
        <CoreValues />
        <SchoolOverview />
        <div className="mb-12">
          <Testimonial />
        </div>
        <CallToAction
          title="Read Our History"
          description="Learn more about our history and how we got started."
          link="history"
          callToAction="Read Our History"
        />
      </div>
    </>
  );
};

export default page;
