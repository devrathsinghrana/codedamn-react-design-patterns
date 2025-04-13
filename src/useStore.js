import React, { useEffect, useState } from "react";
import Store from "./ObserverStore";

const useStore = (value) => {
  const [state, setState] = useState(value);

  useEffect(() => {
    Store.subscribe(setState);
    return () => {
      Store.unsubscribe(setState);
    };
  }, []);
  
  return state;
};

export default useStore;
