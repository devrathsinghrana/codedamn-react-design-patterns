import React, { useState } from "react";
import SocketService from "./SocketService";

const SingletonComponent = () => {
  const [state, setState] = useState(0);
  const socket = new SocketService();

  return (
    <div>
      SingletonComponent
      <button onClick={() => setState((prev) => prev + 1)}>{state}</button>
    </div>
  );
};

export default SingletonComponent;
