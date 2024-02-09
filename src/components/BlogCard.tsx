import React, { FC } from "react";
import { gilda } from "@/lib/fonts";
import Link from "next/link";

interface Props {
  title: string;
  link: string;
  date: string;
}

const BlogCard: FC<Props> = ({ title, link, date }) => {
  return (
    <>
      <div className="bg-oxfordblue p-6 h-max">
        <Link href={`/${link}`}>
          <div
            className={`text-2xl font-bold text-cultured ${gilda.className}`}
          >
            {title}
          </div>
          <div className="text-sm text-cultured mt-3">{date}</div>
        </Link>
      </div>
    </>
  );
};

export default BlogCard;
