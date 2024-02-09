import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Props {
  image: string;
  title: string;
  link: string;
}

const ImageCard: FC<Props> = ({ image, title, link }) => {
  return (
    <>
      <Link href={`/${link}`}>
        <Image
          className="w-full"
          src={image}
          alt={title}
          width={300}
          height={300}
        />
        <div className="flex flex-row items-center gap-1 mt-2">
          <div className="font-bold text-oxfordblue">{title}</div>
          <ChevronRight size={20} />
        </div>
      </Link>
    </>
  );
};

export default ImageCard;
