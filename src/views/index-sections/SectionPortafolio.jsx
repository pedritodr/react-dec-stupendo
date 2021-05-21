import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import backgraundFooter from "../../assets/img/section-portafolio/Recurso-footer.png";
import backgroundFooterMobil from "../../assets/img/section-portafolio/background-footer-mobil.png";
import imageCenter from "../../assets/img/section-portafolio/Recurso-center.png";
import backgroundImageContainer from "../../assets/img/section-portafolio/bacgraound-2.png";
import backgroundImageMovil from "../../assets/img/section-portafolio/backgraund-fotter-mobil1.png";
import useViewport from "../../components/GridResponsive/ViewResponsive";
export const SectionPortafolio = () => {
  const { width, breakpoint, breakpointT } = useViewport();
  const styles = {
    backgroundImg: {
      backgroundImage: width < breakpoint
        ? `url(${backgroundImageMovil})`
        : `url(${backgroundImageContainer})`,
      backgroundSize: width < breakpoint ? "100% 100%" : "100% 100%",

      backgroundRepeat: "no-repeat",
    },
    titlePorta: {
      margin: width < breakpoint ? "0 0 2px 0" : "0 0 10px 0",
      fontSize: width < breakpoint ? "22px"
      : (width > breakpoint && width < breakpointT ? "23px" : "36px"),
      fontWeight: "500",
      lineHeight: width < breakpoint ? "1"
      : (width > breakpoint && width < breakpointT ? "1" : "56px"),
      color: "#3E4A74",
      fontFamily: "MYRIADPRO , sans-serif",
      marginBottom: width < breakpoint ? "10px" : "30px",
      textAlign: width < breakpoint ? "left" : "center",
    },
    subTitleDiv: {
      paddingLeft: "23%",
      paddingRight: "23%",
      textAlign: "left",
    },
    subTitleText: {
      color: "#3E4A74",
      marginBottom: "15px",
      fontSize: width < breakpoint ? "12px"
      : (width > breakpoint && width < breakpointT ? "14px" : "18px"),
      textAlign: "left",
      paddingLeft: width < breakpoint ? "10px" : "20px",
      paddingRight: "20px",
    },
    secondText: {
      textAlign: "center",
      margin: " 0 0 10px 0",
      fontSize: width < breakpoint ? "15px"
      : (width > breakpoint && width < breakpointT ? "21px" : "36px"),
      fontWeight: "500",
      lineHeight: "56px",
      color: "#3E4A74",
      fontFamily: "MYRIADPRO, sans-serif",
      paddingTop: "25px",
    },
    buttonStarted: {
      textAlign: "center",
      fontFamily: "MYRIADPRO, sans-serif",
      fontWeight: width > breakpoint && width < breakpointT ? "bold" : "500",
      fontSize: width < breakpoint ? "15px"
      : (width > breakpoint && width < breakpointT ? "16px" : "30px"),
      letterSpacing: "1px",
      display: "inline-block",
      padding: width < breakpoint ? "7px 15px 3px 15px"
      : (width > breakpoint && width < breakpointT ? "5px 20px 5px 20px"
      : "1px 20px"),
      borderRadius: "50px",
      transition: "0.5s",
      color: "#fff",
      background: "#29B383",
      cursor: "pointer",
      marginTop: width < breakpoint ? "0px" : "10px",
    },
    backgroundInReady: {
      backgroundImage: width < breakpoint ? `url(${backgroundFooterMobil})`
      : `url(${backgraundFooter})`,
      backgroundPosition: "center",
      backgroundSize: width < breakpoint ? "auto" : "",
      backgroundRepeat: "no-repeat",
    },
  };
  return (
    <div className="container-fluid" style={styles.backgroundImg}>
      <div className="row">
        <div
          className="col-lg-12 text-center"
          style={{
            marginTop: width < breakpoint ? "25px" : "3rem",
            paddingLeft: width < breakpoint ? "25px" : "",
          }}
        >
          <h1 style={styles.titlePorta}>
            Empieza con tu potafolio{width < breakpoint ? <br /> : ""}{" "}
            digital ahora
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mx-auto" style={styles.subTitlePorta}>
          <p
            style={{
              ...styles.subTitleText,
              marginTop: width < breakpoint ? "25px" : "",
              paddingLeft: width > breakpoint && width < breakpointT
                ? "24%"
                : "",
            }}
          >
            Para tu empresa, uso personal, o incluso para
            desarrolladores,{width > breakpoint && width < breakpointT
              ? <br />
              : ""}
            encuentra la versión Dec ideal{width < breakpoint ? <br /> : ""}
            {" "}
            para ti.
          </p>
        </div>
      </div>
      <div
        className="row"
        style={{
          marginTop: width < breakpoint ? "20px"
          : (width > breakpoint && width < breakpointT ? "3rem" : "5rem"),
        }}
      >
        <div
          className="col-lg-8 mx-auto"
          style={{
            marginTop: width < breakpoint ? ""
            : (width > breakpoint && width < breakpointT ? "" : "10rem"),
          }}
        >
          <img
            src={imageCenter}
            alt=""
            style={{
              width: width < breakpoint ? "100%"
              : (width > breakpoint && width < breakpointT ? "60%" : ""),
              display: width > breakpoint && width < breakpointT ? "block" : "",
              marginLeft: width > breakpoint && width < breakpointT ? "auto"
              : "",
              marginRight: width > breakpoint && width < breakpointT ? "auto"
              : "",
            }}
          />
        </div>
      </div>
      <div
        className="row"
        style={{
          marginTop: width > breakpoint && width < breakpointT ? "10%" : "",
        }}
      >
        <div className="col-lg-6 mx-auto mb-1" style={styles.backgroundInReady}>
          <p style={styles.secondText}>¿Listo para probarlo?</p>
        </div>
      </div>
      <div className="row text-center">
        <div
          className="col-lg-12"
          style={{
            marginBottom: width < breakpoint ? "35px"
            : (width > breakpoint && width < breakpointT ? "5rem" : "10rem"),
          }}
        >
          <a style={styles.buttonStarted}>Comienza Gratis</a>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 mb-4"></div>
      </div>
    </div>
  );
};
