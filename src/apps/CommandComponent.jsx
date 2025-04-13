import React from "react";

import UserManager from "./user.js";
import Command from "./command";

function CreateUserCommand(name) {
  return new Command((users) => users.push(name));
}

function DeleteUserCommand(index) {
  return new Command((users) => users.splice(index, 1));
}

const userManager = new UserManager();

userManager.execute(new CreateUserCommand("Piyush"));
userManager.execute(new CreateUserCommand("Mehul"));

userManager.execute(new DeleteUserCommand(1));

const CommandComponent = () => {
  return (
    <div>
      CommandComponent
      {userManager.users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </div>
  );
};

export default CommandComponent;
