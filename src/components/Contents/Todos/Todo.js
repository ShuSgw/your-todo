import React from "react";
import { ListGroupItem } from "reactstrap";

const Todo = props => (
  <ListGroupItem className="justify-content-between">
    {props.todo}
  </ListGroupItem>
);

export default Todo;
