import React from "react";
import Dog from "./Dog";
import Lion from "./Lion";

const tuffy = new Dog("tuffy");
const raja = new Lion("raja");
const ModularComponent = () => {
  return (
    <div>
      ModularComponent
      {tuffy.bark()}
      {tuffy.walk()}
      {raja.roar()}
      {raja.walk()}
    </div>
  );
};

export default ModularComponent;
