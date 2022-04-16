import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <h1>Counter value: {counter}</h1>
      <button onClick={() => handleIncrement()}>Increment</button>
    </div>
  );
}