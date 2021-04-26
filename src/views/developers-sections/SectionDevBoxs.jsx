import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import {Bounce, LightSpeed} from 'react-reveal';
import imagenLeft from '../../assets/img/section-developer/Recurso4.png';
import recurso1 from '../../assets/img/section-developer/Recurso1.png';
import recurso2 from '../../assets/img/section-developer/Recurso2.png';
import recurso3 from '../../assets/img/section-developer/Recurso3.png';
import arrow from '../../assets/img/section-developer/arrow-left.png';
export const SectionDevBoxs = () => {

  return (
    <section id="dev-box">
      <Container fluid className="dev">
        <Row>
          <Col className="mt-2 flotante" md={{ span: 10, offset: 1 }}>
            <Row>
              <Col
                className="d-lg-flex flex-lg-column justify-content-center align-items-stretch"
                lg={4}
              >
                <Bounce bottom>
                <div className="pt-5 box">
                  <div className="text-center">
                    <h2 className="pt-2">Fácil de integrar</h2>
                    <Image src={recurso1} />
                    <p className="mt-3">
                      APIs REST simples de usar, compatibles con cualquier
                      plataforma mobile o web.
                    </p>
                  </div>
                </div>
                </Bounce>
              </Col>
              <Col
                className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
                lg={4}
              >
                 <Bounce bottom>
                <div className="pt-5 box-2">
                  <div className="text-center">
                    <h2 className="pt-2">Firma embebida</h2>
                    <Image src={recurso2} />
                    <p className="mt-3">
                      Es posible firmar pocesos por medio de su aplicativo o
                      através de DecSigner.
                    </p>
                  </div>
                </div>
                </Bounce>
              </Col>
              <Col
                className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
                lg={4}
              >
                <Bounce bottom>
                <div className="pt-5 box-3">
                  <div className="text-center">
                    <h2 className="pt-2">APIs Seguras</h2>
                    <Image src={recurso3} />
                    <p className="mt-3">
                      APIs con los estándares de seguridad más altos de la
                      industria.
                    </p>
                  </div>
                </div>
                </Bounce>
              </Col>
            </Row>
          </Col>

          <Col lg={12} className="box-container">
            <Row className="container-xs">
            <Col xs={12} className="arrow">
          <Image src={arrow} fluid />
          </Col>
              <Col
                lg={{span:6,order:1}}
                xs={{span:12,order:2}}
              >    <LightSpeed left>
                <div className="text-center" style={{ marginRigth: "33px" }}>
                  <Image src={imagenLeft} fluid />
                </div>
                </LightSpeed>
              </Col>
              <Col
             lg={{span:6,order:2}}
             xs={{span:12,order:1}}
                className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
              >
                    <LightSpeed right>
                <div
                  className="text-center text-lg-center"
                >
                  <h1 className="text-left">
                    Potencia tu sistema o aplicación integrando Dec en tu flujos
                  </h1>
                  <p className="text-left text">
                  Genera procesos, envía notificaciones a tus usuarios, crea firmas y más.
                  Todas las características de Dec y Easy Sign a tu alcance con las más
                  potentes APIs Rest.
                  </p>
                </div>
                </LightSpeed>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
