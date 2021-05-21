import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Bounce } from "react-reveal";
import imageLeft from "../../assets/img/section-rapido/Recurso_left_1.png";
import arrowRight from "../../assets/img/section-rapido/Recurso-right.png";
import useViewport from "../../components/GridResponsive/ViewResponsive";
export const SectionRapida = () => {
  const { width, breakpoint, breakpointT } = useViewport();
  return (
    <section
      id="section-4"
      className="d-flex align-items-center"
      style={{ marginBottom: width < breakpoint ? "20px" : "" }}
    >
      <Container fluid>
        <Row className="pt-5">
          <Col className="align-items-center" lg={6} xs={5}>
            <Bounce left>
              <div
                className="text-center body-container-img"
                style={{ marginTop: width < breakpoint ? "60px" : "" }}
              >
                <Image
                  src={imageLeft}
                  style={{
                    width: width > breakpoint && width < breakpointT
                      ? "50%"
                      : "",
                  }}
                  fluid
                />
              </div>
            </Bounce>
          </Col>
          <Col className="align-items-center" lg={6} xs={7}>
            <Bounce right>
              <h1
                style={{
                  fontSize: width < breakpoint
                    ? "17px"
                    : (width > breakpoint && width < breakpointT ? "22px" : ""),
                  lineHeight: width < breakpoint ? "1.2"
                  : (width > breakpoint && width < breakpointT ? "1.2" : ""),
                  textAlign: width < breakpoint ? "left" : "",
                  paddingLeft: width < breakpoint ? "9px" : "",
                }}
              >
                Rápido y en la nube
              </h1>
              <div
                className="body-container-text"
                style={{ paddingLeft: width < breakpoint ? "10px" : "" }}
              >
                <p
                  style={{
                    fontSize: width < breakpoint ? "12px"
                    : (width > breakpoint && width < breakpointT ? "12px" : ""),
                    lineHeight: width < breakpoint ? "1.3"
                    : (width > breakpoint && width < breakpointT ? "1.2" : ""),
                  }}
                >
                  Dec almacena todos tus documentos en
                  un{width > breakpoint && width < breakpointT ? <br /> : ""}
                  {" "}
                  storage personal en la nube, accesible
                  en{width > breakpoint && width < breakpointT ? <br /> : ""}
                  {" "}
                  cualquier momento desde tu dispositivo
                  favorito.{width > breakpoint && width < breakpointT
                    ? <br />
                    : ""} ¡Simplemente tu portafolio digital.
                </p>
              </div>
            </Bounce>
          </Col>
          <Col lg={12}>
            <Bounce right>
              <div className="text-right body-container-arrow">
                <Image src={arrowRight} fluid />
              </div>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
