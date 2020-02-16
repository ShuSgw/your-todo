import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Nav vertical>
        <NavItem>
          <NavLink>
            <Link to="/">Profile</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/todo">Todos</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/login">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/logout">Logout</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/create_account">Create Accout</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;
