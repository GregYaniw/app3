import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Text from "./components/Text";

const App: React.FC = () => {
  const test: string = "123";

  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef} className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Text text="greg" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
