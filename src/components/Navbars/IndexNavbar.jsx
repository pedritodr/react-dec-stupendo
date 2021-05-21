import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import {
  Col,
  Collapse,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "../../styles/nav.css";

import logoStupendo from "../../assets/img/logo-stupendo.png";
import logoDec from "../../assets/img/logo-dec.png";
import logoTable from "../../assets/img/logo-table.png";
import dec from "../../assets/img/icon-1.png";
import easySign from "../../assets/img/icon-2.png";
import pay from "../../assets/img/icon-3.png";
import useViewport from "../../components/GridResponsive/ViewResponsive";
export const IndexNavbar = () => {
  const { width, breakpoint, breakpointT } = useViewport();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <>
      <Navbar
        className="navbarMain"
        style={{
          backgroundColor: width > breakpoint && width < breakpointT
            ? "#eeeeee"
            : "",
        }}
      >
        <Navbar.Brand href="#resumen">
          <Image
            style={{
              width: width > breakpoint && width < breakpointT ? "86px" : "",
              height: width > breakpoint && width < breakpointT ? "12px" : "",
              marginLeft: width > breakpoint && width < breakpointT
                ? "20px"
                : "",
            }}
            className="logo-stupendo"
            src={logoStupendo}
            alt="Generic placeholder"
          />
        </Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <div id="body-collapse">
            <NavDropdown
              alignRight
              title="Productos"
              id="collasible-nav-dropdown"
              style={{ color: "#3b4b73" }}
            >
              <NavDropdown.Item href="#action/3.1">
                <Row>
                  <Col lg={6}>
                    <p className="text-left text-dropdown-header">Cambiar a</p>
                  </Col>
                  <Col lg={6}>
                    <p className="text-right text-dropdown-header">
                      Inciar sesión
                    </p>
                  </Col>
                  <Col lg={12}>
                    <div className="text-left body-container-dropdowm-text">
                      <Link to="/">
                        <Image src={dec} style={{ width: "12%" }} /> Dec
                      </Link>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="text-left body-container-dropdowm-text">
                      <Link to="/">
                        <Image src={easySign} style={{ width: "12%" }} />{" "}
                        Easy sign
                      </Link>
                    </div>
                  </Col>

                  <Col lg={12}>
                    <p className="text-left text-dropdown-header">Descubrir</p>
                    <div className="text-left body-container-dropdowm-text">
                      <Link to="/">
                        <Image src={pay} style={{ width: "12%" }} /> Pay
                      </Link>
                    </div>
                  </Col>
                </Row>
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <Navbar
        collapseOnSelect
        className="navbar-dec"
        expand="lg"
        bg="light"
        variant="light"
      >
        <Navbar.Brand href="#home">
          <Image
            className="logo-dec"
            src={width > breakpoint && width < breakpointT ? logoTable
            : logoDec}
            style={{
              marginLeft: width > breakpoint && width < breakpointT ? "20px"
              : "",
            }}
            alt="Generic placeholder"
          />
        </Navbar.Brand>
        {width > breakpoint && width < breakpointT
          ? <div>
            <a
              onClick={() => setOpen(!open)}
              aria-controls="collapseMenu"
              aria-expanded={open}
              className="arrow-btn"
            >
              {!open ? <FaAngleDown /> : <FaAngleUp />}
            </a>
            <Link
              to={process.env.REACT_APP_BTN_COMIENZA_GRATIS}
              style={{
                background: "#29B383",
                color: "#ffffff",
                cursor: "pointer",
                borderRadius: "50px",
                margin: "0 15px",
                padding: "8px 12px",
                fontFamily: "MYRIADPRO, sans-serif",
                textDecoration: "none",
              }}
            >
              Comienza Gratis
            </Link>
          </div>
          : <Navbar.Toggle aria-controls="responsive-navbar-nav" />}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              className={location.pathname === "/" ? "nav-link-item-active"
              : "nav-link-item-inactive"}
              href="/"
            >
              Resumen
            </Nav.Link>
            <Nav.Link
              className={location.pathname === "/dec"
                ? "nav-link-item-active"
                : "nav-link-item-inactive"}
              href="/dec"
            >
              ¿Por qué Dec?
            </Nav.Link>
            <Nav.Link
              className={location.pathname === "/sign"
                ? "nav-link-item-active"
                : "nav-link-item-inactive"}
              href="/sign"
            >
              Easy Sign
            </Nav.Link>
            <Nav.Link
              className={location.pathname === "/developers"
                ? "nav-link-item-active"
                : "nav-link-item-inactive"}
              href="/developers"
            >
              Developers
            </Nav.Link>
            <Nav.Link
              className={location.pathname === "/plans"
                ? "nav-link-item-active"
                : "nav-link-item-inactive"}
              href="/plans"
            >
              Planes
            </Nav.Link>
          </Nav>
          <Nav>
            <div className="get-started">
              <Link to={process.env.REACT_APP_BTN_COMIENZA_GRATIS}>Comienza Gratis</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
        <div className="body-container-dropdown">
          <a
            onClick={() => setOpen(!open)}
            aria-controls="collapseMenu"
            aria-expanded={open}
            className="arrow-btn"
          >
            {!open ? <FaAngleDown /> : <FaAngleUp />}
          </a>
          <Link to={process.env.REACT_APP_BTN_COMIENZA_GRATIS} className="get-started">
            Comienza Gratis
          </Link>
        </div>
        <Collapse in={open}>
          <div id="collapseMenu">
            <div
              className={location.pathname === "/" ? "text-left page-active"
              : "text-left page-inactive"}
              onClick={() => setOpen(!open)}
            >
              <Link to="/">Resumen</Link>
            </div>
            <div
              className={location.pathname === "/dec"
                ? "text-left page-active"
                : "text-left page-inactive"}
              onClick={() => setOpen(!open)}
            >
              <Link to="/dec">¿Por qué Dec?</Link>
            </div>
            <div
              className={location.pathname === "/sign"
                ? "text-left page-active"
                : "text-left page-inactive"}
              onClick={() => setOpen(!open)}
            >
              <Link to="/sign">Easy Sign</Link>
            </div>
            <div
              className={location.pathname === "/developers"
                ? "text-left page-active"
                : "text-left page-inactive"}
              onClick={() => setOpen(!open)}
            >
              <Link to="/developers">Developers</Link>
            </div>
            <div
              className={location.pathname === "/plans"
                ? "text-left page-active"
                : "text-left page-inactive"}
              onClick={() => setOpen(!open)}
            >
              <Link to="/plans">Planes</Link>
            </div>
          </div>
        </Collapse>
      </Navbar>
    </>
  );
};
