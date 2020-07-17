import React from "react";

const Total = ({ parts }) => {
  const sum = parts.reduce((s, p) => s + p.exercises, 0);

  return <h3>total of {sum} exercises</h3>;
};

export default Total;
