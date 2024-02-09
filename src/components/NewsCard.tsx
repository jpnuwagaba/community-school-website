import React, { FC } from "react";
import { gilda } from "@/lib/fonts";

interface Props {
  title: string;
  date: string;
  location: string;
}

const NewsCard:FC<Props> = ({title, date, location}) => {
  return (
    <>
      <div className="bg-cultured p-2 flex flex-row items-start gap-4">
        <div className="bg-oxfordblue p-3 text-center w-16 h-16">
          <p className={`text-white text-xl font-bold ${gilda.className}`}>
            {date.split("-")[0]}
          </p>
          <p className="text-white text-xs">{date.split("-")[1]}</p>
        </div>
        <div className="flex-1">
          <h1 className="text-oxfordblue text-lg font-bold">{title}</h1>
          <p className="text-oxfordblue text-xs">{location}</p>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
