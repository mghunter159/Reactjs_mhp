import * as React from "react";
import { context } from "./Provider";

const { useState, useContext } = React;

export default function NewTodo() {
  const [todo, setTodo] = useState("");
  const { dispatch } = useContext(context);

  function handleSubmit(event) {
    event.preventDefault();

    dispatch({ type: "ADD_TODO", payload: todo });
  }

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      handleSubmit(event);
    }
  }

  return (
    <>
    <form className="form-inline">
      <input
        className="form-control mb-2 mr-sm-2"
        type="text"
        value={todo}
        onChange={e => setTodo(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="btn btn-success" onClick={handleSubmit}>Add</button>
      </form>
      
    </>
  );
}
