import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const TodoList = () => (
  <div>
    <ListGroup>
      <ListGroupItem className="justify-content-between">
        Cras justo odio
      </ListGroupItem>
      <ListGroupItem className="justify-content-between">
        Dapibus ac facilisis in
      </ListGroupItem>
      <ListGroupItem className="justify-content-between">
        Morbi leo risus
      </ListGroupItem>
    </ListGroup>
  </div>
);

export default TodoList;
