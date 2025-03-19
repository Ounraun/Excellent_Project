import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import { PersonCircle } from "react-bootstrap-icons";

const Navigationbar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const navLinkStyle = {
    fontFamily: "Manrope",
    fontWeight: 500,
    fontSize: "17.88px",
    letterSpacing: "2%",
    color: "#A1A1A1",
    textDecoration: "none",
    transition: "color 0.3s ease",
  };

  const activeNavLinkStyle = {
    ...navLinkStyle,
    color: "#FFFFFF",
  };

  return (
    <Navbar
      variant="dark"
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      fixed="top"
      className="w-100"
      style={{ height: "84px", backgroundColor: "#222222" }}
    >
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/"
          className="text-white"
          style={{ marginLeft: "50px" }}
        >
          <img src={logo} alt="Logo" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              style={{
                ...(location.pathname === "/"
                  ? activeNavLinkStyle
                  : navLinkStyle),
                marginRight: "25px",
              }}
            >
              About us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              style={{
                ...(location.pathname === "/services"
                  ? activeNavLinkStyle
                  : navLinkStyle),
                marginRight: "25px",
              }}
            >
              Service & Solutions
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/our-community"
              style={{
                ...(location.pathname === "/our-community"
                  ? activeNavLinkStyle
                  : navLinkStyle),
                marginRight: "25px",
              }}
            >
              Our community
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              style={{
                ...(location.pathname === "/contact"
                  ? activeNavLinkStyle
                  : navLinkStyle),
                marginRight: "50px",
              }}
            >
              Contact
            </Nav.Link>
            <NavDropdown
              title={<PersonCircle size={24} style={{ color: "#A1A1A1" }} />}
              id="profile-dropdown"
              style={{ marginLeft: "50px", marginRight: "50px" }}
            >
              <NavDropdown.Item
                as={Link}
                to="/nas"
                style={
                  location.pathname === "/nas"
                    ? activeNavLinkStyle
                    : navLinkStyle
                }
              >
                NAS
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/meeting-rooms"
                style={
                  location.pathname === "/meeting-rooms"
                    ? activeNavLinkStyle
                    : navLinkStyle
                }
              >
                Meeting Rooms
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
