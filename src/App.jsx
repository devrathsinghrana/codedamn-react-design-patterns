import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import SingletonComponent from "./apps/SingletonComponent";
import "./App.css";
import ProxyComponent from "./apps/ProxyComponent";
import FactoryComponent from "./apps/FactoryComponent";

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
    </>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<IndexComp />} />
          <Route path="/singleton" element={<SingletonComponent />} />
          <Route path="/proxy" element={<ProxyComponent />} />
          <Route path="/factory" element={<FactoryComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
