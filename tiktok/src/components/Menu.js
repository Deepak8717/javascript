import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Menu = ({ location }) => {
  return (
    <Navbar fixed="top" bg="light" expand="sm" className="shadow">
      <Navbar.Brand as={Link} to="/">
        <img
          src="https://www.flaticon.com/premium-icon/icons/svg/2504/2504942.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="LearnYou"
        />
        <span className="ml-2">TikTok</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="menu" />
      <Navbar.Collapse id="menu">
        <Nav activeKey={location.pathname} className="ml-auto">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Menu);
