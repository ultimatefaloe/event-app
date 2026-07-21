// import React from "react";
// import Button from "./Button";

import Button from "./Button";

// const GreetingCard = ({ name }) => {
//   return (
//     <div className='p-4 rounded shadow'>
//       {/* <h1>Greeting Card</h1> */}
//       <p>Hello, {name}!</p>
//       <Button onClick={() => console.log("Good, Bye!")} >
//         Say Goodbye
//       </Button>
//     </div>
//   );
// };

// export default GreetingCard;


export function Greeting (props) {
  const { name, sayBye  } = props;
  return (
    <div>
      <h1>Welcome to my react app, {name} </h1>
      <Button onClick={sayBye} >
        Good Bye
      </Button>
    </div>
  )
}