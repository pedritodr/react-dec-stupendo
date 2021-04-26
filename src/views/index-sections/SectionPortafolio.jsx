import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import backgraundFooter from '../../assets/img/section-portafolio/Recurso-footer.png';
import imageCenter from '../../assets/img/section-portafolio/Recurso-center.png';

export const SectionPortafolio = () => {

  return (
    <section id="section-5" className="d-flex align-items-center">
      <Container
        fluid
        className="body-container"
      >
        <Row style={{ paddingTop: "10%" }}>
          <Col
            lg={12}
            className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
          >
            <div>
              <h1 className="title-footer">
                Empieza con tu potafolio digital ahora
              </h1>
              <div className="body-container-text">
                <p>
                  Para tu empresa, uso personal, o incluso para desarrolladores,
                  encuentra la versión Dec ideal para ti.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={12}>
            <div className="text-center">
              <Image src={imageCenter} fluid style={{ width: "60%" }} />
            </div>
          </Col>
          <Col lg={12}>
            <div
              className="text-center pt-3 body-container-footer"
            >
              <h1>¿Listo para probarlo?</h1>
            </div>
          </Col>
          <Col lg={12} className="pt-5 pb-5  d-lg-flex flex-lg-column justify-content-center align-items-stretch">
            <div className="text-center text-lg-center  pt-5  ">
              <a className="btn-get-started">Comienza Gratis</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
