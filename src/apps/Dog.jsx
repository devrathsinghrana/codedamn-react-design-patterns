import animalFn from "./animalFeatures";

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const dogFn = {
  bark: () => <p>Barking...</p>,
};

Object.assign(Dog.prototype, dogFn, animalFn);

export default Dog;
