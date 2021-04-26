import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import {LightSpeed} from 'react-reveal';

import imagenLeft from '../../assets/img/section-sign/sing-footer-left.png';
import signFooter from '../../assets/img/section-sign/easy-sing-footer.png';

export const SectionSignFooter = () => {
  return (
    <section id="sign-footer" className="d-flex align-items-center">
      <Container fluid>
        <Row>
          <Col
            lg={{span:6,order:1}}
            xs={{span:12,order:2}}
            className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
          >
               <LightSpeed left>
            <div className="text-center">
              <Image src={imagenLeft} fluid />
            </div>
            </LightSpeed>
          </Col>

          <Col
            lg={{span:6,order:2}}
            xs={{span:12, order:1}}
            className="order-1 order-lg-2"
          >
          <LightSpeed right>
            <Row>
              <Col lg={12}>
                <div className="text-center">
                  <Image src={signFooter} fluid />
                </div>
              </Col>
              <Col lg={12} className="text-center">
                <div
                  className="text-center pt-3 body-container"
                >
                  <h1>El complemento perfecto de Dec</h1>
                </div>
              </Col>
              <Col
                lg={12}
                className="d-lg-flex flex-lg-column justify-content-center align-items-stretch"
              >
                <div className="text-center text-lg-center  pt-5  body-btn">
                  <a className="btn-get-started">Prueba Dec</a>
                </div>
              </Col>
            </Row>
            </LightSpeed>
          </Col>

        </Row>
      </Container>
    </section>
  );
};
