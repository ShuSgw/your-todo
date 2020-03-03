import React from "react";
import { Button, Row, Col, Card, CardBody } from "reactstrap";
import firebase, { providerGithub } from "../../Firebase";
import { Redirect } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";

class CreateAccount extends React.Component {
  state = {
    signinCheck: false,
    signedIn: false
  };
  _isMounted = false;

  createAccountWithGit = () => {
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

  createAccountWithTwitter = () => {};

  componentDidMount = () => {
    this._isMounted = true;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        if (this._isMounted) {
          this.setState({
            signinCheck: true,
            signedIn: true
          });
        }
      } else {
        if (this._isMounted) {
          this.setState({
            signinCheck: true,
            signedIn: false
          });
        }
      }
    });
  };
  componentWillUnmount = () => {
    this._isMounted = false;
  };
  render() {
    if (!this.state.signinCheck) {
      return (
        <LoadingOverlay active={true} spinner text="Loading...">
          <div style={{ height: "100vh", width: "100vw" }}></div>
        </LoadingOverlay>
      );
    }
    if (this.state.signedIn) {
      return <Redirect to="/" />;
    } else {
      return (
        <Row xs="1">
          <Col>
            <Card
              className="mb-4"
              style={{ margin: "0 auto", width: "90%", maxWidth: "400px" }}
            >
              <CardBody className="text-center">
                <h3 className="w-100 mb-4">Create Account or Sign In</h3>
                {/*
                <Button className="w-100 mb-2" color="primary">
                  With Twitter
                </Button>
                */}
                <Button
                  onClick={this.createAccountWithGit}
                  className="w-100"
                  color="info"
                >
                  With Github
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      );
    }
  }
}

export default CreateAccount;
