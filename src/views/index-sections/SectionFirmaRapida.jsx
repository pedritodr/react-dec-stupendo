import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Bounce, Slide } from "react-reveal";
import backgraund from "../../assets/img/section-firma-rapida/Recurso-fondo.png";
import imageRigth from "../../assets/img/section-firma-rapida/Recurso_left.png";
import arrowLeft from "../../assets/img/section-firma-rapida/Recurso_right.png";
import useViewport from "../../components/GridResponsive/ViewResponsive";

export const SectionFirmaRapida = () => {
  const { width, breakpoint, breakpointT } = useViewport();
  const styles = {
    backgroundLinear: {
      background:
        "-webkit-linear-gradient(170deg, white 30%, rgb(239, 239, 239) 30%)",
      background:
        "-o-linear-gradient(170deg, white 30%, rgb(239, 239, 239) 30%)",
      background:
        "-moz-linear-gradient(170deg, white 30%, rgb(239, 239, 239) 30%)",
      background: "linear-gradient(170deg, white 30%, rgb(239, 239, 239) 30%)",
    },
  };

  return (
    <section id="section-3" className="d-flex align-items-center">
      <Container
        fluid
        className="body-container"
        style={width < breakpoint
          ? styles.backgroundLinear
          : { marginTop: "1px" }}
      >
        <Row style={{ marginTop: "15%" }}>
          <Col
            lg={6}
            xs={8}
            className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
          >
            <div className="text-center text-lg-center">
              <h1
                style={{
                  fontSize: width < breakpoint ? "18px"
                  : (width > breakpoint && width < breakpointT ? "22px" : ""),
                  lineHeight: width < breakpoint ? "1.2"
                  : (width > breakpoint && width < breakpointT ? "1.1" : ""),
                  textAlign: width < breakpoint ? "left" : "",
                }}
              >
                Firma rápida y segura{width > breakpoint && width < breakpointT
                  ? <br />
                  : ""} con validez legal
              </h1>
              <p
                style={{
                  fontSize: width < breakpoint ? "12px"
                  : (width > breakpoint && width < breakpointT ? "12px" : ""),
                  lineHeight: width < breakpoint ? "1.3" : "",
                }}
              >
                Dec admite varios tipos de firma, de
                acuerdo{width > breakpoint && width < breakpointT ? <br /> : ""}
                {" "}
                a las necesidades de tu proceso
                digital.{width > breakpoint && width < breakpointT ? <br />
                : ""}{" "}
                Utiliza desde una aceptación simple,
                hasta{width > breakpoint && width < breakpointT ? <br /> : ""}
                {" "}
                una firma acreditada.
              </p>
            </div>
          </Col>

          <Col
            lg={6}
            xs={4}
            className="order-1 order-lg-2 hero-img aos-init animate__animated animate__fadeInUp"
          >
            <div
              className="text-center body-container-img-right"
              style={{
                marginTop: width < breakpoint ? "80px" : "",
                marginRight: width > breakpoint && width < breakpointT
                  ? "15%"
                  : "",
              }}
            >
              <Image
                src={imageRigth}
                fluid
              />
            </div>
          </Col>
          <Col
            lg={12}
            className="order-1 order-lg-2 hero-img aos-init animate__animated animate__fadeInUp"
          >
            <div
              className="text-left body-container-arrow-bottom"
              style={{ paddingTop: "3%", marginLeft: "-1%" }}
            >
              <Image
                src={arrowLeft}
                style={{
                  width: width > breakpoint && width < breakpointT ? "60%" : "",
                }}
                fluid
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
