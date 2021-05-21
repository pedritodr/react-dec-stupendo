import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { LightSpeed } from "react-reveal";
import imagenRight from "../../assets/img/section-developer/Recurso-code.png";
import icon1 from "../../assets/img/section-developer/Recurso5.png";
import icon2 from "../../assets/img/section-developer/Recurso6.png";
import backgroundImage from "../../assets/img/section-developer/backgraund-binario.png";
import imagenFooter1 from "../../assets/img/section-developer/Recurso7.png";
import imagenFooter2 from "../../assets/img/section-developer/Recurso8.png";
import textBackground from "../../assets/img/section-developer/Recurso91.png";
import useViewport from "../../components/GridResponsive/ViewResponsive";
import startFooterMo from "../../assets/img/section-developer/stars-footer-mobil.png";
export const SectionDevCreate = () => {
  const { width, breakpoint, breakpointT } = useViewport();
  const styles = {
    containerBin: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    },
  };

  return (
    <section
      id="dev-create"
      style={{
        paddingBottom: width < breakpoint
          ? "0px"
          : (width > breakpoint && width < breakpointT ? "0px" : ""),
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div
            className={width > breakpoint && width < breakpointT
              ? "col-lg-11 col-md-11 sol-sm-11 mx-auto"
              : "col-lg-10 col-md-10 sol-sm-10 mx-auto"}
          >
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-sm-6"
                style={{ paddingLeft: width < breakpoint ? "30px" : "" }}
              >
                <LightSpeed left>
                  <div
                    className="text-center body-left"
                  >
                    <h1
                      className="text-left"
                      style={{
                        fontSize: width < breakpoint ? "20px"
                        : (width > breakpoint && width < breakpointT ? "25px"
                        : ""),
                        lineHeight: width < breakpoint ? "1.3"
                        : (width > breakpoint && width < breakpointT ? "1.2"
                        : ""),
                      }}
                    >
                      Creadas por desarrolladores,{width < breakpoint
                        ? <br />
                        : ""}{" "}
                      para desarrolladores que{width < breakpoint ? <br /> : ""}
                      {" "}
                      buscan lo mejor
                    </h1>
                    <p
                      className="text-left mt-4"
                      style={{
                        fontSize: width < breakpoint ? "16px"
                        : (width > breakpoint && width < breakpointT ? "16px"
                        : ""),
                      }}
                    >
                      Nuestro esfuerzo se basa en diseñar{width < breakpoint
                        ? <br />
                        : ""}{" "}
                      constantemente la mejor experiencia de{width < breakpoint
                        ? <br />
                        : (width > breakpoint && width < breakpointT ? <br />
                        : "")}{" "}
                      uso-integración, ajustada
                      al{width > breakpoint && width < breakpointT ? <br />
                      : ""} dinamismo{width < breakpoint ? <br /> : ""}{"  "}
                      de tu negocio.
                    </p>
                    {width < breakpoint ? "" : <div
                      className={width > breakpoint && width < breakpointT
                        ? "col-lg-12 text-left mt-4 mb-4"
                        : "col-lg-12 text-left mt-5"}
                    >
                      <a
                        className="download-btn"
                        style={{
                          fontSize: width > breakpoint && width < breakpointT
                            ? "24px"
                            : "",
                          padding: width > breakpoint && width < breakpointT
                            ? "10px 20px 10px 20px"
                            : "",
                        }}
                      >
                        Leer Documentación
                      </a>
                    </div>}
                  </div>
                </LightSpeed>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <Image src={imagenRight} fluid />
              </div>
            </div>
          </div>
        </div>
        <div style={styles.containerBin}>
          {width < breakpoint
            ? <div className="row">
              <div className="col-lg-10 col-md-10 sol-sm-10 mx-auto">
                <div className="row">
                  <div
                    className="col-lg-4 col-md-4 col-sm-4"
                    style={{ paddingLeft: "60px" }}
                  >
                    <Image src={icon1} fluid />
                    <h2 style={{ paddingTop: "10px" }}>Construye</h2>
                    <p
                      className="text-left p-text"
                      style={{ fontSize: "18px" }}
                    >
                      Adapta el flujo de Dec a<br />{" "}
                      la medida de tu aplicativo,<br />{" "}
                      cuando necesites, y como<br /> necesites.
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="row" style={{ paddingRight: "40px" }}>
                      <div className="col-lg 12">
                        <Image
                          className="float-right"
                          src={icon2}
                          fluid
                          style={{
                            marginTop: 15,
                          }}
                        />
                      </div>
                      <div className="col-lg-12">
                        <h2 style={{ textAlign: "right", paddingTop: "10px" }}>
                          DevZone
                        </h2>
                        <p
                          className="text-right p-text"
                          style={{ paddingRight: "10px", fontSize: "18px" }}
                        >
                          Consulta la documentación<br />{" "}
                          para desarrolladores<br />{" "}
                          disponible 24/7, sencilla<br /> y fácil de entender.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 text-center mt-5">
                    <a
                      className="download-btn"
                      style={{
                        fontSize: "18px",
                        padding: "15px 20px 15px 20px",
                      }}
                    >
                      Leer Documentación
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="row">
                    <div className="col-lg-10 col-md-10 sol-sm-10 mx-auto">
                      <div className="row">
                        <div className="col-lg-12" style={{ marginTop: "10%" }}>
                          <LightSpeed right>
                            <div
                              className="col-lg-10 col-md-10 sol-sm-10 mx-auto"
                            >
                              <div className="row">
                                <div className="col-lg-12">
                                  <Image
                                    src={imagenFooter1}
                                    className="center-block"
                                    style={{
                                      width: "70%",
                                      display: "block",
                                      marginLeft: "auto",
                                      marginRight: "auto",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <p
                              className="mt-5"
                              style={{
                                ...styles.textImage,
                                fontSize: "18px",
                                textAlign: "center",
                                paddingLeft: "40px",
                                paddingRight: "40px",
                              }}
                            >
                              Potencia al máximo tus aplicaciones<br />{"  "}
                              o procesos de negocio.
                            </p>
                            <div
                              className="text-center"
                              style={{
                                backgroundImage: "url(" + startFooterMo + ")",
                                backgroundSize: "auto",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                              }}
                            >
                              <h2
                                style={{
                                  ...styles.textBG,
                                  marginTop: "10%",
                                  color: "#3a436d",
                                  fontSize: "16px",
                                }}
                              >
                                ¿Estás listo?
                              </h2>
                            </div>
                          </LightSpeed>
                        </div>
                        <div className="col-lg-12 mt-5 mb-5 text-center">
                          <a
                            className="download-btn"
                            style={{
                              fontSize: "18px",
                              padding: "15px 20px 15px 20px",
                            }}
                          >
                            Comienza Gratis
                          </a>
                        </div>
                        <div className="col-lg-12 mt-3">
                          <LightSpeed left>
                            <div
                              className="text-center body-image"
                            >
                              <Image src={imagenFooter2} />
                            </div>
                          </LightSpeed>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            : <div className="row">
              <div className="col-lg-10 col-md-10 sol-sm-10 mx-auto">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <Image
                      src={icon2}
                      fluid
                      style={{
                        marginTop: 15,
                      }}
                    />
                    <h2
                      style={{
                        fontSize: width > breakpoint && width < breakpointT
                          ? "18px"
                          : "",
                      }}
                    >
                      DevZone
                    </h2>
                    <p
                      className="text-left p-text"
                      style={{
                        fontSize: width > breakpoint && width < breakpointT
                          ? "16px"
                          : "",
                      }}
                    >
                      Consulta la documentación para desarrolladores disponible
                      24/7, sencilla y fácil de entender.
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <Image src={icon1} fluid />
                    <h2
                      style={{
                        fontSize: width > breakpoint && width < breakpointT
                          ? "18px"
                          : "",
                      }}
                    >
                      Construye
                    </h2>
                    <p
                      className="text-left p-text"
                      style={{
                        fontSize: width > breakpoint && width < breakpointT
                          ? "16px"
                          : "",
                      }}
                    >
                      Adapta el flujo de Dec a la medida de tu aplicativo,
                      cuando necesites, y como necesites.
                    </p>
                  </div>
                </div>
              </div>
            </div>}
        </div>
      </div>
    </section>
  );
};
