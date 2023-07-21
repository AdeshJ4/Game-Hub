import { useState, useEffect } from "react";

const Compo1 = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    console.log("UseEffect Hook");
    setCalculation(count * 2);
  }, [count]);


  return (
    <>
      <h1>count : {count}</h1>
      <h1>Calculation : {calculation}</h1>

      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};

export default Compo1;
