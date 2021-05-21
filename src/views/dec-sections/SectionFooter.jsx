import React from "react";
import { Bounce, LightSpeed } from "react-reveal";
import SvgBag from "../../components/SvgSectionDec/SvgBag";
import SvgPadLock from "../../components/SvgSectionDec/SvgPadLock";
import SvgCloud from "../../components/SvgSectionDec/SvgCloud";
import backgraundFooter from "../../assets/img/section-carousel/Recurso-dec-footer.png";
import imageFooter from "../../assets/img/section-dec/text-footer.png";
import useViewport from "../../components/GridResponsive/ViewResponsive";
export const SectionFooter = () => {
  const { width, breakpoint, breakpointT } = useViewport();
  const styles = {
    backgroundColorCardBag: {
      background: "#f6f6f6",
      width: "100%",
      paddingBottom: width < breakpoint
        ? "0px"
        : (width > breakpoint && width < breakpointT ? "0px" : "50px"),
      borderWidth: "0",
      borderRadius: "20px",
      marginBottom: width < breakpoint ? "20px" : "",
    },
    textH1: {
      padding: width < breakpoint ? "0px" : "0px 30px 30px 30px",
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      color: "#3a436d",
      fontFamily: "MYRIADPRO , sans-serif",
      fontSize: width < breakpoint ? "25px"
      : (width > breakpoint && width < breakpointT ? "27px" : "45px"),
      fontWeight: "bold",
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      textAlign: width < breakpoint ? "left" : "center",
    },
    backgroundColorCardPadLock: {
      background: "#f6f6f6",
      width: "100%",
      paddingBottom: width < breakpoint ? "0px"
      : (width > breakpoint && width < breakpointT ? "0px" : "50px"),
      borderWidth: "0",
      borderRadius: "20px",
    },
    backgroundColorCardCloud: {
      background: "#f6f6f6",
      width: "100%",
      paddingBottom: width < breakpoint ? "0px"
      : (width > breakpoint && width < breakpointT ? "0px" : "40px"),
      borderWidth: "0",
      borderRadius: "20px",
    },
    textCard: {
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      color: "#3a436d",
      fontFamily: "MYRIADPROREGULAR , sans-serif",
      fontSize: width < breakpoint ? "12px"
      : (width > breakpoint && width < breakpointT ? "13px" : "18px"),
      fontWeight: "400",
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      textAlign: "left",
      paddingLeft: width > breakpoint && width < breakpointT ? "" : "50px",
      paddingRight: width > breakpoint && width < breakpointT ? "" : "50px",
    },
    textCardPadLock: {
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      color: "#3a436d",
      fontFamily: "MYRIADPROREGULAR , sans-serif",
      fontSize: width < breakpoint ? "12px"
      : (width > breakpoint && width < breakpointT ? "13px" : "18px"),
      fontWeight: "400",
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      textAlign: "left",
      paddingLeft: width > breakpoint && width < breakpointT ? "" : "40px",
      paddingRight: width > breakpoint && width < breakpointT ? "" : "40px",
    },
    textCardCloud: {
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      color: "#3a436d",
      fontFamily: "MYRIADPROREGULAR , sans-serif",
      fontSize: width < breakpoint ? "12px"
      : (width > breakpoint && width < breakpointT ? "13px" : "18px"),
      fontWeight: "400",
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      textAlign: "left",
    },
    secondText: {
      textAlign: "center",
      margin: " 0 0 10px 0",
      fontSize: width > breakpoint && width < breakpointT ? "21px" : "45px",
      fontWeight: "500",
      lineHeight: "56px",
      color: "#3E4A74",
      fontFamily: "MYRIADPRO, sans-serif",
      paddingTop: "25px",
    },
    secondTextMobile: {
      textAlign: "center",
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "56px",
      color: "#3E4A74",
      fontFamily: "MYRIADPRO, sans-serif",
      marginTop: "13px",
    },
    buttonStarted: {
      textAlign: "center",
      fontFamily: "MYRIADPRO, sans-serif",
      fontWeight: "500",
      fontSize: width < breakpoint ? "15px"
      : (width > breakpoint && width < breakpointT ? "16px" : "30px"),
      letterSpacing: "1px",
      display: "inline-block",
      padding: width < breakpoint ? "5px 20px"
      : (width > breakpoint && width < breakpointT ? "5px 20px" : "1px 20px"),
      borderRadius: "50px",
      transition: "0.5s",
      color: "#fff",
      background: "#29B383",
      cursor: "pointer",
      marginTop: width < breakpoint ? "5px" : "10px",
    },
    backgroundInReady: {
      backgroundImage: `url(${backgraundFooter})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    backgroundFooter: {
      backgroundImage: `url(${imageFooter})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <Bounce bottom>
            <h1 style={styles.textH1}>
              Dec, el portafolio{width < breakpoint ? <br /> : ""}{" "}
              digital definitivo
            </h1>
          </Bounce>
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg-4 col-md-4 col-sm-4"
          style={{
            padding: width < breakpoint ? "" : "3rem",
            marginRight: width < breakpoint ? "40px" : "",
          }}
        >
          {width < breakpoint
            ? <div
              className="card"
              style={{ ...styles.backgroundColorCardBag, paddingRight: "30px" }}
            >
              <div className="row no-gutters">
                <div className="col-6 mx-auto">
                  <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <SvgBag
                      width={150}
                      height={70}
                      mt={false}
                      mxAuto={true}
                      style={{ marginTop: "10px" }}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <p
                    className="card-text"
                    style={{
                      ...styles.textCard,
                      fontSize: "13px",
                      paddingLeft: "0px",
                      paddingRight: "0px",
                      marginTop: "25px",
                    }}
                  >
                    Todos tus procesos de<br />
                    firma electrónica en<br /> un solo lugar.
                  </p>
                </div>
              </div>
            </div>
            : <div className="card" style={styles.backgroundColorCardBag}>
              <SvgBag
                width={width > breakpoint && width < breakpointT ? 67 : 220}
                height={width > breakpoint && width < breakpointT ? 34 : 120}
                mt={true}
                mtN={width > breakpoint && width < breakpointT ? 2 : 4}
                mxAuto={true}
              />
              <div className="card-body">
                <p className="card-text" style={styles.textCard}>
                  Todos tus procesos de firma electrónica en un solo lugar.
                </p>
              </div>
            </div>}
        </div>
        <div
          className="col-lg-4 col-md-4 col-sm-4"
          style={{
            padding: width < breakpoint ? "" : "3rem",
            marginLeft: width < breakpoint ? "40px" : "",
          }}
        >
          {width < breakpoint
            ? <div
              className="card"
              style={{ ...styles.backgroundColorCardBag, paddingRight: "30px" }}
            >
              <div className="row no-gutters">
                <div className="col-7">
                  <p
                    className="card-text"
                    style={{
                      ...styles.textCard,
                      fontSize: "13px",
                      paddingLeft: "20px",
                      paddingRight: "0px",
                      marginTop: "25px",
                    }}
                  >
                    Procesos y firmas seguras con autentificación de seguridad
                    verificadas.
                  </p>
                </div>
                <div className="col-5 mx-auto">
                  <div
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      marginRight: "20px",
                    }}
                  >
                    <SvgPadLock
                      width={170}
                      height={75}
                      mt={false}
                      mxAuto={true}
                    />
                  </div>
                </div>
              </div>
            </div>
            : <div className="card" style={styles.backgroundColorCardPadLock}>
              <SvgPadLock
                width={width > breakpoint && width < breakpointT ? 67 : 220}
                height={width > breakpoint && width < breakpointT ? 34 : 120}
                mt={true}
                mtN={width > breakpoint && width < breakpointT ? 2 : 4}
                mxAuto={true}
              />
              <div className="card-body">
                <p className="card-text" style={styles.textCardPadLock}>
                  Procesos y firmas seguras con autentificación de seguridad
                  verificadas.
                </p>
              </div>
            </div>}
        </div>
        <div
          className="col-lg-4 col-md-4 col-sm-4"
          style={{
            padding: width < breakpoint ? "" : "3rem",
            marginRight: width < breakpoint ? "20px" : "",
          }}
        >
          {width < breakpoint
            ? <div
              className="card"
              style={{ ...styles.backgroundColorCardBag, paddingRight: "30px" }}
            >
              <div className="row no-gutters">
                <div className="col-6 mx-auto">
                  <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <SvgCloud
                      width={150}
                      height={70}
                      mt={false}
                      mxAuto={true}
                      style={{ marginTop: "10px" }}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <p
                    className="card-text"
                    style={{
                      ...styles.textCard,
                      fontSize: "13px",
                      paddingLeft: "0px",
                      paddingRight: "0px",
                      marginTop: "15px",
                    }}
                  >
                    ¡100% en la nube! Accede donde quieras y desde cualquier
                    lugar, usando el dispositivo con conexión a internet de tu
                    preferencia.
                  </p>
                </div>
              </div>
            </div>
            : <div className="card" style={styles.backgroundColorCardCloud}>
              <SvgCloud
                width={width > breakpoint && width < breakpointT ? 67 : 220}
                height={width > breakpoint && width < breakpointT ? 34 : 120}
                mt={true}
                mtN={width > breakpoint && width < breakpointT ? 2 : 4}
                mxAuto={true}
              />
              <div className="card-body">
                <p className="card-text" style={styles.textCardCloud}>
                  ¡100% en la nube! Accede donde quieras y desde cualquier
                  lugar, usando el dispositivo con conexión a internet de tu
                  preferencia.
                </p>
              </div>
            </div>}
        </div>
      </div>

      {width < breakpoint
        ? <div>
          <div className="row" style={styles.backgroundFooter}>
            <div className="col-lg-12 col-md-12 col-sm-12 text-center">
              <p className="text-center" style={styles.secondTextMobile}>
                ¿Listo para probar Dec?
              </p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-12 col-md-12 col-sm-12 mb-5">
              <a style={styles.buttonStarted}>Comienza Gratis</a>
            </div>
          </div>
        </div>
        : <div>
          <div className="row">
            <div
              className="col-lg-6 col-md-6 col-sm-6 mx-auto mb-1"
              style={styles.backgroundInReady}
            >
              <p style={styles.secondText}>¿Listo para probar Dec?</p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-12 col-md-12 col-sm-12 mb-10">
              <a style={styles.buttonStarted}>Comienza Gratis</a>
            </div>
          </div>
        </div>}
    </div>
  );
};
