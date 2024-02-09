import React from "react";
import ImageCard from "./ImageCard";

const GridCards = () => {
  return (
    <>
      <div className="container lg:w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ImageCard
          image="/assets/school.jpg"
          title="Who we are"
          link=""
        />
        <ImageCard image="/assets/faculty.jpg" title="Academics" link="" />
        <ImageCard
          image="/assets/campus.jpg"
          title="Community"
          link=""
        />
      </div>
    </>
  );
};

export default GridCards;
