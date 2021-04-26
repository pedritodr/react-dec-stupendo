import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { LightSpeed} from 'react-reveal';
import imagenRight from '../../assets/img/section-developer/Recurso-code.png';
import icon1 from '../../assets/img/section-developer/Recurso5.png';
import icon2 from '../../assets/img/section-developer/Recurso6.png';

export const SectionDevCreate = () => {
  return (
    <section id="dev-create">
      <Container fluid>
        <Row style={{ paddingTop: "8%" }}>
          <Col
            lg={6}
            className="pt-4 justify-content-center align-items-stretch"
          >
            <LightSpeed left>
            <div
              className="text-center body-left"
            >
              <h1 className="text-left">
                Creadas por desarrolladores, para desarrolladores que buscan lo mejor
              </h1>
              <p className="text-left">
                Nuestro esfuerzo se basa en diseñar constantemente la mejor experiencia de uso-integración, ajustada al dinamismo de tu negocio.
                </p>
            </div>

            <div className="text-left pt-5 mb-4 body-left container-btn">
              <a className="download-btn ">Leer Documentación</a>
            </div>
            </LightSpeed>
            <Row className="container-btn">
              <Col md={{ span: 4, offset: 2 }}>
              <LightSpeed left>
                <div className="text-left ">
                  <Image
                    src={icon2}
                    fluid
                    style={{
                      marginTop: 15,
                    }}
                  />
                  <h2>DevZone</h2>
                  <p className="text-left p-text">
                    Consulta la documentación para desarrolladores disponible
                    24/7, sencilla y fácil de entender.
                  </p>
                </div>
                </LightSpeed>
              </Col>
              <Col lg={4}>
              <LightSpeed left>
                <div className="text-left">
                  <Image src={icon1} fluid />
                  <h2>Construye</h2>
                  <p className="text-left p-text">
                    Adapta el flujo de Dec a la medida de tu aplicativo, cuando
                    necesites, y como necesites.
                  </p>
                </div>
                </LightSpeed>
              </Col>
            </Row>
          </Col>

          <Col
            lg={6}
          >
            <LightSpeed rigth>
            <div className="text-left">
              <Image src={imagenRight} fluid />
            </div>
            </LightSpeed>
            <Row className="container-icons">
              <Col md={{ span: 4, offset: 2 }}>
              <LightSpeed left>
                <div className="text-left ">
                  <Image
                    src={icon2}
                    fluid
                    style={{
                      marginTop: 15,
                    }}
                  />
                  <h2>DevZone</h2>
                  <p className="text-left p-text">
                    Consulta la documentación para desarrolladores disponible
                    24/7, sencilla y fácil de entender.
                  </p>
                </div>
                </LightSpeed>
              </Col>
              <Col lg={4}>
              <LightSpeed left>
                <div className="text-right">
                  <Image src={icon1} fluid />
                  <h2>Construye</h2>
                  <p className="text-right p-text-right">
                    Adapta el flujo de Dec a la medida de tu aplicativo, cuando
                    necesites, y como necesites.
                  </p>
                </div>
                </LightSpeed>
              </Col>
              <div className="text-center pt-5 mb-4 body-left">
              <a className="download-btn ">Leer Documentación</a>
            </div>
            </Row>
          </Col>
        </Row>
        <div className="body-container-binario">

</div>
      </Container>
    </section>
  );
};
