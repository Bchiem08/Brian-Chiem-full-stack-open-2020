import React from "react";

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Part = ({ partInfo }) => {
  return (
    <p>
      {partInfo.name} {partInfo.exercises}
    </p>
  );
};

const Total = ({ parts }) => {
  const sum = parts.reduce(
    (partNumber, partAmount) => partNumber + partAmount.exercises,
    0
  );

  return <h3>total of {sum} exercises</h3>;
};

const Content = ({ parts }) => {
  const partList = parts.map((part) => <Part key={part.id} partInfo={part} />);
  return <div>{partList}</div>;
};

const Course = ({ course }) => {
  const { name, parts } = course;
  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default Course;
