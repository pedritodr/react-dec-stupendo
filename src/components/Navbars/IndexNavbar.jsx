import React ,{useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link ,useLocation} from 'react-router-dom';
import { Navbar, NavDropdown, Nav, Image, Collapse,Row,Col } from 'react-bootstrap';
import { FaAngleDown,FaAngleUp } from 'react-icons/fa';
import  "../../styles/nav.css";

import logoStupendo from '../../assets/img/logo-stupendo.png';
import logoDec from '../../assets/img/logo-dec.png';
import dec from '../../assets/img/icon-1.png';
import easySign from '../../assets/img/icon-2.png';
import pay from '../../assets/img/icon-3.png';

export const IndexNavbar = () => {

  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <>

      <Navbar className="navbarMain">
        <Navbar.Brand href="#resumen">
          <Image
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
                  <p className="text-right text-dropdown-header">Inciar sesión</p>
                  </Col>
                  <Col lg={12}>
                  <div className="text-left body-container-dropdowm-text">
                <Link to="/"><Image src={dec} style={{width:"12%"}}/> Dec</Link></div>
                  </Col>
                  <Col lg={12}>
                  <div className="text-left body-container-dropdowm-text">
                <Link to="/"><Image src={easySign} style={{width:"12%"}}/> Easy sign</Link></div>
                  </Col>

                  <Col lg={12}>
                  <p className="text-left text-dropdown-header">Descubrir</p>
                  <div className="text-left body-container-dropdowm-text">
                <Link to="/"><Image src={pay} style={{width:"12%"}}/> Pay</Link></div>
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
          <Image className="logo-dec" src={logoDec} alt="Generic placeholder" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link  className={ location.pathname==='/'?'nav-link-item-active':'nav-link-item-inactive'} href="/">
              Resumen
            </Nav.Link>
            <Nav.Link className={ location.pathname==='/dec'?'nav-link-item-active':'nav-link-item-inactive'}  href="/dec">
              ¿Por qué Dec?
            </Nav.Link>
            <Nav.Link className={ location.pathname==='/sign'?'nav-link-item-active':'nav-link-item-inactive'}  href="/sign">
              Easy Sign
            </Nav.Link>
            <Nav.Link className={ location.pathname==='/developers'?'nav-link-item-active':'nav-link-item-inactive'}  href="/developers">
              Developers
            </Nav.Link>
            <Nav.Link className={ location.pathname==='/plans'?'nav-link-item-active':'nav-link-item-inactive'}  href="/plans">
              Planes
            </Nav.Link>
          </Nav>
          <Nav>
            <div className="get-started">
            <Link to="/">Comienza Gratis</Link>
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
               {!open? <FaAngleDown />:<FaAngleUp />}
               </a>
               <a className="get-started">
               Comienza Gratis
                 </a>
               </div>
                     <Collapse in={open}>
              <div id="collapseMenu">
                <div className={ location.pathname==='/'?'text-left page-active':'text-left page-inactive'} onClick={() => setOpen(!open)}>
                <Link to="/">Resumen</Link></div>
                <div className={ location.pathname==='/dec'?'text-left page-active':'text-left page-inactive'} onClick={() => setOpen(!open)}>
                <Link to="/dec"> ¿Por qué Dec?</Link></div>
                <div className={ location.pathname==='/sign'?'text-left page-active':'text-left page-inactive'} onClick={() => setOpen(!open)}>
                   <Link to="/sign">Easy Sign</Link></div>
                   <div className={ location.pathname==='/developers'?'text-left page-active':'text-left page-inactive'} onClick={() => setOpen(!open)}>
                   <Link to="/developers">Developers</Link></div>
                   <div className={ location.pathname==='/plans'?'text-left page-active':'text-left page-inactive'} onClick={() => setOpen(!open)}>
                   <Link to="/plans">Planes</Link></div>
               </div>
              </Collapse>
      </Navbar>

    </>
  );
};
