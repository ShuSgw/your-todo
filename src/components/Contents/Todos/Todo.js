import React from "react";
import { ListGroupItem } from "reactstrap";
import { Row, Col, Button, Badge } from "reactstrap";

const Todo = props => {
  const handleDelete = props.handleDelete;
  return (
    <ListGroupItem className="justify-content-between">
      <Badge className="mb-2" pill>
        {props.id}
      </Badge>
      <Row>
        <Col xs="7">{props.title}</Col>
        <Col xs="5">
          <Button
            className="w-100"
            onClick={() => {
              handleDelete(props.id);
            }}
          >
            Delete
          </Button>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default Todo;
