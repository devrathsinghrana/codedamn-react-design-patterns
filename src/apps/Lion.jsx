import animalFn from "./animalFeatures";

class Lion {
  constructor(name) {
    this.name = name;
  }
}

const lionFn = {
  roar: () => <p>Roaring...</p>,
};

Object.assign(Lion.prototype, lionFn, animalFn);

export default Lion;
