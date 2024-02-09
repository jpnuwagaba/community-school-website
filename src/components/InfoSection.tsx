import React, { FC } from "react";
import Image from "next/image";

interface Props {
  image: string;
  component: React.ReactNode;
}

const InfoSection: FC<Props> = ({ image, component }) => {
  return (
    <>
      <div className="container grid grid-cols-1 lg:grid-cols-2 items-start lg:items-center">
        <div>
          <Image className="lg:w-full" src={image} alt="image" width={500} height={500} />
        </div>
        <div className="lg:px-16">{component}</div>
      </div>
    </>
  );
};

export default InfoSection;
