import React from "react";
import { useCountStore } from "../zustand/counterStore";

const ZustandAppComponent = () => {
  const counter = useCountStore();
  console.log(counter);
  return (
    <div>
      ZustandAppComponent
      <button onClick={(e) => counter.increment()}>+</button>
      <h1>{counter.value}</h1>
      <button onClick={(e) => counter.decrement()}>-</button>
    </div>
  );
};

export default ZustandAppComponent;
