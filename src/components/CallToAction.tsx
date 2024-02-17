import React, { FC } from "react";
import GridCols from "./GridCols";
import { gilda } from "@/lib/fonts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  link: string;
  callToAction: string;
}

const CallToAction: FC<Props> = ({
  title,
  description,
  link,
  callToAction,
}) => {
  return (
    <>
      <div className="container">
        <div className="py-8 md:py-16 bg-cultured px-6">
          <GridCols
            itemsAlign="start"
            component1={
              <>
                <div
                  className={`text-oxfordblue font-bold text-3xl lg:text-5xl mb-1 ${gilda.className}`}
                >
                  {title}
                </div>
              </>
            }
            component2={
              <>
                <div className="text-lg">{description}</div>
                <div className="mt-4 flex flex-row items-center gap-4">
                  <div className="border rounded-full p-1 border-gray-300">
                    <ArrowRight size={24} />
                  </div>
                  <Link
                    className="text-oxfordblue font-bold hover:border-b hover:border-b-2 hover:border-b-oxfordblue transition ease-in-out duration-300 py-1"
                    href={`/about/${link}`}
                  >
                    {callToAction}
                  </Link>
                </div>
              </>
            }
          />
        </div>
      </div>
    </>
  );
};

export default CallToAction;
