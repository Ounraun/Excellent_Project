import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import { PersonCircle } from "react-bootstrap-icons";
import "./Navbar.css";
import { useTranslation } from "react-i18next";

const Navigationbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showCommunityDropdown, setShowCommunityDropdown] = useState(false);
  const location = useLocation();

  const { t, i18n } = useTranslation();

  const switchLang = (lng: "en" | "th") => {
    i18n.changeLanguage(lng);
  };

  const navLinkStyle = {
    fontFamily: "Manrope",
    fontWeight: 500,
    fontSize: "17.88px",
    letterSpacing: "2%",
    color: "#A1A1A1",
    textDecoration: "none",
    transition: "color 0.3s ease",
    position: "relative" as const,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const activeNavLinkStyle = {
    ...navLinkStyle,
    color: "#FFFFFF",
  };

  const activeUnderlineStyle = {
    position: "absolute" as const,
    bottom: 0,
    left: 0,
    width: "100%",
    height: "2px",
    backgroundColor: "#00A3FF",
    borderRadius: "2px",
  };

  const dropdownStyle = {
    ...navLinkStyle,
    display: "flex",
    alignItems: "center",
    gap: "5px",
    padding: "0 15px",
  };

  return (
    <Navbar
      variant="dark"
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      fixed="top"
      className="w-100"
      style={{
        height: "84px",
        backgroundColor: "#222222",
        padding: 0,
      }}
    >
      <Container
        fluid
        style={{
          height: "100%",
          padding: 0,
          margin: 0,
        }}
      >
        <Navbar.Brand
          as={Link}
          to="/"
          className="text-white"
          style={{
            marginLeft: "50px",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="Logo" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ height: "100%" }}>
          <Nav className="ms-auto" style={{ height: "100%" }}>
            <Nav.Link
              as={Link}
              to="/"
              style={{
                ...(location.pathname === "/"
                  ? activeNavLinkStyle
                  : navLinkStyle),
                marginRight: "25px",
                height: "100%",
              }}
            >
              About us
              {location.pathname === "/" && (
                <div style={activeUnderlineStyle} />
              )}
            </Nav.Link>
            <NavDropdown
              title={
                <div
                  style={{
                    ...(location.pathname.startsWith("/services/")
                      ? { ...dropdownStyle, color: "#FFFFFF" }
                      : dropdownStyle),
                    height: "100%",
                  }}
                >
                  Service & Solutions
                  {location.pathname.startsWith("/services/") && (
                    <div style={activeUnderlineStyle} />
                  )}
                </div>
              }
              id="services-dropdown"
              show={showServicesDropdown}
              onToggle={(nextShow) => setShowServicesDropdown(nextShow)}
              className={`custom-nav-dropdown ${
                location.pathname.startsWith("/services/") ? "active" : ""
              }`}
              style={{
                marginRight: "25px",
                height: "100%",
              }}
            >
              <NavDropdown.Item
                as={Link}
                to="/services/centralize-management"
                className={`dropdown-item ${
                  location.pathname === "/services/centralize-management"
                    ? "active"
                    : ""
                }`}
                onClick={() => setShowServicesDropdown(false)}
              >
                Centralize Management
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/data-center"
                className={`dropdown-item ${
                  location.pathname === "/services/data-center" ? "active" : ""
                }`}
                onClick={() => setShowServicesDropdown(false)}
              >
                Data Center
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/multimedia-solution"
                className={`dropdown-item ${
                  location.pathname === "/services/multimedia-solution"
                    ? "active"
                    : ""
                }`}
                onClick={() => setShowServicesDropdown(false)}
              >
                Multimedia Solution
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/digital-transformation"
                className={`dropdown-item ${
                  location.pathname === "/services/digital-transformation"
                    ? "active"
                    : ""
                }`}
                onClick={() => setShowServicesDropdown(false)}
              >
                Digital Transformation
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/data-management"
                className={`dropdown-item ${
                  location.pathname === "/services/data-management"
                    ? "active"
                    : ""
                }`}
                onClick={() => setShowServicesDropdown(false)}
              >
                Data Management
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/network-solution"
                className={`dropdown-item ${
                  location.pathname === "/services/network-solution"
                    ? "active"
                    : ""
                }`}
                onClick={() => setShowServicesDropdown(false)}
              >
                Network Solution
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <div
                  style={{
                    ...(location.pathname.startsWith("/community/")
                      ? { ...dropdownStyle, color: "#FFFFFF" }
                      : dropdownStyle),
                    height: "100%",
                  }}
                >
                  Our Community
                  {location.pathname.startsWith("/community/") && (
                    <div style={activeUnderlineStyle} />
                  )}
                </div>
              }
              id="community-dropdown"
              show={showCommunityDropdown}
              onToggle={(nextShow) => setShowCommunityDropdown(nextShow)}
              className={`custom-nav-dropdown ${
                location.pathname.startsWith("/community/") ? "active" : ""
              }`}
              style={{
                marginRight: "25px",
                height: "100%",
              }}
            >
              <NavDropdown.Item
                as={Link}
                to="/community/company-events"
                className={`dropdown-item ${
                  location.pathname === "/community/company-events"
                    ? "active"
                    : ""
                }`}
                onClick={() => setShowCommunityDropdown(false)}
              >
                Company Events
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/community/society"
                className={`dropdown-item ${
                  location.pathname === "/community/society" ? "active" : ""
                }`}
                onClick={() => setShowCommunityDropdown(false)}
              >
                Society
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/community/knowledge"
                className={`dropdown-item ${
                  location.pathname === "/community/knowledge" ? "active" : ""
                }`}
                onClick={() => setShowCommunityDropdown(false)}
              >
                Knowledge
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              to="/contact"
              style={{
                ...(location.pathname === "/contact"
                  ? activeNavLinkStyle
                  : navLinkStyle),
                marginRight: "50px",
                height: "100%",
              }}
            >
              Contact
              {location.pathname === "/contact" && (
                <div style={activeUnderlineStyle} />
              )}
            </Nav.Link>
            <NavDropdown
              title={
                <PersonCircle
                  size={24}
                  style={{
                    color:
                      location.pathname === "/nas" ||
                      location.pathname === "/meeting-rooms"
                        ? "#FFFFFF"
                        : "#A1A1A1",
                  }}
                />
              }
              id="profile-dropdown"
              className={`custom-nav-dropdown profile-dropdown ${
                location.pathname === "/nas" ||
                location.pathname === "/meeting-rooms"
                  ? "active"
                  : ""
              }`}
              style={{
                marginLeft: "50px",
                marginRight: "50px",
                height: "100%",
              }}
            >
              <NavDropdown.Item
                as={Link}
                to="/nas"
                className={`dropdown-item ${
                  location.pathname === "/nas" ? "active" : ""
                }`}
              >
                NAS
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/meeting-rooms"
                className={`dropdown-item ${
                  location.pathname === "/meeting-rooms" ? "active" : ""
                }`}
              >
                Meeting Rooms
              </NavDropdown.Item>
            </NavDropdown>
            <select
              value={i18n.language}
              onChange={(e) => switchLang(e.target.value as "en" | "th")}
            >
              <option value="en">{t("language.en")}</option>
              <option value="th">{t("language.th")}</option>
            </select>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
