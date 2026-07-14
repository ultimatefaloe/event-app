import React from "react";
import Button from "./Button";

const GreetingCard = ({ name }) => {
  return (
    <div className='p-4 rounded shadow'>
      {/* <h1>Greeting Card</h1> */}
      <p>Hello, {name}!</p>
      <Button onClick={() => console.log("Good, Bye!")} buttonLabel={"Say Goodbye"} />
    </div>
  );
};

export default GreetingCard;
