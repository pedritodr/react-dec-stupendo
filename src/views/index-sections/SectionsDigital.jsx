import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Bounce, Slide } from 'react-reveal';
import useMobileDetect from 'use-mobile-detect-hook';
import 'animate.css/animate.css';

import arrow from '../../assets/img/arrow-seption-2.png';
import arrowLeftMobil from '../../assets/img/arrow-left-mobil.png';
import mainImage from '../../assets/img/img-left-seption-2.png';
import arrowLeft from '../../assets/img/arrow-left-seption-2.png';
import arrowTop from '../../assets/img/arrow-top-mobil-xs.png';

export const SectionsDigital = () => {
  const detectMobile = useMobileDetect();
  return (
    <section id="section-2">
      <Container fluid>
        <Row>
          <Col lg={8}>
            <Slide left>
              <Image src={detectMobile.isMobile()?arrowLeftMobil:arrow} fluid />
            </Slide>
          </Col>
        </Row>
        <Row>
          <Col className="align-items-center" lg={{span:6 ,order:1}} xs={{span:12,order:2}}>
            <Bounce left>
              <div className="text-center" style={{ marginLeft: "33px" }}>
                <Image src={mainImage} fluid style={{ width: "100%" }} />
              </div>
            </Bounce>
          </Col>
          <Col className="align-items-center" lg={{span:6,order:2}} xs={{span:12,order:1}}>
            <Bounce right>
            <h1>Digitaliza tus documentos, y envíalos para ser firmados</h1>
              <Row>
                <Col lg={12} xs={9}>
              <div className="body-container-text">
                <h2>Incrementa la eficiencia, ahorrando tiempo</h2>
                <p>
                  Con Dec es facíl ahorrar tiempo, crea un proceso de firma
                  electrónica en tan solo 4 sencillos pasos.
                </p>
                <h2>Firma documentos donde quieras, cuando quieras</h2>
                <p>
                  En tu casa, oficina, en el parque, o ¡en la playa!, firma
                  documentos digitales con tan solo un clic usando DecSigner.
                </p>
              </div>
                </Col>
            <div className="arrow-top-xs">
            <Image className="arrow-top-img" src={arrowTop} fluid/>
            </div>
              </Row>

            </Bounce>
          </Col>
          <Col lg={{span:12,order:3}} xs={{span:12,order:3}}>
            <Bounce right>
              <div
                className="text-right container-arrow"
                style={{ marginTop: "-70px", marginRight: "-1%" }}
              >
                <Image src={arrowLeft} fluid style={{ width: "73%" }} />
              </div>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
