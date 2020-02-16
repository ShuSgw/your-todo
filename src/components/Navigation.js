import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const Navigation = () => {
  return (
    <div>
      <Nav vertical>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;
