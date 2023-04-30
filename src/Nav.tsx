import * as React from "react";

const { useContext } = React;

export default function Nav() {

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark" style={{marginBottom: 30 + 'px'}}>

    <a className="navbar-brand" href="#">ToDo</a>
    
    </nav>
  );
}
