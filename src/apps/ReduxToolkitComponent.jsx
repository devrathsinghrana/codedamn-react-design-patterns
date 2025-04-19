import React from "react";
import Counter from "../components/Counter";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slices/CounterSlice";

const ReduxToolkitComponent = () => {
  const dispatch = useDispatch();
  return (
    <div>
      ReduxToolkitComponent
      <button onClick={() => dispatch(increment())}>+</button>
      <Counter />
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default ReduxToolkitComponent;
