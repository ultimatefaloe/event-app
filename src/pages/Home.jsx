import React, { useState } from "react";
import GreetingCard from "../components/GreetingCard";
import Button from "../components/Button";

const Home = () => {
  const [counter, setCounter] = useState();

  return (
    <div className="space-y-4">
      <h1>This is my home page</h1>
      <GreetingCard name={"ULTIMATE"} />

      <div className="p-2">
        <h3 className="p-2">
          Counter:{" "}
          <span className="text-blue-700 font-bold text-2xl">{counter}</span>
        </h3>

        <div className="flex align-center justify-center gap-2">
          <Button onClick={() => setCounter((prev) => prev + 1)}>
            Increase +
          </Button>
          <Button onClick={() => setCounter((prev) => prev - 1)}>
            Decrease -
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
