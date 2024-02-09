import React, { FC } from "react";

interface Props {
  component1: React.ReactNode;
  component2: React.ReactNode;
}

const GridCols: FC<Props> = ({ component1, component2 }) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="col-span-1 lg:col-span-1">{component1}</div>
        <div className="col-span-1 lg:col-span-1">{component2}</div>
      </div>
    </>
  );
};

export default GridCols;
