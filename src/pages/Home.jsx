import { useState } from 'react'
import { Greeting } from "../components/GreetingCard";
import Button from "../components/Button";

const Home = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div className="p-2">
      <Greeting />


      <div className="flex flex-col justify-center align-center">
        <h2 className="text-2xl font-bold">Counter counrrent Value:  <span className="text-blue-700 font-bold text-2xl">{counter}</span></h2>

        <div className="p-2 flex align-center justify-center gap-4">
          <Button onClick={()=> setCounter(prev => prev + 1)}>Increment +</Button>
          <Button onClick={()=> setCounter(prev => prev - 1)}>Decrement -</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
