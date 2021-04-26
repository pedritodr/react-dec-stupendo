import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import {Bounce, LightSpeed} from 'react-reveal';
import recurso1 from '../../assets/img/section-carousel/Recurso-1.png';
import recurso2 from '../../assets/img/section-carousel/Recurso-2.png';
import recurso3 from '../../assets/img/section-carousel/Recurso-3.png';

export const SectionFooter = () => {

  return (
    <section id="dec">
      <Container fluid>
        <Row>
          <Col lg={12}>
            <Bounce bottom>
            <h1>
              Dec, el portafolio digital definitivo
            </h1>
            </Bounce>
          </Col>

          <Col className="mt-2" md={{ span: 10, offset: 1 }}>
            <Row>
              <Col
                className="d-lg-flex flex-lg-column justify-content-center align-items-stretch"
                lg={4}
              >
                  <Bounce bottom>
                <div className="pt-3 box">
                <Row>
                  <Col lg={{span:12, order:1}} xs={{span:5,order:1}} className="text-center p-1">
                  <Image src={recurso1} />
                  </Col>
                  <Col lg={{span:12, order:2}} xs={{span:7,order:2}} className="text-center p-1">
                  <p>
                      Todos tus procesos de firma electrónica en un solo lugar.
                    </p>
                  </Col>
                </Row>
                </div>
                </Bounce>
              </Col>
              <Col
                className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
                lg={4}
              >
                 <Bounce bottom>
                <div className="pt-3 box-2">
                <Row>
                  <Col lg={{span:12, order:1}} xs={{span:5,order:2}} className="text-center p-1">
                  <Image src={recurso2} />
                  </Col>
                  <Col lg={{span:12, order:2}} xs={{span:7,order:1}} className="text-center p-3">
                  <p>
                  Procesos y firmas seguras con autentificación de seguridad
                      verificadas.
                    </p>
                  </Col>
                </Row>
                </div>
                </Bounce>
              </Col>
              <Col
                className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
                lg={4}
              >
                    <Bounce bottom>
                <div className="pt-3 box">
                <Row>
                  <Col lg={{span:12, order:1}} xs={{span:5,order:1}} className="text-center p-1">
                  <Image src={recurso3} />
                  </Col>
                  <Col lg={{span:12, order:2}} xs={{span:7,order:2}} className="text-center">
                  <p className="text-box">
                  ¡100% en la nube! Accede donde quieras y desde cualquier
                      lugar, usando el dispositivo con conexión a internet de tu
                      preferencia.
                    </p>
                  </Col>
                </Row>
                </div>
                </Bounce>
              </Col>
            </Row>
          </Col>
        </Row>
        <Bounce bottom>
        <Row>
          <Col lg={12}>
            <div
              className="text-center pt-5 body-container"
            >
              <h1 className="title-footer">¿Listo para probar Dec?</h1>
            </div>
          </Col>
          <Col className="col-lg-12 pt-5  d-lg-flex flex-lg-column justify-content-center align-items-stretch">
            <div className="text-center text-lg-center  pt-5  ">
              <a className="btn-get-started">Comienza Gratis</a>
            </div>
          </Col>
        </Row>
        </Bounce>
      </Container>
    </section>
  );
};
