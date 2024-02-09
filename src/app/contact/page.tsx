import React from "react";
import GridCols from "@/components/GridCols";
import { gilda } from "@/lib/fonts";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="mb-12 md:mb-36">
      <GridCols
        component1={
          <div className="container">
            <h1
              className={`${gilda.className} text-2xl md:text-5xl text-oxfordblue mb-4 font-bold`}
            >
              Contact Us
            </h1>
            <div className="mb-4 lg:text-lg">
              Thank you for visiting our website. If you have feedback about any
              page on www.ourpage.edu please use the feedback form below.
            </div>
            <div className="mb-4 lg:text-lg">
              For further inquiries call us at 123-456-7890 or email us at;
            </div>
            <div className="mb-4 lg:text-lg">
              <h2 className="text-oxfordblue font-bold">Address</h2>
              <p>
                1234 Street Name
                <br />
                Location here, Uganda
              </p>
            </div>
          </div>
        }
        component2={
          <div>
            <Image
              className="w-full"
              src="/assets/campus.jpg"
              alt="contact"
              width={500}
              height={500}
            />
          </div>
        }
      />
      </div>
    </>
  );
};

export default page;
