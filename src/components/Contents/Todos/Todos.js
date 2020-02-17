import React from "react";
import { ListGroup } from "reactstrap";
import Todo from "./Todo";

const Todos = props => {
  const todos = props.todos;
  return (
    <ListGroup>
      {todos.map((todo, num) => {
        return <Todo key={num} todo={todo} />;
      })}
    </ListGroup>
  );
};

export default Todos;
