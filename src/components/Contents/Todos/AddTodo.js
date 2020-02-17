import React from "react";
import { Row, Col, Button, Form, FormGroup, Input } from "reactstrap";

class AddTodo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title: ""
    };
  }
  render() {
    return (
      <Form onSubmit={this.props.handleAddTodo}>
        <Row>
          <Col xs="9">
            <FormGroup>
              <Input type="text" placeholder="What do you need to do!" />
            </FormGroup>
          </Col>
          <Col xs="3">
            <Button className="w-100">Add</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default AddTodo;
