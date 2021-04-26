import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import {LightSpeed} from 'react-reveal';
import recurso1 from '../../assets/img/section-sign/Recurso1.png';
import recurso2 from '../../assets/img/section-sign/Recurso2.png';
import recurso3 from '../../assets/img/section-sign/Recurso3.png';

export const SectionSignInfo = () => {
  return (
    <LightSpeed right>
    <section id="sign-info">
      <Container fluid>
        <Row>
          <Col className="mt-2" md={{ span: 10, offset: 1 }}>
            <Row>
              <Col
                className="d-lg-flex flex-lg-column justify-content-center align-items-stretch"
                lg={4}
              >
                <div className="pt-3 box">
                  <Row>
                    <Col  lg={{ order: 1,span: 12}}  xs={{ order: 2,span: 4}} >
                      <div className="text-center">
                      <Image src={recurso1} />
                      </div>
                    </Col>
                    <Col lg={{ order: 2,span: 12}}  xs={{ order: 1,span: 8}}>
                    <p className="mt-2 text-center">
                      Varios tipos de firma disponibles de acuerdo a tus
                      nesecesidades.
                    </p>
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col
                className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
                lg={4}
              >
                <div className="pt-3 box-2">
                <Row>
                    <Col  lg={{ order: 1,span: 12}}  xs={{ order: 1,span: 4}} >
                      <div className="text-center">
                      <Image src={recurso2} />
                      </div>
                    </Col>
                    <Col lg={{ order: 2,span: 12}}  xs={{ order: 2,span: 8}}>
                    <p className="mt-2 text-center"> Tu firma electrónica con validez legal al alcance de tu
                      mano.
                    </p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col
                className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
                lg={4}
              >
                <div className="pt-3 box">
                <Row>
                    <Col  lg={{ order: 1,span: 12}}  xs={{ order: 2,span: 4}} >
                      <div className="text-center">
                      <Image src={recurso3} />
                      </div>
                    </Col>
                    <Col lg={{ order: 2,span: 12}}  xs={{ order: 1,span: 8}}>
                    <p className="mt-2 text-center">
                    Firma fácil y rápido desde cualquier dispositivo usando
                      DecSigner.
                    </p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
    </LightSpeed>
  );
};
