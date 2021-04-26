import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import {LightSpeed} from 'react-reveal';
import imagenRight from '../../assets/img/section-sign/easy-sign.png';

export const SectionHeaderSign = () => {
  return (
    <section id="sign-header" className="d-flex align-items-center">
      <Container
        fluid
        className="container-header"
      >
        <Row>

          <Col
            lg={6}
            className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
          >
            <LightSpeed left>
            <div
              className="text-center text-lg-center title-header"
            >
              <h1 className="text-left">
                Tu firma electrónica fácil, rápida y segura
              </h1>
              <p className="text-left">
                Crea tu firma electrónica EasySign, y úsala en todos los
                procesos que crees o firmes con Dec.
              </p>
            </div>
            </LightSpeed>
          </Col>

          <Col
            lg={6}
            className="order-1 order-lg-2"
          >
            <LightSpeed right>
            <div className="text-center img-left">
              <Image src={imagenRight} fluid />
            </div>
            </LightSpeed>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
