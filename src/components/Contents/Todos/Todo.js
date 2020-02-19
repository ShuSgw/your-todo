import React from "react";
import { ListGroupItem } from "reactstrap";
import { Row, Col, Button } from "reactstrap";

const Todo = props => (
  <ListGroupItem className="justify-content-between">
    <Row>
      <Col xs="7">{props.todo}</Col>
      <Col xs="5">
        <Button className="w-100 mb-1">Edit</Button>
        <Button className="w-100">Delete</Button>
      </Col>
    </Row>
  </ListGroupItem>
);

export default Todo;
