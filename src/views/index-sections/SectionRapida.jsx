import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Bounce } from 'react-reveal';
import imageLeft from '../../assets/img/section-rapido/Recurso_left_1.png';
import arrowRight from '../../assets/img/section-rapido/Recurso-right.png';

export const SectionRapida = () => {
  return (
    <section id="section-4" className="d-flex align-items-center">
      <Container fluid>
        <Row className="pt-5">
          <Col className="align-items-center" lg={6} xs={4
          }>
            <Bounce left>
              <div className="text-center body-container-img">
                <Image src={imageLeft} fluid  />
              </div>
            </Bounce>
          </Col>
          <Col className="align-items-center" lg={6} xs={8}>
            <Bounce right>
              <h1>Rápido y en la nube</h1>
              <div className="body-container-text">
                <p>
                  Dec almacena todos tus documentos en un storage personal en la
                  nube, accesible en cualquier momento desde tu dispositivo
                  favorito. ¡Simplemente tu portafolio digital.
                </p>
              </div>
            </Bounce>
          </Col>
          <Col lg={12}>
            <Bounce right>
              <div className="text-right body-container-arrow">
                <Image src={arrowRight} fluid/>
              </div>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
