import { useState } from "react";
import { Greeting } from "../components/GreetingCard";
import Button from "../components/Button";

const Home = () => {
  const name = "Ayomide";
  const [counter, setCounter] = useState(0);

  const sayBye = () => {
    alert(`Good, Bye!, ${name}`);
  }
  return (
    <div className="p-2">
      <Greeting name={name} sayBye={sayBye} />

      <div className="flex flex-col justify-center align-center">
        <h2 className="text-2xl font-bold">
          Counter counrrent Value:{" "}
          <span className="text-blue-700 font-bold text-2xl">{counter}</span>
        </h2>

        <div className="flex flex-col justify-center gap-4">
          <div className="flex justify-center gap-4">

          <Button onClick={() => setCounter(counter + 1)}>
            <span className="text-white font-bold">Increment</span>
          </Button>

          <Button onClick={() => setCounter(counter - 1)}>
            <span className="text-white font-bold">Decrement</span>
          </Button>
          </div>

          <Button onClick={() => setCounter(0)}>
            <span className="text-white font-bold">Reset</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
