import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import {LightSpeed} from 'react-reveal';
import imagenLeft from '../../assets/img/section-developer/dec-developers-header.png';

export const SectionDevHeader = () => {
  return (
    <section id="dev-header" className="d-flex align-items-center">
      <Container
        fluid
        className="body-container"
      >
        <Row>
          <Col lg={{span:6,order:1}} xs={{span:12,order:2}}>
            <LightSpeed left>
            <div className="text-center body-left ">
              <Image src={imagenLeft} fluid />
            </div>
            </LightSpeed>
          </Col>
          <Col
            lg={{span:6, order:2}}
            xs={{span:12,order:1}}
            className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
          >
              <LightSpeed right>
            <div
              className="text-center body-right"
            >
              <h1 className="text-left">APIs flexibles, seguras y</h1>
              <h1 className="text-left">potentes</h1>
              <br></br>
              <p className="text-left">
                Integra facilmente la mejor experiencia
              </p>
              <p className="text-left">de firmado, en tu
                aplicación o flujo de negocio.</p>
            </div>
            </LightSpeed>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
