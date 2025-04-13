class ObserverStore {
  counter = 0;
  subscribers = [];
  changeValue(newValue) {
    this.counter = newValue;
    this.subscribers.forEach((e) => e(newValue));
  }
  increment() {
    this.changeValue(this.counter + 1);
  }
  subscribe(callBackFn) {
    this.subscribers.push(callBackFn);
  }
  unsubscribe(callBackFn) {
    this.subscribers.filter((item) => item != callBackFn);
  }
}

const Store = new ObserverStore();
export default Store;
