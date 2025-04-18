import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import SingletonComponent from "./apps/SingletonComponent";
import "./App.css";
import ProxyComponent from "./apps/ProxyComponent";
import FactoryComponent from "./apps/FactoryComponent";
import ObserverComponent from "./apps/ObserverComponent";
import MixinComponent from "./apps/MixinComponent";
import ModularComponent from "./apps/ModularComponent";
import CommandComponent from "./apps/CommandComponent";
import HigherOrderComponent from "./apps/HigherOrderComponent";
import ContextComponent from "./apps/ContextComponent";
import SelectCompoundComponent from "./apps/SelectCompoundComponent";
import SimpleSelectComponent from "./apps/SimpleSelectComponent";
import CompoundSelectComponent from "./apps/CompoundSelectComponent";
import ReduxComponent from "./apps/ReduxComponent";

const IndexComp = () => {
  return (
    <>
      Hello
      <p>
        <Link to="/singleton"> Singleton APP</Link>
      </p>
      <p>
        <Link to="/proxy"> Proxy APP</Link>
      </p>
      <p>
        <Link to="/factory"> Factory APP</Link>
      </p>
      <p>
        <Link to="/observer"> Observer APP</Link>
      </p>
      <p>
        <Link to="/mixin"> Mixin APP</Link>
      </p>
      <p>
        <Link to="/modular"> Modular APP</Link>
      </p>
      <p>
        <Link to="/command"> Command APP</Link>
      </p>
      <p>
        <Link to="/hoc"> HOC APP</Link>
      </p>
      <p>
        <Link to="/context"> Context APP</Link>
      </p>
      <p>
        <Link to="/compound"> Compound APP</Link>
      </p>
      <p>
        <Link to="/simple-select"> SimpleSelect APP</Link>
      </p>
      <p>
        <Link to="/compound-select"> CompoundSelect APP</Link>
      </p>
      <p>
        <Link to="/normal-redux"> Normal Redux APP</Link>
      </p>
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<IndexComp />} />
          <Route path="/singleton" element={<SingletonComponent />} />
          <Route path="/proxy" element={<ProxyComponent />} />
          <Route path="/factory" element={<FactoryComponent />} />
          <Route path="/observer" element={<ObserverComponent />} />
          <Route path="/mixin" element={<MixinComponent />} />
          <Route path="/modular" element={<ModularComponent />} />
          <Route path="/command" element={<CommandComponent />} />
          <Route path="/hoc" element={<HigherOrderComponent />} />
          <Route path="/context" element={<ContextComponent />} />
          <Route path="/compound" element={<SelectCompoundComponent />} />
          <Route path="/simple-select" element={<SimpleSelectComponent />} />
          <Route
            path="/compound-select"
            element={<CompoundSelectComponent />}
          />
          <Route path="/normal-redux" element={<ReduxComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
