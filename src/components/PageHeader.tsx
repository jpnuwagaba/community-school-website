import React, { FC } from "react";
import { gilda } from "@/lib/fonts";
import Image from "next/image";
import GridCols from "@/components/GridCols";

interface Props {
  bg: string;
  title: string;
  description: string;
}

const PageHeader:FC<Props> = ({bg, title, description}) => {
  return (
    <>
      <div className="relative py-8 md:py-24">
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 -z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full -z-20">
          <Image
            src={bg}
            alt={title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="container lg:w-[1000px] lg:pr-20 m-auto">
          <GridCols
            component1={
              <h1
                className={`${gilda.className} slide-in-top font-bold text-3xl md:text-5xl text-cultured mb-5 lg:mb-0`}
              >
                {title}
              </h1>
            }
            component2={
              <p className={`slide-in-bottom text-lg lg:text-xl text-cultured lg:border-l lg:pl-20 lg:py-8`}>
                {description}
              </p>
            }
          />
        </div>
      </div>
    </>
  )
}

export default PageHeader