import React, { useState } from "react";

const isAdmin = true;
const person = {
  id: 1,
  name: "Devrath",
  age: 27,
  balance: 100,
};
const personProxy = new Proxy(person, {
  set: (obj, prop, value) => {
    if (prop === "name") {
      obj[prop] = value;
    } else {
      throw new Error("Only name property can be changed");
    }
  },
  get: (obj, prop, value) => {
    if (prop === "balance") {
      if (isAdmin) {
        return obj[prop];
      }
      return null;
    } else {
      return obj[prop];
    }
  },
});
const ProxyComponent = () => {
  const [state, setState] = useState(1);
  return (
    <div>
      ProxyComponent
      <p>ID - {personProxy.id}</p>
      <p>Name - {personProxy.name}</p>
      <p>Balance - {personProxy.balance}</p>
      <p>Age - {personProxy.age}</p>
      <button
        onClick={() => {
          setState((s) => s + 1);
          personProxy.name = "Jibba";
        }}
      >
        Change Name
      </button>
      <button
        onClick={() => {
          setState((s) => s + 1);
          personProxy.id = 2;
        }}
      >
        Change ID
      </button>
    </div>
  );
};

export default ProxyComponent;
