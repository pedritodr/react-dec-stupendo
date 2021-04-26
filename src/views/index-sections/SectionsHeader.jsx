import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import leftHomeImg from '../../assets/img/img-left-home.png';
import 'animate.css/animate.css';

export const SectionsHeader = () => {

  return (
    <section id="hero" className="d-flex align-items-center">
      <Container fluid>
        <Row>
          <Col lg={5} className="pt-5 d-flex align-items-center animate__animated animate__fadeInUp">
            <Row>
              <Col className="container-header-title">
                <h1>
                  Firma documentos eletrónicos en tu portafolio digital
                </h1>
              </Col>
              <Col lg={12} className="pt-5  d-lg-flex flex-lg-column justify-content-center align-items-stretch">
                <div className="container-header-btn">
                  <a className="btn-get-started">Comienza Gratis</a>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={7} className="animate__animated animate__fadeInUp">
            <img src={leftHomeImg} className="img-fluid" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
