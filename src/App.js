import React from "react";
import Header from "./components/Header";
import Todos from "./components/Todos/TodoList";
import Navigation from "./components/Navigation";
import { Container, Row, Col } from "reactstrap";
const App = () => (
  <div>
    <Header />
    <Container>
      <Row xs="2">
        <Col xs="3">
          <Navigation />
        </Col>
        <Col xs="9">
          <Todos />
        </Col>
      </Row>
    </Container>
  </div>
);

export default App;
