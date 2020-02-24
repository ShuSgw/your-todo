import React from "react";
import { Button, Row, Col } from "reactstrap";
import firebase, { providerGithub } from "../../Firebase";

class CreateAccount extends React.Component {
  createAccount = () => {
    firebase.auth().signInWithRedirect(providerGithub);
    firebase
      .auth()
      .getRedirectResult()
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <Row xs="2">
        <Col>
          <Button onClick={this.createAccount} className="w-100" color="info">
            Login with Github
          </Button>
        </Col>
        <Col>
          <Button className="w-100" color="primary">
            Login with Twitter
          </Button>
        </Col>
      </Row>
    );
  }
}

export default CreateAccount;
