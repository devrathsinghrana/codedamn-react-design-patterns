import React from "react";
import useStore from "../useStore";
import Store from "../ObserverStore";

const Text = () => {
  const value = useStore(0);
  return <p>Text - {value}</p>;
};

const Text2 = () => {
  const value = useStore(0);
  return <p> Text2 - {value}</p>;
};

const ObserverComponent = () => {
  return (
    <div>
      ObserverComponent
      <Text />
      <Text2 />
      <button onClick={() => Store.increment()}>Increase count</button>
    </div>
  );
};

export default ObserverComponent;
