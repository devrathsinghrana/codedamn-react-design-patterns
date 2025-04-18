import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ReduxComponent = () => {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  return (
    <div>
      ReduxComponent
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
};

export default ReduxComponent;
