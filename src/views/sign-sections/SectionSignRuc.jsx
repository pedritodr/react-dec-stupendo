import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { LightSpeed } from "react-reveal";

import table from "../../assets/img/section-sign/right-table.png";
import ruc from "../../assets/img/section-sign/left-ruc.png";
import arrow from "../../assets/img/section-sign/arrow-right-sign.png";
import arrowMobile from "../../assets/img/section-sign/arrow-right-sign-mobile.png";
import useViewport from "../../components/GridResponsive/ViewResponsive";
export const SectionSignRuc = () => {
  const { width, breakpoint, breakpointT } = useViewport();
  return (
    <section
      id="sign-ruc"
      className="d-flex align-items-center"
      style={{
        top: width < breakpoint ? "-115px" : "",
        paddingBottom: width < breakpoint ? "10px" : "",
      }}
    >
      <Container
        fluid
        className="container-header"
      >
        <LightSpeed right>
          <Row>
            <Col
              className="mt-2"
              md={width > breakpoint && width < breakpointT
                ? { span: 12, offset: 1 }
                : { span: 9, offset: 3 }}
            >
              <Row>
                <Col
                  lg={{ span: 5, order: 1 }}
                  md={{ span: 5, order: 1 }}
                  sm={{ span: 5, order: 1 }}
                  xs={{ span: 12, order: 2 }}
                  className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
                >
                  <div
                    className="text-center text-lg-center"
                    style={{ marginLeft: "10%" }}
                  >
                    <h2
                      className="text-left"
                      style={{
                        fontSize: width < breakpoint
                          ? "20px"
                          : (width > breakpoint && width < breakpointT ? "16px"
                          : ""),
                      }}
                    >
                      Firma Segura
                    </h2>
                    <p
                      className="text-left"
                      style={{
                        fontSize: width < breakpoint ? "15px"
                        : (width > breakpoint && width < breakpointT ? "12px"
                        : ""),
                      }}
                    >
                      Las firmas de EasySign son validadas
                      con{width < breakpoint ? <br /> : ""}
                      tu identidad, lo cual las hace seguras e intransferibles.
                    </p>
                  </div>
                </Col>
                <Col
                  lg={{ span: 4, order: 2 }}
                  md={{ span: 4, order: 2 }}
                  sm={{ span: 4, order: 2 }}
                  xs={{ span: 12, order: 1 }}
                  className="order-1 order-lg-2 hero-img aos-init animate__animated animate__fadeInUp"
                >
                  <div className="text-center">
                    {width < breakpoint
                      ? <img src={table} style={{ width: "30%" }} />
                      : (width > breakpoint && width < breakpointT
                        ? <img src={table} style={{ width: "60%" }} />
                        : <Image src={table} fluid />)}
                  </div>
                </Col>
              </Row>
              <Row style={{ paddingTop: "3%", marginTop: "8%" }}>
                <Col
                  lg={3}
                  md={3}
                  sm={3}
                  className="hero-img aos-init animate__animated animate__fadeInUp"
                >
                  <div className="text-left" style={{ marginLeft: "33px" }}>
                    {width < breakpoint
                      ? <img
                        src={ruc}
                        style={{
                          width: "40%",
                          display: "block",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      />
                      : (width > breakpoint && width < breakpointT
                        ? <img
                          src={ruc}
                          style={{
                            width: "100%",
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            paddingTop: "15%",
                          }}
                        />
                        : <Image src={ruc} fluid />)}
                  </div>
                </Col>
                <Col
                  lg={5}
                  md={5}
                  sm={5}
                  className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
                >
                  <div
                    className="text-center text-lg-center"
                    style={{ marginLeft: "10%" }}
                  >
                    <h2
                      className="text-left"
                      style={{
                        fontSize: width < breakpoint ? "20px"
                        : (width > breakpoint && width < breakpointT ? "16px"
                        : ""),
                      }}
                    >
                      EasySign es: Firma Electrónica
                    </h2>
                    <p
                      className="text-left"
                      style={{
                        fontSize: width < breakpoint ? "15px"
                        : (width > breakpoint && width < breakpointT ? "12px"
                        : ""),
                      }}
                    >
                      Persona Natural, Jurídica, o Natural
                      con{width < breakpoint ? <br /> : ""}
                      RUC, son opciones que EasySign tiene{width < breakpoint
                        ? <br />
                        : ""} para ti.
                    </p>
                    <p
                      className="text-left"
                      style={{
                        fontSize: width > breakpoint && width < breakpointT
                          ? "8px"
                          : "12px",
                      }}
                    >
                      **Firma acreditadas emitidas por entidades certificadoras
                      también pueden ser utilizadas con el servicio de Easy
                      Sign.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </LightSpeed>
        <Col
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 12 }}
          xs={{ span: 12 }}
        >
          <LightSpeed right>
            <div
              className="text-right arrow-left"
            >
              <Image src={arrow} fluid />
            </div>
          </LightSpeed>
        </Col>
        <Row />
      </Container>
    </section>
  );
};
