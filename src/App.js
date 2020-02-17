import React from "react";
// modules
import Header from "./components/Header";
import TodoList from "./components/Contents/Todos/TodoList";
import Navigation from "./components/Navigation";
import Profile from "./components/Contents/Profile";
import CreateAccount from "./components/Account/CreateAccount";
import Login from "./components/Account/Login";

// modules
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <Router>
    <Header />
    <Container>
      <Row xs="2">
        <Col xs="4">
          <Navigation />
        </Col>
        <Col xs="8">
          <Switch>
            <Route exact path="/" component={Profile} />
            <Route exact path="/todo" component={TodoList} />
            <Route exact path="/create_account" component={CreateAccount} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Col>
      </Row>
    </Container>
  </Router>
);

export default App;
