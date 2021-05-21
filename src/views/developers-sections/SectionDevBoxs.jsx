import React from "react";
import { Bounce, LightSpeed } from "react-reveal";
import imagenLeft from "../../assets/img/section-developer/Recurso4.png";
import SvgCode from "../../components/SvgSectionDevelopers/SvgCode";
import SvgLock from "../../components/SvgSectionDevelopers/SvgLock";
import SvgPC from "../../components/SvgSectionDevelopers/SvgPC";
import useViewport from "../../components/GridResponsive/ViewResponsive";
import arrowResponsive from "../../assets/img/section-developer/arrow-responsive.png";
import bgc from "../../assets/img/section-developer/backgraund-container.png";
export const SectionDevBoxs = () => {
  const { width, breakpoint, breakpointT } = useViewport();
  const styles = {
    rowAbsolute: {
      position: "absolute",
      top: "-15%",
      right: "0",
      left: "0",
    },
    row: {
      backgroundColor: "#EFEFEF",
    },
    firstCard: {
      backgroundImage: "linear-gradient(to right, #00c484 0%, #3a447c 100%)",
      borderRadius: "20px",
      borderWidth: 0,
    },
    cardMidle: {
      backgroundImage: "linear-gradient(to right, #00c484 0%, #3a447c 100%)",
      borderRadius: "20px",
      borderWidth: 0,
      bottom: "15%",
    },
    textTitleCard: {
      letterSpacing: "normal",
      lineHeight: "normal",
      fontSize: width > breakpoint && width < breakpointT ? "14px" : "22px",
      fontWeight: "bold",
      fontStyle: "normal",
      letterSpacing: "normal",
      color: "white",
      fontFamily: "MYRIADPRO , sans-serif",
    },
    textCard: {
      letterSpacing: "normal",
      lineHeight: "normal",
      fontSize: width > breakpoint && width < breakpointT ? "11px" : "17px",
      fontWeight: "300",
      fontStyle: "normal",
      letterSpacing: "normal",
      color: "white",
      fontFamily: "MYRIADPROREGULAR , sans-serif",
      textAlign: "center",
    },
    textSecondTitle: {
      margin: "0 0 10px 0",
      fontSize: "40px ",
      fontWeight: "500",
      lineHeight: "1.2",
      color: "#3E4A74",
      fontFamily: "MYRIADPRO , sans-serif",
    },
    textSecondSubTitle: {
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "1.4",
      color: "#3E4A74",
      fontFamily: "MYRIADPROREGULAR , sans-serif",
      fontSize: "19px",
      fontWeight: "400",
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      marginRight: width > breakpoint && width < breakpointT ? "0px" : "",
    },
    backgroundBoxContainer: {
      backgroundImage: width < breakpoint ? "" : "url(" + bgc + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      marginTop: "0px",
      marginBottom: "0px",
      top: "-273px",
      zIndex: "-1000",
    },
  };
  return (
    <div className="container-fluid" style={{ position: "relative" }}>
      <div className="row mb-3">
        <div id="dev-box">
          <div className=" mb-3">
            <div
              className={width > breakpoint && width < breakpointT
                ? "col-lg-10 col-md-10 col-sm-10 mx-auto"
                : "col-lg-8 col-md-8 col-sm-8 mx-auto"}
            >
              <div className="row">
                <div
                  className="col-lg-4 col-md-4 col-sm-4"
                  style={{
                    paddingLeft: width < breakpoint ? "15%" : "",
                    paddingRight: width < breakpoint ? "15%" : "",
                    marginBottom: width < breakpoint ? "19%" : "",
                  }}
                >
                  <Bounce bottom>
                    <div className="card" style={styles.firstCard}>
                      <div className="card-body mb-3">
                        <div className="row">
                          <div
                            className="col-lg-12 col-md-12 col-sm-12 pb-2 pt-3"
                          >
                            <p
                              className="card-text text-center"
                              style={styles.textTitleCard}
                            >
                              Fácil de integrar
                            </p>
                          </div>
                          <SvgCode
                            width={width > breakpoint && width < breakpointT
                              ? 60
                              : 150}
                            height={width > breakpoint && width < breakpointT
                              ? 35
                              : 70}
                          />
                          <div className="col-lg-12 col-md-12 col-sm-12 pt-2">
                            <p className="card-text" style={styles.textCard}>
                              APIs REST simples de usar, compatibles con
                              cualquier plataforma mobile o web.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Bounce>
                </div>
                <div
                  className="col-lg-4 col-md-4 col-sm-4"
                  style={{
                    paddingLeft: width < breakpoint ? "15%" : "",
                    paddingRight: width < breakpoint ? "15%" : "",
                  }}
                >
                  <Bounce bottom>
                    <div className="card" style={styles.cardMidle}>
                      <div className="card-body mb-3">
                        <div className="row">
                          <div
                            className="col-lg-12 col-md-12 col-sm-12 pb-1 pt-2"
                          >
                            <p
                              className="card-text text-center"
                              style={styles.textTitleCard}
                            >
                              Firma embebida
                            </p>
                          </div>
                          <SvgPC
                            width={width > breakpoint && width < breakpointT
                              ? 77
                              : 180}
                            height={width > breakpoint && width < breakpointT
                              ? 46
                              : 90}
                          />
                          <div className="col-lg-12 col-md-12 col-sm-12 pt-2">
                            <p className="card-text" style={styles.textCard}>
                              Es posible firmar pocesos por medio de su
                              aplicativo o através de DecSigner.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Bounce>
                </div>
                <div
                  className="col-lg-4 col-md-4 col-sm-4"
                  style={{
                    paddingLeft: width < breakpoint ? "15%" : "",
                    paddingRight: width < breakpoint ? "15%" : "",
                  }}
                >
                  <Bounce bottom>
                    <div className="card" style={styles.firstCard}>
                      <div className="card-body mb-3">
                        <div className="row">
                          <div
                            className="col-lg-12 col-md-12 col-sm-12 pb-1 pt-2"
                          >
                            <p
                              className="card-text text-center"
                              style={styles.textTitleCard}
                            >
                              APIs Seguras
                            </p>
                          </div>
                          <SvgLock
                            width={width > breakpoint && width < breakpointT
                              ? 77
                              : 180}
                            height={width > breakpoint && width < breakpointT
                              ? 46
                              : 90}
                          />
                          <div className="col-lg-12 col-md-12 col-sm-12 pt-1">
                            <p className="card-text" style={styles.textCard}>
                              APIs con los estándares de seguridad más altos de
                              la industria.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Bounce>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="dev-box"
          style={{ marginTop: width < breakpoint ? "" : "10rem" }}
        >
          {width < breakpoint
            ? <div
              className="col-lg-12 col-md-12 col-sm-12 box-container mt-4"
              style={{
                ...styles.backgroundBoxContainer,
                paddingLeft: width < breakpoint ? "20px" : "60px",
                paddingRight: width < breakpoint ? "20px" : "60px",
                top: width < breakpoint ? "-230px" : "",
                backgroundImage: width < breakpoint ? "" : "",
              }}
            >
              <div className="row mt-10">
                {width < breakpoint
                  ? <img
                    src={arrowResponsive}
                    style={{ marginTop: "40%" }}
                    alt=""
                  />
                  : ""}
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <LightSpeed right>
                    <div
                      className="text-center text-lg-center"
                    >
                      <h1
                        className="text-left"
                        style={{
                          ...styles.textSecondTitle,
                          fontSize: width < breakpoint ? "20px" : "",
                        }}
                      >
                        Potencia tu sistema o aplicación integrando Dec en tu
                        flujos
                      </h1>
                      <p
                        className="text-left  pt-3"
                        style={{
                          ...styles.textSecondSubTitle,
                          fontSize: width < breakpoint ? "16px" : "",
                          marginRight: "0px !important",
                        }}
                      >
                        Genera procesos, envía notificaciones a
                        tus{width < breakpoint ? <br /> : ""}
                        usuarios, crea firmas y más.<br />
                        Todas las características de Dec y Easy Sign a
                        tu{width < breakpoint ? <br /> : ""}{" "}
                        alcance con las más potentes APIs Rest.
                      </p>
                    </div>
                  </LightSpeed>
                </div>
                <div
                  className="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                  style={{
                    paddingLeft: "20px",
                    paddingTop: width < breakpoint ? "20px" : "",
                    marginLeft: width < breakpoint ? "20%" : "",
                  }}
                >
                  <LightSpeed left>
                    <img
                      src={imagenLeft}
                      alt=""
                      style={{
                        width: width < breakpoint ? "90%" : "100%",
                        display: width < breakpoint ? "block" : "",
                        marginLeft: width < breakpoint ? "auto" : "",
                        marginRight: width < breakpoint ? "auto" : "",
                      }}
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            : (width > breakpoint && width < breakpointT
              ? <div
                className="col-lg-12 col-md-12 col-sm-12 box-container mt-4"
                style={{
                  ...styles.backgroundBoxContainer,
                  paddingLeft: width < breakpoint ? "20px" : "60px",
                  paddingRight: width < breakpoint ? "20px" : "60px",
                  top: width < breakpoint ? "-230px" : "",
                  backgroundImage: width < breakpoint ? "" : "",
                }}
              >
                <div className="row mt-10">
                  {width < breakpoint
                    ? <img
                      src={arrowResponsive}
                      style={{ marginTop: "40%" }}
                      alt=""
                    />
                    : ""}
                  <div
                    className="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                    style={{
                      paddingLeft: "20px",
                      paddingTop: width < breakpoint ? "20px" : "",
                      marginLeft: width < breakpoint ? "20%" : "",
                    }}
                  >
                    <LightSpeed left>
                      <img
                        src={imagenLeft}
                        alt=""
                        style={{
                          width: width < breakpoint ? "90%" : "100%",
                          display: width < breakpoint ? "block" : "",
                          marginLeft: width < breakpoint ? "auto" : "",
                          marginRight: width < breakpoint ? "auto" : "",
                        }}
                      />
                    </LightSpeed>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                    <LightSpeed right>
                      <div
                        className="text-center text-lg-center"
                      >
                        <h1
                          className="text-left"
                          style={{
                            ...styles.textSecondTitle,
                            fontSize: width > breakpoint && width < breakpointT
                              ? "20px"
                              : "",
                          }}
                        >
                          Potencia tu sistema o aplicación integrando Dec en tu
                          flujos
                        </h1>
                        <p
                          className="text-left text pt-3"
                          style={{
                            ...styles.textSecondSubTitle,
                            fontSize: width > breakpoint && width < breakpointT
                              ? "14px"
                              : "",
                            fontWeight: "bold",
                          }}
                        >
                          Genera procesos, envía notificaciones a tus<br />{" "}
                          usuarios, crea firmas y más.<br />{"  "}
                          Todas las características de Dec y Easy Sign a
                          tu<br />{"  "}alcance con las más potentes APIs Rest.
                        </p>
                      </div>
                    </LightSpeed>
                  </div>
                </div>
              </div>
              : <div
                className="col-lg-12 col-md-12 col-sm-12 box-container mt-4"
                style={{
                  ...styles.backgroundBoxContainer,
                  paddingLeft: width < breakpoint ? "20px" : "60px",
                  paddingRight: width < breakpoint ? "20px" : "60px",
                  top: width < breakpoint ? "-230px" : "",
                  backgroundImage: width < breakpoint ? "" : "",
                }}
              >
                <div className="row mt-10">
                  {width < breakpoint
                    ? <img
                      src={arrowResponsive}
                      style={{ marginTop: "40%" }}
                      alt=""
                    />
                    : ""}
                  <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                    <LightSpeed right>
                      <div
                        className="text-center text-lg-center"
                      >
                        <h1
                          className="text-left"
                          style={{
                            ...styles.textSecondTitle,
                            fontSize: width > breakpoint && width < breakpointT
                              ? "20px"
                              : "",
                          }}
                        >
                          Potencia tu sistema o aplicación integrando Dec en tu
                          flujos
                        </h1>
                        <p
                          className="text-left text pt-3"
                          style={{
                            ...styles.textSecondSubTitle,
                            fontSize: width > breakpoint && width < breakpointT
                              ? "14px"
                              : "",
                          }}
                        >
                          Genera procesos, envía notificaciones a
                          tus{width < breakpoint ? <br /> : ""}{" "}
                          usuarios, crea firmas y más.<br />
                          Todas las características de Dec y Easy
                          Sign{width < breakpoint ? <br /> : ""}{" "}
                          a tu alcance con las más potentes APIs Rest.
                        </p>
                      </div>
                    </LightSpeed>
                  </div>
                  <div
                    className="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                    style={{
                      paddingLeft: "20px",
                      paddingTop: width < breakpoint ? "20px" : "",
                      marginLeft: width < breakpoint ? "20%" : "",
                    }}
                  >
                    <LightSpeed left>
                      <img
                        src={imagenLeft}
                        alt=""
                        style={{
                          width: width < breakpoint ? "90%" : "100%",
                          display: width < breakpoint ? "block" : "",
                          marginLeft: width < breakpoint ? "auto" : "",
                          marginRight: width < breakpoint ? "auto" : "",
                        }}
                      />
                    </LightSpeed>
                  </div>
                </div>
              </div>)}
        </div>
      </div>
    </div>
  );
};
