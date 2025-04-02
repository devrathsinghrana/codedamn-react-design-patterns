let instance = null;
class SocketService {
  constructor() {
    if (!instance) {
      console.log("IO connection built!");
      instance = this;
    }
    return instance;
  }

  sendData() {
    console.log("Send data on IO!");
  }
}

export default SocketService;
