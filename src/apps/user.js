class UserManager {
    constructor() {
      this.users = [];
    }
  
    execute(command) {
      return command.execute(this.users);
    }
  }
  
  export default UserManager;
  