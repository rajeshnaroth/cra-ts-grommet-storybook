import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Spinner} from "./Spinner"
import { Grommet } from "grommet";
import { hpe } from "grommet-theme-hpe";

const App: React.FC = () => {
  return (
    <div className="App">
      <Grommet theme={hpe} full={true}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Spinner />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </Grommet>
    </div>
  );
}

export default App;
