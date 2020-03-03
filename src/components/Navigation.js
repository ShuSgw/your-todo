import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
// import { Link } from "react-router-dom";
import firebase from "../Firebase";

class Navigation extends React.Component {
  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(result => {})
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
          <NavItem className="text-primary" style={{ cursor: "pointer" }}>
            <NavLink onClick={this.logout}>Logout</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Navigation;
