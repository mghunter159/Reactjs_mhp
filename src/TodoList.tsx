import * as React from "react";
import { context } from "./Provider";

const { useContext } = React;

export default function TodoList() {
  const { state, dispatch } = useContext(context);

  function handleDelete(todo) {
    dispatch({ type: "DELETE_TODO", payload: todo.id });
  }

  function handleCheckboxClick(todo) {
    dispatch({ type: "TOGGLE_TODO_COMPLETED", payload: todo });
  }

  if (!state.todos) {
    return <div />;
  }

  return (
    <>
      <ul className="todo-list">
        {state.todos.map(todo => {
          return (
            
              <li
                className="todo-list__item"
                key={todo.id}
              >
                <span onClick={() => handleCheckboxClick(todo)}>
                  {todo.completed ? (
                    <span className="todo-list__item__completed" />
                  ) : (
                    <span className="todo-list__item__not-completed" />
                  )}
                </span>
                {todo.text}
                <span
                  className="todo-list__item__delete-button"
                  onClick={() => handleDelete(todo)}
                >
                  <button type="button" className="btn btn-primary btn-sm">Удалить</button>
                </span>
              </li>
            
          );
        })}
      </ul>
    </>
  );
}
