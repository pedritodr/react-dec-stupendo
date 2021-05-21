import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { LightSpeed } from "react-reveal";
import imagenRight from "../../assets/img/section-sign/easy-sign.png";
import backgroundHeader from "../../assets/img/section-sign/background-sign-header1.png";
import backgroundMobile from "../../assets/img/section-sign/background-mobile.png";
import useViewport from "../../components/GridResponsive/ViewResponsive";
export const SectionHeaderSign = () => {
  const { width, breakpoint, breakpointT } = useViewport();
  const styles = {
    container: {
      backgroundImage: `url(${width < breakpoint ? "" : backgroundHeader})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center top",
    },
    textH1Sign: {
      fontSize: width < breakpoint
        ? "31px"
        : (width > breakpoint && width < breakpointT ? "30px" : "36px"),
      fontWeight: "500",
      lineHeight: "56px",
      color: "#3E4A74",
      fontFamily: "MYRIADPRO , sans-serif",
      textAlign: "center",
      lineHeight: 1,
    },
    text: {
      margin: "0 0 10px 0",
      fontSize: width < breakpoint ? "16px"
      : (width > breakpoint && width < breakpointT ? "14px" : "18px"),
      fontWeight: width > breakpoint && width < breakpointT ? "bold" : "500",
      lineHeight: "26px",
      color: "#3E4A74",
      fontFamily: "MYRIADPROREGULAR , sans-serif",
      lineHeight: 1.3,
      marginTop: "20px",
    },
    image: {
      width: width < breakpoint ? "45%"
      : (width > breakpoint && width < breakpointT ? "100%" : ""),
      marginLeft: width < breakpoint ? "auto"
      : (width > breakpoint && width < breakpointT ? "auto" : ""),
      marginRight: width < breakpoint ? "auto"
      : (width > breakpoint && width < breakpointT ? "auto" : ""),
      display: width < breakpoint ? "block"
      : (width > breakpoint && width < breakpointT ? "block" : ""),
    },
    margin200: {
      marginTop: "200px",
    },
    margin100: {
      marginTop: "20%",
    },
    margin50: {
      marginTop: "80px",
    },
  };
  return (
    <div className="container-fluid" style={styles.container}>
      <div
        className="row"
        style={{ marginBottom: width < breakpoint ? "" : "6rem" }}
      >
        <div
          className={width > breakpoint && width < breakpointT
            ? "col-lg-11 col-md-11 col-sm-11 mx-auto"
            : "col-lg-8 col-md-8 col-sm-8 mx-auto"}
        >
          <div className="row">
            <div
              className="col-lg-6 col-md-6 col-sm-6 pl-4"
              style={width < breakpoint
                ? styles.margin50
                : (width > breakpoint && width < breakpointT ? styles.margin100
                : styles.margin200)}
            >
              <h1 className="text-left" style={styles.textH1Sign}>
                Tu firma electrónica{width < breakpoint ? <br /> : ""}{" "}
                fácil, rápida y segura
              </h1>
              <p className="text-left" style={styles.text}>
                Crea tu firma electrónica EasySign,{width < breakpoint
                  ? <br />
                  : ""}
                y úsala en todos los procesos que{width < breakpoint ? <br />
                : ""} crees o firmes con Dec.
              </p>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              style={{
                marginTop: width < breakpoint ? "20px"
                : (width > breakpoint && width < breakpointT ? "15%" : "50px"),
              }}
            >
              <div
                className={width > breakpoint && width < breakpointT
                  ? "col-lg-6  col-md-6  col-sm-6 mx-auto"
                  : "col-lg-4 col-md-4 col-sm-4 mx-auto"}
              >
                <img style={styles.image} src={imagenRight} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
