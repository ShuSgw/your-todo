import React from "react";
import { ListGroup } from "reactstrap";
import Todo from "./Todo";

const Todos = props => {
  const todos = props.todos;
  const handleDelete = props.handleDelete;
  return (
    <ListGroup>
      {todos.map((todo, num) => {
        return (
          <Todo
            key={num}
            title={todo.title}
            id={todo.id}
            handleDelete={handleDelete}
          />
        );
      })}
    </ListGroup>
  );
};

export default Todos;
