import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {LightSpeed} from 'react-reveal';
import ImgRigth from "../../assets/img/section-dec/Recurso-right.png"; // with imp

export const SectionsHeader = () => {

  return (
    <section id="section-1" className="d-flex align-items-center">
      <Container fluid>
        <Row>
          <Col lg={{span:7,offset:1}} className="body-container d-flex align-items-center">
            <LightSpeed left>
            <Row className="pt-4">
              <Col className="text-container">
                <h1 className="text-left col-lg-6 col-xs-6 text-lg">Tu portafolio digital de firma electrónica en la nube</h1>
                <h1 className="text-left text-xs ">Tu portafolio digital</h1>
                <h1 className="text-left text-xs "> de firma electrónica</h1>
                <h1 className="text-left text-xs ">en la nube</h1>
                <Row className="">
                  <Col lg={6} xs={{span:10}}>
                    <h2 className="text-left sub-text">Usa Dec para almacenar</h2>
                    <p className="text-left sub-text">
                      Todos los procesos que creas en Dec, se guardan en tu
                      storage personal con su ID único en la nube, permitiéndote
                      acceder a ellos, fácil y rápidamente.
                    </p>
                  </Col>
                  <Col lg={6}>
                    <h2>Usa Dec para firmar</h2>
                    <p>
                      Firma un documento, o solicita que lo firmen. Cualquier
                      persona puede firmar, incluso sin tener una firma
                      electrónica creada con anterioridad.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            </LightSpeed>
          </Col>
          <Col
            lg={4}
            className="body-container-image"
          >
             <LightSpeed right>
            <div className="text-center pt-5">
              <img src={ImgRigth} className="img-fluid" alt="" />
            </div>
            </LightSpeed>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
