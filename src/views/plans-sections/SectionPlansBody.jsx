import React, { useState } from "react";
import {Link} from "react-router-dom";
import { Fade, Slide } from "react-reveal";
import arrowRight from "../../assets/img/section-plans/arrow-left-footer-plans.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import arrowLeft from "../../assets/img/section-plans/arrow-right-mobile.png";
import useViewport from "../../components/GridResponsive/ViewResponsive";
export const SectionPlansBody = () => {
  const { width, breakpoint, breakpointT } = useViewport();
  const [openBusiness, setOpenBusiness] = useState(false);
  const [openEnterprise, setOpenEnterprise] = useState(false);
  const [openPlatinum, setOpenPlatinum] = useState(false);
  const [openPersonalizate, setOpenPersonalizate] = useState(false);
  const styles = {
    card: {
      minHeight: "390px",
    },
    firstHeaderCard: {
      backgroundImage:
        "linear-gradient(to right, #19a87e 0%, #19a87e 3.0000000000000004%, #45416f 100%)",
      color: "#FFF",
      padding: "29px 29px 29px 29px",
      fontSize: "20px",
      minHeight: "126px",
      borderRadius: "10px 10px 0px 0px",
      fontWeight: "bold",
    },
    headerCard: {
      background: "#1bb482",
      color: "#FFF",
      padding: "45px 29px 35px 29px",
      fontSize: "20px",
      minHeight: "126px",
      borderRadius: "10px 10px 0px 0px",
      fontWeight: "bold",
    },
    buttonGreen: {
      fontFamily: "MYRIADPRO,  sans-serif",
      background: "#29B383",
      cursor: "pointer",
      color: "#fff",
      borderRadius: "50px",
      border: "0px",
      padding: "10px 30px 10px 30px",
      textDecoration: 'none'
    },
    buttonBlue: {
      fontFamily: "MYRIADPRO,  sans-serif",
      background: "#3D4975",
      cursor: "pointer",
      color: "#fff",
      borderRadius: "50px",
      border: "0px",
      padding: "10px 30px 10px 30px",
      textDecoration: 'none'
    },
    textTitleCard: {
      color: "#3B457A",
      marginBottom: "0px",
      fontSize: "34px",
      fontfamily: "MYRIADPRO,  sans-serif",
    },
    textTitleCard2: {
      color: "#3B457A",
      marginBottom: "0px",
      fontSize: "34px",
      fontfamily: "MYRIADPRO,  sans-serif",
    },
    hrPer: {
      borderTop: "1px solid #808080",
      width: "60%",
      marginTop: "0px",
      marginBottom: "0px",
      padding: "0px",
    },
    secondTextPrice: {
      paddingTop: "5px",
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      color: "#808080",
      fontfamily: "MYRIADPRO,  sans-serif",
      fontSize: "16px",
      fontWeight: "bold",
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      marginBottom: "0px",
      marginTop: "0px",
    },
    textSearchPlan: {
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      color: "#1bb482",
      fontfamily: "MYRIADPRO,  sans-serif",
      fontSize: "20px",
      fontWeight: "bold",
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
    },
    secondTextPlan: {
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      color: "#3a436d",
      fontfamily: "MYRIADPRO,  sans-serif",
      fontSize: "14px",
      fontWeight: "bold",
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
    },
    textNumberPlan: {
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      color: "#3a436d",
      fontfamily: "MYRIADPRO,  sans-serif",
      fontSize: "16px",
      fontWeight: "bold",
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      marginBottom: "0px",
    },
    cardFooterPer: {
      background: "white",
      border: "0px",
    },
    borderColorCardBodyGreen: {
      borderLeft: "1px solid #1bb482",
      borderRight: "1px solid #1bb482",
    },
    borderColorCardFooterGreen: {
      borderLeft: "1px solid #1bb482",
      borderRight: "1px solid #1bb482",
      borderBottom: "1px solid #1bb482",
      borderRadius: "0px 0px 10px 10px",
    },

    borderColorCardBodyBlue: {
      borderLeft: "1px solid #3a436d",
      borderRight: "1px solid #3a436d",
    },
    borderColorCardFooterBlue: {
      borderLeft: "1px solid #3a436d",
      borderRight: "1px solid #3a436d",
      borderBottom: "1px solid #3a436d",
      borderRadius: "0px 0px 10px 10px",
    },
    textSecondInSecondCard: {
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      color: "#3a436d",
      fontfamily: "MYRIADPRO,  sans-serif",
      fontSize: "16px",
      lineHeight: "1.5",
      marginBottom: "0px",
    },
    textSeparate: {
      padding: "15px 10px 20px 10px",
      borderBottom: "1px solid #3a436d",
      color: "#3a436d",
    },
    backgroundAll: {
      width: "100%",
      position: "relative",
      overflow: "hidden",
      padding: "0px 0 0px 0",
      background: "-webkit-linear-gradient(160deg, white 40%, #efefef 40%)",
      background: "-o-linear-gradient(160deg, white 40%, #efefef 40%)",
      background: "-moz-linear-gradient(160deg, white 40%, #efefef 40%)",
      background: "linear-gradient(160deg, white 40%, #efefef 40%)",
    },
    textBottom: {
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      color: "#3a436d",
      fontfamily: "MYRIADPRO,  sans-serif",
      fontSize: "35px",
      fontWeight: "bold",
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
    },
    buttonFooter: {
      fontFamily: "MYRIADPRO,  sans-serif",
      background: "#29b181",
      fontSize: "30px",
      cursor: "pointer",
      color: "#fff",
      borderRadius: "50px",
      border: "0px",
      padding: "15px 30px 15px 30px",
      marginTop: "20px",
      textDecoration: 'none'
    },
  };
  return (
    <div className="container-fluid" style={styles.backgroundAll}>
      <div className="row mb-5">
        <Fade bottom>
          <div className="col-lg-11 col-md-11 col-sm-11 mx-auto">
            <div className="row">
              <div
                className={width > breakpoint && width < breakpointT
                  ? "col-md col-sm-12 mb-3"
                  : "col-md col-sm-12"}
                style={{
                  paddingLeft: width < breakpoint ? "40px" : "",
                  paddingRight: width < breakpoint ? "40px" : "",
                  marginBottom: width < breakpoint ? "30px" : "",
                }}
              >
                <div className="card" style={styles.card}>
                  <div
                    className="card-header text-center"
                    style={{
                      ...styles.firstHeaderCard,
                      fontWeight: width < breakpoint ? "bold" : "bold",
                      fontSize: width < breakpoint ? "22px" : "20px",
                      lineHeight: width < breakpoint ? "1" : "",
                    }}
                  >
                    Cuenta{width < breakpoint ? <br /> : <br />} Developer
                    {width < breakpoint
                      ? <div>
                        <p
                          className="card-title mt-5 mb-5"
                          style={{ ...styles.textTitleCard, color: "white" }}
                        >
                          GRATIS
                        </p>

                        <Link
                          to={process.env.REACT_APP_BTN_COMENZAR}
                          className="btn btn-primary mt-auto"
                          style={styles.buttonGreen}
                        >
                          Comenzar
                        </Link>
                      </div>
                      : ""}
                  </div>
                  {width < breakpoint ? "" : <div>
                    <div
                      className="card-body text-center"
                      style={styles.borderColorCardBodyGreen}
                    >
                      <p
                        className="card-title mt-5 mb-5"
                        style={styles.textTitleCard}
                      >
                        GRATIS
                      </p>
                    </div>
                    <div
                      className="card-footer text-center"
                      style={{
                        ...styles.cardFooterPer,
                        ...styles.borderColorCardFooterGreen,
                      }}
                    >
                      <Link
                        to={process.env.REACT_APP_BTN_COMENZAR}
                        className="btn btn-primary mt-auto"
                        style={styles.buttonGreen}
                      >
                        Comenzar
                      </Link>
                    </div>
                  </div>}

                  <div
                    className="card-body text-center"
                    style={{
                      border: "1px solid #1bb482",
                      borderRadius: width < breakpoint
                        ? "0px 0px 10px 10px"
                        : "10px",
                      marginTop: width < breakpoint ? "0px" : "1.5rem",
                    }}
                  >
                    <p
                      className="card-title mt-3 mb-3"
                      style={styles.textSecondInSecondCard}
                    >
                      La cuenta Developer gratuita te permite probar tus APIs
                      GRATIS, no expira, y tiene todas las features habilitadas
                      de un plan platinum. Para salir a producción con tu
                      solución, necesitas una cuenta API para que satisfaga tus
                      necesidades. También puedes iniciar directamente con
                      cualquiera de nuestros planes pagos, en los cuales tienes
                      un trial de 15 días para realizar tu integración.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={width > breakpoint && width < breakpointT
                  ? "col-md col-sm-12 mb-3"
                  : "col-md col-sm-12"}
                style={{
                  paddingLeft: width < breakpoint ? "40px" : "",
                  paddingRight: width < breakpoint ? "40px" : "",
                  marginBottom: width < breakpoint ? "30px" : "",
                }}
              >
                <div
                  className="card"
                  style={{
                    ...styles.card,
                    minHeight: width < breakpoint ? "100px" : "390px",
                  }}
                >
                  <div
                    className="card-header text-center"
                    style={{
                      ...styles.headerCard,
                      padding: width < breakpoint ? "10px" : "45px 29px 35px",
                    }}
                  >
                    API Business
                    {width < breakpoint
                      ? <div>
                        <p
                          className="card-title"
                          style={{ ...styles.textTitleCard2, color: "white" }}
                        >
                          $45/mes
                        </p>
                        <hr
                          style={{
                            ...styles.hrPer,
                            borderTop: "1px solid #ffffff",
                            width: "40%",
                          }}
                        />
                        <p
                          style={{ ...styles.secondTextPrice, color: "white" }}
                          className="mb-4"
                        >
                          $540 al año
                        </p>
                        <Link
                          to={process.env.REACT_APP_BTN_COMPRAR_AHORA}
                          className="btn btn-primary"
                          style={{
                            ...styles.buttonBlue,
                            padding: "4px 20px 4px 20px",
                          }}
                        >
                          Comprar Ahora
                        </Link>
                      </div>
                      : ""}
                  </div>
                  {width < breakpoint ? "" : <div>
                    <div
                      className="card-body text-center"
                      style={styles.borderColorCardBodyBlue}
                    >
                      <p
                        className="card-title mt-5"
                        style={styles.textTitleCard2}
                      >
                        $45/mes
                      </p>
                      <hr style={styles.hrPer} />
                      <p style={styles.secondTextPrice} className="mb-4">
                        $540 al año
                      </p>
                    </div>
                    <div
                      className="card-footer text-center"
                      style={{
                        ...styles.cardFooterPer,
                        ...styles.borderColorCardFooterBlue,
                      }}
                    >
                      <Link
                        to={process.env.REACT_APP_BTN_COMPRAR_AHORA}
                        className="btn btn-primary"
                        style={styles.buttonBlue}
                      >
                        Comprar Ahora
                      </Link>
                    </div>
                  </div>}

                  <div
                    className="card-body text-center"
                    style={{
                      border: "1px solid #3a436d",

                      paddingLeft: "0px",
                      paddingRight: "0px",
                      paddingBottom: "0px",
                      borderRadius: width < breakpoint ? "0px 0px 10px 10px"
                      : "10px",
                      marginTop: width < breakpoint ? "0px" : "1.5rem",
                    }}
                  >
                    <div
                      style={{ marginBottom: width < breakpoint ? "" : "1rem" }}
                    >
                      <p
                        className="card-title"
                        style={styles.textSeparate}
                      >
                        100 procesos por año
                      </p>
                      {width < breakpoint
                        ? <p
                          className="card-title"
                          style={{
                            ...styles.textSeparate,
                            color: "#1bb581",
                            fontSize: "16px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            borderBottom: !openBusiness ? "0px"
                            : "1px solid rgb(58, 67, 109)",
                            marginBottom: !openBusiness ? "0px" : ".75rem",
                          }}
                          onClick={() => setOpenBusiness(!openBusiness)}
                        >
                          Ver funciones{" "}
                          {!openBusiness ? <FaAngleUp /> : <FaAngleDown />}
                        </p>
                        : ""}

                      <div
                        style={{
                          display: !openBusiness && width < breakpoint
                            ? "none"
                            : "block",
                        }}
                      >
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          Storage de 50 GB
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          Seguridad ISO 27.001
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          Widget personalizado de aceptación simple
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          Dashboard de control
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          DecSigner
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          PIN de seguridad en visualización
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          API de consulta de procesos
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          Compatibilidad con firma acreditada
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          API de firma simple: Creación y firmado
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          Retroalimentación de procesos en tiempo real
                        </p>
                        <p
                          className="card-title"
                          style={{
                            ...styles.textSeparate,
                            marginBottom: "0px",
                            borderBottom: "0px",
                          }}
                        >
                          Documentación API disponible 24/7
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={width > breakpoint && width < breakpointT
                  ? "col-md col-sm-12 mb-3"
                  : "col-md col-sm-12"}
                style={{
                  paddingLeft: width < breakpoint ? "40px" : "",
                  paddingRight: width < breakpoint ? "40px" : "",
                  marginBottom: width < breakpoint ? "30px" : "",
                }}
              >
                <div
                  className="card"
                  style={{
                    ...styles.card,
                    minHeight: width < breakpoint ? "100px" : "390px",
                  }}
                >
                  <div
                    className="card-header text-center"
                    style={{
                      ...styles.headerCard,
                      padding: width < breakpoint ? "10px" : "45px 29px 35px",
                    }}
                  >
                    API Enterprise
                    {width < breakpoint
                      ? <div>
                        <p
                          className="card-title"
                          style={{ ...styles.textTitleCard2, color: "white" }}
                        >
                          $195/mes
                        </p>
                        <hr
                          style={{
                            ...styles.hrPer,
                            borderTop: "1px solid #ffffff",
                            width: "40%",
                          }}
                        />
                        <p
                          style={{ ...styles.secondTextPrice, color: "white" }}
                          className="mb-4"
                        >
                          $2340 al año
                        </p>
                        <Link
                         to={process.env.REACT_APP_BTN_COMPRAR_AHORA}
                          className="btn btn-primary"
                          style={{
                            ...styles.buttonBlue,
                            padding: "4px 20px 4px 20px",
                          }}
                        >
                          Comprar Ahora
                        </Link>
                      </div>
                      : ""}
                  </div>
                  {width < breakpoint ? "" : <div>
                    <div
                      className="card-body text-center"
                      style={styles.borderColorCardBodyBlue}
                    >
                      <p
                        className="card-title mt-5"
                        style={styles.textTitleCard2}
                      >
                        $195/mes
                      </p>
                      <hr style={styles.hrPer} />
                      <p style={styles.secondTextPrice} className="mb-4">
                        $2340 al año
                      </p>
                    </div>
                    <div
                      className="card-footer text-center"
                      style={{
                        ...styles.cardFooterPer,
                        ...styles.borderColorCardFooterBlue,
                      }}
                    >
                      <Link
                         to={process.env.REACT_APP_BTN_COMPRAR_AHORA}
                        className="btn btn-primary"
                        style={styles.buttonBlue}
                      >
                        Comprar Ahora
                      </Link>
                    </div>
                  </div>}

                  <div
                    className="card-body text-center"
                    style={{
                      border: "1px solid #3a436d",

                      paddingLeft: "0px",
                      paddingRight: "0px",
                      paddingBottom: "0px",
                      borderRadius: width < breakpoint ? "0px 0px 10px 10px"
                      : "10px",
                      marginTop: width < breakpoint ? "0px" : "1.5rem",
                    }}
                  >
                    <div
                      style={{ marginBottom: width < breakpoint ? "" : "1rem" }}
                    >
                      <p
                        className="card-title"
                        style={styles.textSeparate}
                      >
                        3000 procesos por año
                      </p>
                      {width < breakpoint
                        ? <p
                          className="card-title"
                          style={{
                            ...styles.textSeparate,
                            color: "#1bb581",
                            fontSize: "16px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            borderBottom: !openEnterprise ? "0px"
                            : "1px solid rgb(58, 67, 109)",
                            marginBottom: !openEnterprise ? "0px" : ".75rem",
                          }}
                          onClick={() => setOpenEnterprise(!openEnterprise)}
                        >
                          Ver funciones{" "}
                          {!openEnterprise ? <FaAngleUp /> : <FaAngleDown />}
                        </p>
                        : ""}

                      <div
                        style={{
                          display: !openEnterprise && width < breakpoint
                            ? "none"
                            : "block",
                        }}
                      >
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          Storage de 100 GB
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          Seguridad ISO 27.001
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          Widget personalizado de aceptación simple
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          Dashboard de control
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          DecSigner
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          PIN de seguridad en visualización
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          API de consulta de procesos
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          Compatibilidad con firma acreditada
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          API de firma simple: Creación y firmado
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          Retroalimentación de procesos en tiempo real
                        </p>
                        <p
                          className="card-title"
                          style={{
                            ...styles.textSeparate,
                            marginBottom: "0px",
                            borderBottom: "0px",
                          }}
                        >
                          Documentación API disponible 24/7
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md col-sm-12"
                style={{
                  paddingLeft: width < breakpoint ? "40px" : "",
                  paddingRight: width < breakpoint ? "40px" : "",
                  marginBottom: width < breakpoint ? "30px" : "",
                }}
              >
                <div
                  className="card"
                  style={{
                    ...styles.card,
                    minHeight: width < breakpoint ? "100px" : "390px",
                  }}
                >
                  <div
                    className="card-header text-center"
                    style={{
                      ...styles.headerCard,
                      padding: width < breakpoint ? "10px" : "45px 29px 35px",
                    }}
                  >
                    API Platinum
                    {width < breakpoint
                      ? <div>
                        <p
                          className="card-title"
                          style={{ ...styles.textTitleCard2, color: "white" }}
                        >
                          $295/mes
                        </p>
                        <hr
                          style={{
                            ...styles.hrPer,
                            borderTop: "1px solid #ffffff",
                            width: "40%",
                          }}
                        />
                        <p
                          style={{ ...styles.secondTextPrice, color: "white" }}
                          className="mb-4"
                        >
                          $3540 al año
                        </p>
                        <Link
                         to={process.env.REACT_APP_BTN_COMPRAR_AHORA}
                          className="btn btn-primary"
                          style={{
                            ...styles.buttonBlue,
                            padding: "4px 20px 4px 20px",
                          }}
                        >
                          Comprar Ahora
                        </Link>
                      </div>
                      : ""}
                  </div>
                  {width < breakpoint ? "" : <div>
                    <div
                      className="card-body text-center"
                      style={styles.borderColorCardBodyBlue}
                    >
                      <p
                        className="card-title mt-5"
                        style={styles.textTitleCard2}
                      >
                        $295/mes
                      </p>
                      <hr style={styles.hrPer} />
                      <p style={styles.secondTextPrice} className="mb-4">
                        $3540 al año
                      </p>
                    </div>
                    <div
                      className="card-footer text-center"
                      style={{
                        ...styles.cardFooterPer,
                        ...styles.borderColorCardFooterBlue,
                      }}
                    >
                      <Link
                        to={process.env.REACT_APP_BTN_COMPRAR_AHORA}
                        className="btn btn-primary"
                        style={styles.buttonBlue}
                      >
                        Comprar Ahora
                      </Link>
                    </div>
                  </div>}

                  <div
                    className="card-body text-center"
                    style={{
                      border: "1px solid #3a436d",

                      paddingLeft: "0px",
                      paddingRight: "0px",
                      paddingBottom: "0px",
                      borderRadius: width < breakpoint ? "0px 0px 10px 10px"
                      : "10px",
                      marginTop: width < breakpoint ? "0px" : "1.5rem",
                    }}
                  >
                    <div
                      style={{ marginBottom: width < breakpoint ? "" : "1rem" }}
                    >
                      <p
                        className="card-title"
                        style={styles.textSeparate}
                      >
                        5000 procesos por año
                      </p>
                      {width < breakpoint
                        ? <p
                          className="card-title"
                          style={{
                            ...styles.textSeparate,
                            color: "#1bb581",
                            fontSize: "16px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            borderBottom: !openPlatinum ? "0px"
                            : "1px solid rgb(58, 67, 109)",
                            marginBottom: !openPlatinum ? "0px" : ".75rem",
                          }}
                          onClick={() => setOpenPlatinum(!openPlatinum)}
                        >
                          Ver funciones{" "}
                          {!openPlatinum ? <FaAngleUp /> : <FaAngleDown />}
                        </p>
                        : ""}

                      <div
                        style={{
                          display: !openPlatinum && width < breakpoint
                            ? "none"
                            : "block",
                        }}
                      >
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          Storage de 200 GB
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          Seguridad ISO 27.001
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          Widget personalizado de aceptación simple
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          Dashboard de control
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          DecSigner
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          PIN de seguridad en visualización
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          API de consulta de procesos
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          Compatibilidad con firma acreditada
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          API de firma simple: Creación y firmado
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          Retroalimentación de procesos en tiempo real
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          Documentación API disponible 24/7
                        </p>
                        <p
                          className="card-title"
                          style={styles.textSeparate}
                        >
                          Creación de firmas para persona jurídica
                        </p>
                        <p
                          className="card-title"
                          style={{
                            ...styles.textSeparate,
                            marginBottom: "0px",
                            borderBottom: "0px",
                          }}
                        >
                          Customer Care representative
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md col-sm-12"
                style={{
                  paddingLeft: width < breakpoint ? "40px" : "",
                  paddingRight: width < breakpoint ? "40px" : "",
                  marginBottom: width < breakpoint ? "30px" : "",
                  borderRadius: width < breakpoint ? "0px 0px 10px 10px"
                  : "10px",
                }}
              >
                <div
                  className="card"
                  style={{
                    ...styles.card,
                    minHeight: width < breakpoint ? "100px" : "390px",
                  }}
                >
                  <div
                    className="card-header text-center"
                    style={{
                      ...styles.headerCard,
                      padding: width < breakpoint ? "10px" : "45px 29px 35px",
                    }}
                  >
                    Personalizado
                    {width < breakpoint
                      ? <div>
                        <p
                          className="card-title"
                          style={{
                            ...styles.textSearchPlan,
                            color: "white",
                            fontSize: "16px",
                            marginTop: width < breakpoint ? "18px" : "",
                          }}
                        >
                          ¿Buscas un Plan<br /> personalizado?
                        </p>
                        <Link
                           to={process.env.REACT_APP_BTN_CONTACTANOS}
                          className="btn btn-primary"
                          style={{
                            ...styles.buttonBlue,
                            padding: "4px 20px 4px 20px",
                          }}
                        >
                          Contáctanos
                        </Link>
                      </div>
                      : ""}
                  </div>
                  <div
                    className="card-body text-center "
                    style={styles.borderColorCardBodyBlue}
                  >
                    {width < breakpoint ? "" : <p
                      className="card-title"
                      style={{ ...styles.textSearchPlan }}
                    >
                      ¿Buscas un Plan personalizado?
                    </p>}
                    <p
                      className="card-title"
                      style={{
                        ...styles.secondTextPlan,
                        marginBottom: width < breakpoint ? "0px" : "",
                      }}
                    >
                      ¿Tienes más inquietudes?
                    </p>
                    <p
                      className="card-title"
                      style={{
                        ...styles.secondTextPlan,
                        marginBottom: width < breakpoint ? "10px" : "1.5rem",
                      }}
                    >
                      ¡Llamanos!
                    </p>
                    <p
                      style={{
                        ...styles.textNumberPlan,
                        fontSize: width < breakpoint ? "16px" : "14px",
                        marginBottom: width < breakpoint ? "0px" : "",
                      }}
                    >
                      (02) 394-7210
                    </p>
                  </div>
                  {width < breakpoint ? "" : <div
                    className="card-footer text-center"
                    style={{
                      ...styles.cardFooterPer,
                      ...styles.borderColorCardFooterBlue,
                    }}
                  >
                    <Link
                       to={process.env.REACT_APP_BTN_CONTACTANOS}
                      className="btn btn-primary"
                      style={styles.buttonGreen}
                    >
                      Contáctanos
                    </Link>
                  </div>}

                  <div
                    className="card-body text-center"
                    style={{
                      border: "1px solid #3a436d",
                      paddingLeft: "0px",
                      paddingRight: "0px",
                      paddingBottom: "0px",
                      marginTop: width < breakpoint ? "0px" : "1.5rem",
                      borderRadius: width < breakpoint ? "0px 0px 10px 10px"
                      : "10px",
                    }}
                  >
                    <div className="mb-3">
                      {width < breakpoint
                        ? <p
                          className="card-title"
                          style={{
                            ...styles.textSeparate,
                            color: "#1bb581",
                            fontSize: "16px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            borderBottom: !openPersonalizate ? "0px"
                            : "1px solid rgb(58, 67, 109)",

                            marginBottom: !openPersonalizate ? "0px" : ".75rem",
                          }}
                          onClick={() =>
                            setOpenPersonalizate(!openPersonalizate)}
                        >
                          Ver funciones{" "}
                          {!openPersonalizate ? <FaAngleUp /> : <FaAngleDown />}
                        </p>
                        : ""}
                      <div
                        style={{
                          display: !openPersonalizate && width < breakpoint
                            ? "none"
                            : "block",
                        }}
                      >
                        <p
                          className="card-title"
                          style={{
                            ...styles.textSeparate,
                            fontSize: "15px",
                            paddingLeft: "17px",
                            paddingRight: "17px",
                            paddingBottom: "25px",
                          }}
                        >
                          Nuestros ejecutivos de venta están disponibles para
                          proporcionarte información adicional sobre nuestros
                          planes existentes, y recomendarte el que se adapte
                          mejor a tus flujos de negocio.
                        </p>
                        <p
                          className="card-title"
                          style={{
                            ...styles.textSeparate,
                            marginBottom: "0px",
                            borderBottom: "0px",
                            fontSize: "14px",
                            paddingLeft: "17px",
                            paddingRight: "17px",
                          }}
                        >
                          <strong>Arma el plan a tu medida:</strong>
                          <br />
                          Dec puede ser personalizado a la cantidad de Storage y
                          procesos que necesites llevar anualmente.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      {width < breakpoint
        ? <div className="row">
          <Slide right>
            <div
              className={"col-lg-" + width < breakpoint ? "12" : "5" + ""}
              style={{
                paddingLeft: width < breakpoint ? "30px" : "",
                marginBottom: width < breakpoint ? "" : "3rem",
              }}
            >
              <div className="col-lg-12 mx-auto mb-3">
                <p
                  style={{
                    ...styles.textBottom,
                    fontSize: width < breakpoint ? "18px" : "45px",
                    fontWeight: "bold",
                  }}
                >
                  El plan ideal para tí, al{width < breakpoint ? <br /> : ""}
                  {" "}
                  mejor precio.
                </p>
                <p
                  className="p-footer text-left"
                  style={{
                    color: "#3a436d",
                    marginBottom: "0px",
                    fontSize: width < breakpoint ? "12px" : "18px",
                    fontWeight: "400",
                  }}
                >
                  Hay una versión de Dec que se ajusta{width < breakpoint
                    ? <br /> : ""} a tus necesidades y a tu presupuesto.
                </p>
                <p
                  className="p-footer text-left mb-5"
                  style={{
                    color: "#3a436d",
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  ¿Aún no sabes cuál elegir?, comienza{width < breakpoint
                    ? <br />
                    : ""} con tu prueba gratis.
                </p>
                {width < breakpoint ? "" : <Link
                   to={process.env.REACT_APP_BTN_COMIENZA_GRATIS}
                 href="#"
                  style={styles.buttonFooter}
                >
                  Comenzar Gratis
                </Link>}
              </div>
            </div>
            {width < breakpoint ? "" : <div className="col-lg-7">
              <img
                src={arrowRight}
                className="img-fluid"
                style={{ width: "100%" }}
                alt=""
              />
            </div>}
            {width < breakpoint
              ? <div className="col-lg-12 mb-3" style={{ marginLeft: "30px" }}>
                <div className="row">
                  <div className="col-6">
                    <a
                      href="#"
                      style={{
                        ...styles.buttonFooter,
                        fontSize: "15px",
                        padding: "7px 15px 7px 15px",
                      }}
                    >
                      Comenzar Gratis
                    </a>
                  </div>
                  <div
                    className="col-6"
                    style={{ paddingTop: "30px", paddingLeft: "50px" }}
                  >
                    <img
                      src={arrowLeft}
                      style={{ width: "90%" }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              : ""}
          </Slide>
        </div>
        : <div className="row">
          <Slide right>
            <div
              className={width > breakpoint && width < breakpointT
                ? "col-sm-12 col-md-12 col-lg-12 mb-2"
                : "col-sm-5 col-md-5 col-lg-5 mb-5"}
            >
              <div
                className={width > breakpoint && width < breakpointT
                  ? "col-sm-12 col-md-12 col-lg-12 pl-4"
                  : "col-sm-10 col-md-10 col-lg-10 mx-auto mb-3"}
              >
                <p
                  style={{
                    ...styles.textBottom,
                    fontSize: width > breakpoint && width < breakpointT
                      ? "18px"
                      : "",
                  }}
                >
                  El plan ideal para tí, al mejor precio.
                </p>
                <p
                  className="p-footer text-left"
                  style={{
                    color: "#3a436d",
                    marginBottom: "0px",
                    fontSize: width > breakpoint && width < breakpointT
                      ? "12px"
                      : "",
                  }}
                >
                  Hay una versión de Dec que se ajusta a tus necesidades y a tu
                  presupuesto.
                </p>
                <p
                  className="p-footer text-left mb-5"
                  style={{
                    color: "#3a436d",
                    fontSize: width > breakpoint && width < breakpointT
                      ? "12px"
                      : "",
                  }}
                >
                  ¿Aún no sabes cuál elegir?, comienza con tu prueba gratis.
                </p>
                {width > breakpoint && width < breakpointT ? "" : <Link

                to={process.env.REACT_APP_BTN_COMIENZA_GRATIS}
                  style={styles.buttonFooter}
                >
                  Comenzar Gratis
                </Link>}
              </div>
            </div>
            <div
              className={width > breakpoint && width < breakpointT
                ? "col-sm-12 col-md-12 col-lg-12"
                : "col-sm-7 col-md-7 col-lg-7"}
            >
              {width > breakpoint && width < breakpointT ? "" : <img
                src={arrowRight}
                className="img-fluid"
                style={{ width: "100%" }}
                alt=""
              />}
              {width > breakpoint && width < breakpointT
                ? <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <Link
                         to={process.env.REACT_APP_BTN_COMIENZA_GRATIS}
                        style={{
                          ...styles.buttonFooter,
                          fontSize: "15px",
                          padding: "10px 25px",
                        }}
                      >
                        Comenzar Gratis
                      </Link>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <img
                        src={arrowRight}
                        className="img-fluid"
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                : ""}
            </div>
          </Slide>
        </div>}
    </div>
  );
};
