import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { gilda } from "@/lib/fonts";
import { ArrowRight } from "lucide-react";

interface Props {
  image: string;
  name: string;
  title: string;
  link: string;
}

const PersonCard: FC<Props> = ({ image, name, title, link }) => {
  return (
    <>
      <div className="grid grid-cols-1 bg-cultured">
        <Link href={`#`}>
          <Image
            className="w-full"
            src={image}
            alt={name}
            width={300}
            height={300}
          />
          <div className="p-8">
            <h3
              className={`text-2xl text-oxfordblue font-semibold mb-2 ${gilda.className}`}
            >
              {name}
            </h3>
            <p className="">{title}</p>
            <div className="flex flex-row items-center gap-4 mt-6">
              <div className="border rounded-full p-1 border-gray-300">
                <ArrowRight size={24} />
              </div>
              <div className="text-oxfordblue font-bold hover:border-b hover:border-b-2 hover:border-b-oxfordblue transition ease-in-out duration-500">
                Learn more
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default PersonCard;
