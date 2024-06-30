import { useState, useCallback } from "react";
import Square from "./Square";

const Parent = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const handleSquare = useCallback((num) => {
    console.log(`Square of ${num} is ${num * num}`);
  }, []);

  const addNumber = () => {
    setNumbers([...numbers, numbers.length + 1]);
  };

  return (
    <div>
      <button onClick={addNumber}>Add Number</button>
      {numbers.map((num) => (
        <Square key={num} number={num} handleSquare={handleSquare} />
      ))}
    </div>
  );
};

export default Parent;
