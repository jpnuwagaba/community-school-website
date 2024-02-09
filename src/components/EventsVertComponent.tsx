import React from "react";
import NewsCard from "./NewsCard";

const eventsdata = [
  {
    title: "Sports day",
    date: "06-June-1999",
    location: "School Pitch",
  },
  {
    title: "Parents Meeting",
    date: "13-April-1999",
    location: "School Hall",
  },
  {
    title: "Awards Ceremony",
    date: "13-Sept-1999",
    location: "School Hall",
  },
];

const EventsVertComponent = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-2">
        {eventsdata.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            date={item.date}
            location={item.location}
          />
        ))}
      </div>
    </>
  );
};

export default EventsVertComponent;
