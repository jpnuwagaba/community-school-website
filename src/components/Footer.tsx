import React from "react";
import Image from "next/image";
import { gilda } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      {/* <div className="flex flex-col items-center">
        <Image
          src="/assets/palette.png"
          alt="footer"
          width={300}
          height={300}
        />
      </div> */}
      <div className="bg-tuftsblue mt-24">
        <div className="container flex flex-col items-center py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div
              className={`text-3xl md:text-4xl font-bold text-cultured ${gilda.className}`}
            >
              Schedule a visit
            </div>
            <Button
              className="bg-cultured text-oxfordblue outline-none rounded-none"
              variant={"secondary"}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
      <div className="py-8 md:py-24 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-oxfordblue/90 -z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full -z-20">
          <Image
            src="/assets/school.jpg"
            alt="footer"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="container z-10 text-cultured">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div>
              {/* <div className="flex flex-col items-center w-max mb-6">
                <div
                  className={`text-2xl font-bold uppercase ${gilda.className}`}
                >
                  somename
                </div>
                <div className={`font-bold uppercase ${gilda.className}`}>
                  school
                </div>
              </div> */}
              {/* footer school address */}
              <div className="text-sm">
                <p>Plot 1234, Street Name</p>
                <p>Kampala, Uganda</p>
                <Link className="font-bold" href={""}>
                  Directions
                </Link>
              </div>
              {/* footer school contact */}
              <div className="text-sm mt-6">
                <p>
                  School Office,{" "}
                  <span className="font-bold">+256781147096</span>
                </p>
                <p>Fax, +256781147096</p>
                <Link className="font-bold" href={""}>
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <Link className="font-bold" href={""}>
                Home
              </Link>
              <Link className="font-bold" href={""}>
                About
              </Link>
              <Link className="font-bold" href={""}>
                Academics
              </Link>
              <Link className="font-bold" href={""}>
                Students
              </Link>
              <Link className="font-bold" href={""}>
                Parents & Guardians
              </Link>
              <Link className="font-bold" href={""}>
                Faculty & Staff
              </Link>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <Link className="font-bold" href={""}>
                Home
              </Link>
              <Link className="font-bold" href={""}>
                About
              </Link>
              <Link className="font-bold" href={""}>
                Academics
              </Link>
              <Link className="font-bold" href={""}>
                Students
              </Link>
              <Link className="font-bold" href={""}>
                Parents & Guardians
              </Link>
              <Link className="font-bold" href={""}>
                Faculty & Staff
              </Link>
            </div>
          </div>
          <hr className="border border-cultured my-8 border-[1px]" />
          <div className="flex flex-row items-center justify-between text-sm">
            <p>© 2023 somename school</p>
            <p>Designed by somename</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
