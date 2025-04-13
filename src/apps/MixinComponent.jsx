import React from "react";

const animalFn = {
  walk: () => <p>Walking...</p>,
  sleep: () => <p>Sleeping...</p>,
};

const dogFn = {
  bark: () => <p>Barking...</p>,
};

const lionFn = {
  roar: () => <p>Roaring...</p>,
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Lion {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(dogFn, lionFn, animalFn);
Object.assign(Dog.prototype, dogFn);
Object.assign(Lion.prototype, animalFn);

const tuffy = new Dog("Tuffy");

const commonUserActions = {
  login: () => <p>Logging in...</p>,
  logout: () => <p>Logging out...</p>,
  viewDashboard: () => <p>Viewing Dashboard</p>,
};

const adminActions = {
  manageUsers: () => <p>Managing Users...</p>,
};

const editorActions = {
  editContent: () => <p>Editing Content...</p>,
};

class Admin {
  constructor(name) {
    this.name = name;
  }
}

class Editor {
  constructor(name) {
    this.name = name;
  }
}

class Viewer {
  constructor(name) {
    this.name = name;
  }
}

// Composing behaviors via mixins
Object.assign(Admin.prototype, commonUserActions, adminActions);
Object.assign(Editor.prototype, commonUserActions, editorActions);
Object.assign(Viewer.prototype, commonUserActions);

const admin = new Admin("Alice");
const editor = new Editor("Bob");
console.log(tuffy);
const MixinComponent = () => {
  return (
    <div>
      MixinComponent
      {tuffy.walk()}
      {tuffy.sleep()}
      {tuffy.roar()}
      {tuffy.bark()}
      {admin.login()}
      {admin.manageUsers()}
      {editor.login()}
      {editor.editContent()}
    </div>
  );
};

export default MixinComponent;
