import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { LightSpeed} from 'react-reveal';
import imagenRight from '../../assets/img/section-developer/Recurso7.png';
import imagenLeft from '../../assets/img/section-developer/Recurso8.png';

export const SectionDevFooter = () => {
  return (
    <section id="dev-footer">
      <Container fluid>
        <Row>
          <Col lg={{span:6,order:1}}  xs={{span:12,order:2}}>
            <LightSpeed left>
            <div
              className="text-center body-image"
            >
              <Image src={imagenLeft} fluid />
            </div>
            </LightSpeed>
          </Col>

          <Col lg={{span:6,order:2}} xs={{span:12,order:1}}>
          <LightSpeed right>
            <div className="text-left">
              <Image src={imagenRight} fluid />
              <p className="mt-5">
                Potencia al máximo tus aplicaciones o procesos de negocio.
              </p>
              <div
                className="body-container-btn pt-3 text-brackground"
              >
                <h1>¿Estás listo?</h1>
              </div>
              <div className="body-container-btn pt-5">
                <a className="btn-get-started">Comienza Gratis</a>
              </div>
            </div>
            </LightSpeed>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
