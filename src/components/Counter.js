import React,{useState} from "react";

export const Counter = () => {
  const [number, setNumber] = useState(0);
  
  return (
    <>
      <h1>Counter</h1>
      <h3>{number}</h3>
      <button onClick={()=>{setNumber(number+1)}}>Sum</button>
      <button onClick={()=>{setNumber(number-1)}}>Rest</button>
      <button onClick={()=>{setNumber(0)}}>Reset</button>
    </>
  );
};
