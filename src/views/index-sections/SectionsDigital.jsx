import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Bounce, Slide } from "react-reveal";
import useMobileDetect from "use-mobile-detect-hook";
import "animate.css/animate.css";

import arrow from "../../assets/img/arrow-seption-2.png";
import arrowLeftMobil from "../../assets/img/mobile-arrow.png";
import mainImage from "../../assets/img/img-left-seption-2.png";
import arrowLeft from "../../assets/img/arrow-left-seption-2.png";
import arrowLeftTable from "../../assets/img/arrow-left-tablet.png";
import arrowTop from "../../assets/img/arrow-top-mobil-xs.png";
import useViewport from "../../components/GridResponsive/ViewResponsive";

export const SectionsDigital = () => {
  const detectMobile = useMobileDetect();
  const { width, breakpoint, breakpointT } = useViewport();
  return (
    <section id="section-2">
      <Container fluid>
        <Row>
          <Col lg={8}>
            <Slide left>
              <Image
                style={{
                  marginTop: width > breakpoint && width < breakpointT
                    ? "2rem"
                    : "",
                }}
                src={width < breakpoint
                  ? arrowLeftMobil
                  : (width > breakpoint && width < breakpointT ? arrowLeftTable
                  : arrow)}
                fluid
              />
            </Slide>
          </Col>
        </Row>
        <Row>
          <Col
            className="align-items-center"
            lg={{ span: 6, order: 1 }}
            md={{ span: 6, order: 1 }}
            sm={{ span: 6, order: 1 }}
            xs={{ span: 12, order: 2 }}
          >
            <Bounce left>
              <div className="text-center" style={{ marginLeft: "33px" }}>
                <Image src={mainImage} fluid style={{ width: "100%" }} />
              </div>
            </Bounce>
          </Col>
          <Col
            className="align-items-center"
            lg={{ span: 6, order: 2 }}
            md={{ span: 6, order: 2 }}
            sm={{ span: 6, order: 2 }}
            xs={{ span: 12, order: 1 }}
          >
            <Bounce right>
              <h1
                style={{
                  fontSize: width < breakpoint ? "24px"
                  : (width > breakpoint && width < breakpointT ? "22px" : ""),
                  lineHeight: width > breakpoint && width < breakpointT ? "1"
                  : "",
                }}
              >
                Digitaliza tus documentos, y envíalos para ser firmados
              </h1>
              <Row>
                <Col lg={12} md={12} sm={12} xs={9}>
                  <div className="body-container-text">
                    <h2
                      style={{
                        fontSize: width < breakpoint ? "18px"
                        : (width > breakpoint && width < breakpointT ? "14px"
                        : ""),
                      }}
                    >
                      Incrementa la eficiencia, ahorrando tiempo
                    </h2>
                    <p
                      style={{
                        fontSize: width < breakpoint ? "15px"
                        : (width > breakpoint && width < breakpointT ? "12px"
                        : ""),
                      }}
                    >
                      Con Dec es facíl ahorrar tiempo, crea un proceso de firma
                      electrónica en tan solo 4 sencillos pasos.
                    </p>
                    <h2
                      style={{
                        fontSize: width < breakpoint ? "18px"
                        : (width > breakpoint && width < breakpointT ? "14px"
                        : ""),
                      }}
                    >
                      Firma documentos donde quieras, cuando quieras
                    </h2>
                    <p
                      style={{
                        fontSize: width < breakpoint ? "15px"
                        : (width > breakpoint && width < breakpointT ? "12px"
                        : ""),
                      }}
                    >
                      En tu casa, oficina, en el parque, o ¡en la playa!, firma
                      documentos digitales con tan solo un clic usando<br></br>
                      DecSigner.
                    </p>
                  </div>
                </Col>
                <div className="arrow-top-xs">
                  <Image
                    className="arrow-top-img"
                    src={arrowTop}
                    fluid
                    style={{
                      marginTop: width > breakpoint && width < breakpointT
                        ? "8%"
                        : "",
                    }}
                  />
                </div>
              </Row>
            </Bounce>
          </Col>
          <Col
            lg={{ span: 12, order: 3 }}
            md={{ span: 12, order: 3 }}
            sm={{ span: 12, order: 3 }}
            xs={{ span: 12, order: 3 }}
          >
            <Bounce right>
              <div
                className="text-right container-arrow"
                style={{
                  marginTop: width > breakpoint && width < breakpointT
                    ? "-5%"
                    : "-70px",
                  marginRight: "-1%",
                }}
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
