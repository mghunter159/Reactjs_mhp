import * as React from "react";
import { render } from "react-dom";

import Todo from "./Todo";
import Provider from "./Provider";

import "./styles.css";
import Nav from "./Nav";

function App() {
  return (
    
    <div className="container-fluid">
      <Nav />
      
      <Provider>
        <Todo />
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
