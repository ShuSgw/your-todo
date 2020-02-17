import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
// import { Link } from "react-router-dom";
import firebase from "../Firebase";

class Navigation extends React.Component {
  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Nav vertical>
          <NavItem>
            <NavLink href="/">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/todo">Todo</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/create_account">Login / SignUp</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={this.logout}>Logout</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Navigation;
