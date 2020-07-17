import React from "react";

const Content = ({ parts }) => {
  const partList = parts.map((part) => <Part key={part.id} partInfo={part} />);
  return <div>{partList}</div>;
};

export default Content;
