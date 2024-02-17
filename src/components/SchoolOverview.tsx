import React from "react";
import GridCols from "./GridCols";
import Image from "next/image";
import { gilda } from "@/lib/fonts";
import { Locate } from "lucide-react";

const SchoolOverview = () => {
  return (
    <>
      <div className="container">
        <GridCols
          component1={
            <Image
              className="mb-6 lg:mb-0 w-full"
              src="/assets/campus.jpg"
              alt="About us"
              width={500}
              height={500}
            />
          }
          component2={
            <div className="grid grid-cols-2 container">
              <div className={`border-r border-b p-8`}>
                <div
                  className={`text-oxfordblue font-bold text-xl md:text-3xl lg:text-4xl text-center mb-1 ${gilda.className}`}
                >
                  2000+
                </div>
                <div className="text-center">Students</div>
              </div>
              <div className={`border-l border-b p-8`}>
                <div
                  className={`text-oxfordblue font-bold text-xl md:text-3xl lg:text-4xl text-center mb-1 ${gilda.className}`}
                >
                  150+
                </div>
                <div className="text-center">Faculty</div>
              </div>
              <div className={`border-t border-r p-8`}>
                <div
                  className={`text-oxfordblue flex flex-col items-center mb-1 ${gilda.className}`}
                >
                  <Locate size={40} />
                </div>
                <div className="text-center">Location</div>
              </div>
              <div className={`border-l border-t p-8`}>
                <div
                  className={`text-oxfordblue font-bold text-xl md:text-3xl lg:text-4xl text-center mb-1 ${gilda.className}`}
                >
                  2000+
                </div>
                <div className="text-center">Students</div>
              </div>
            </div>
          }
        />
      </div>
    </>
  );
};

export default SchoolOverview;
