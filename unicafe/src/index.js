import React, { useState } from "react";
import ReactDOM from "react-dom";

import Button from "./components/Button";
import Statistic from "./components/Statistic";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const noReview = () => good + neutral + bad === 0;

  return (
    <div>
      <h1>Give review</h1>
      <Button handleClick={() => setGood(good + 1)} text={"good"} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button handleClick={() => setBad(bad + 1)} text={"bad"} />

      <h1>Statistics</h1>
      {noReview() ? (
        <div>No review</div>
      ) : (
        <Statistic good={good} neutral={neutral} bad={bad} />
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
