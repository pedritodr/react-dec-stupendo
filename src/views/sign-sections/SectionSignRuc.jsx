import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import {LightSpeed} from 'react-reveal';

import table from '../../assets/img/section-sign/right-table.png';
import ruc from '../../assets/img/section-sign/left-ruc.png';
import arrow from '../../assets/img/section-sign/arrow-right-sign.png';

export const SectionSignRuc = () => {
  return (
    <section id="sign-ruc" className="d-flex align-items-center">
      <Container
        fluid
        className="container-header"
      >
         <LightSpeed right>
        <Row >
          <Col className="mt-2" md={{ span: 9, offset: 3 }}>
            <Row>
              <Col
                lg={{span:5,order:1}}
                xs={{span:12,order:2}}
                className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
              >
                <div
                  className="text-center text-lg-center"
                  style={{ marginLeft: "10%" }}
                >
                  <h2 className="text-left">Firma Segura</h2>
                  <p className="text-left">
                    Las firmas de EasySign son validadas con tu identidad, lo
                    cual las hace seguras e intransferibles.
                  </p>
                </div>
              </Col>
              <Col
                 lg={{span:4,order:2}}
                 xs={{span:12,order:1}}
                className="order-1 order-lg-2 hero-img aos-init animate__animated animate__fadeInUp"
              >
                <div className="text-center">
                  <Image src={table} fluid />
                </div>
              </Col>
            </Row>
            <Row style={{ paddingTop: "3%" }}>
              <Col
                lg={3}
                className="hero-img aos-init animate__animated animate__fadeInUp"
              >
                <div className="text-left" style={{ marginLeft: "33px" }}>
                  <Image src={ruc} fluid />
                </div>
              </Col>
              <Col
                lg={5}
                className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
              >
                <div
                  className="text-center text-lg-center"
                  style={{ marginLeft: "10%" }}
                >
                  <h2 className="text-left">EasySign es: Firma Electrónicaa</h2>
                  <p className="text-left">
                    Persona Natural, Jurídica, o Natural con RUC, son opciones
                    que EasySign tiene para ti.
                  </p>
                  <p className="text-left">
                    **Firma acreditadas emitidas por entidades certificadoras
                    también pueden ser utilizadas con el servicio de Easy Sign.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        </LightSpeed>
        <Col lg={{span:12}} xs={{span:12}}>
        <LightSpeed right>
          <div
            className="text-right arrow-left"

          >
            <Image src={arrow} fluid />
          </div>
          </LightSpeed>
        </Col>
        <Row />
      </Container>
    </section>
  );
};
