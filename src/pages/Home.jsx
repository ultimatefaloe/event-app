import { useState } from 'react'
import GreetingCard from "../components/GreetingCard";
import Button from "../components/Button";

const Home = () => {
  const [state, setState] = useState()

  return (
    <div className="p-2">
      <GreetingCard name={"ULTIMATE"} />


      <div className="flex flex-col justify-center align-center">
        <h2 className="text-2xl font-bold">Counter <span className="text-blue-700 font-bold text-2xl">{state}</span></h2>

        <div className="p-2">
          <Button></Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
