import React from 'react';
import {  Row, Col, Image} from 'react-bootstrap';
import '../../styles/footer.css';
import logoFooter from '../../assets/img/logo-dec-footer.png';

export const Footer = () => {

  return (

    <footer>
      <div className="body-footer">
      <Row >
        <Col className="mt-2" md={{ span: 6, offset: 3 }}>
          <Row>
            <Col className="text-center" lg={3}>
              <a>Soporte</a>
            </Col>
            <Col className="text-center" lg={3}>
              <a>Privacidad</a>
            </Col>
            <Col className="text-center" lg={3}>
              <a>Desarrolladores</a>
            </Col>
            <Col className="text-center" lg={3}>
              <a>Legal</a>
            </Col>
          </Row>
        </Col>
        <Col className="mt-2" md={{ span: 4, offset: 4 }}>
          <div className="text-center">
            <Image src={logoFooter} fluid />
          </div>
        </Col>
        <Col className="text-center mt-2" md={{ span: 4, offset: 4 }}>
          <p>Copyright 2021. Todos lo desrechos reservados .</p>
        </Col>
      </Row>
      </div>
      <div className="body-container-footer-xs">
    <Row>
        <Col xs={{span:4,order:1}}>
          <div className="text-left">
          <a>Soporte</a>
          <br></br>
          <a>Desarrolladores</a>
          </div>
        </Col>
        <Col xs={{span:3,order:2}}>
        <div className="text-left">
        <a>Legal</a>
        <br></br>
        <a>Privacidad</a>
          </div>
        </Col>
        <Col xs={{span:5,order:3}}>
        <div className="text-center">
        <Image src={logoFooter} fluid />
          </div>
          <div className="text-center body-dec-bottom">
          <p>Copyright 2021. Todos lo desrechos reservados .</p>
          </div>
        </Col>
      </Row>
    </div>
    </footer>

  );
};
