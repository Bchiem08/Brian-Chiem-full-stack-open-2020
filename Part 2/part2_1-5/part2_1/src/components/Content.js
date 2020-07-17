import React from "react";
import Part from "./Parts";

const Content = ({ parts }) => {
  const partList = parts.map((part) => <Part key={part.id} partInfo={part} />);
  return <div>{partList}</div>;
};

export default Content;
