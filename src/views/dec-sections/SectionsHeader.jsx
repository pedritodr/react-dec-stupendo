import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LightSpeed } from "react-reveal";
import ImgRigth from "../../assets/img/section-dec/Recurso-right.png"; // with imp
import useViewport from "../../components/GridResponsive/ViewResponsive";
export const SectionsHeader = () => {
  const { width, breakpoint, breakpointT } = useViewport();
  const styles = {
    firstText: {
      padding: width < breakpoint
        ? ""
        : (width > breakpoint && width < breakpointT ? "" : "80px"),
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      color: "#3a436d",
      fontFamily: "MYRIADPRO , sans-serif",
      fontSize: width < breakpoint ? "25px"
      : (width > breakpoint && width < breakpointT ? "30px" : "45px"),
      fontWeight: "bold",
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
    },
    secondContainer: {
      marginLeft: width < breakpoint ? "0px"
      : (width > breakpoint && width < breakpointT ? "20px" : "80px"),
    },
    grandTitle: {
      margin: "0 0 10px 0",
      fontSize: "42px",
      fontWeight: "500",
      lineHeight: "56px",
      color: "#3E4A74",
      fontFamily: "MYRIADPRO , sans-serif",
      marginBottom: "30px",
      textAlign: "center",
    },
    titleT: {
      color: "#29B383",
      marginBottom: "15px",
      fontSize: width < breakpoint ? "18px"
      : (width > breakpoint && width < breakpointT ? "14px" : "22px"),
    },
    subTitleT: {
      margin: "0 0 10px 0",
      fontSize: width < breakpoint ? "14px"
      : (width > breakpoint && width < breakpointT ? "12px" : "18px"),
      fontWeight: "500",
      lineHeight: "26px",
      color: "#3E4A74",
      fontFamily: "MYRIADPROREGULAR , sans-serif",
    },
  };
  return (
    <div
      className="container-fluid "
      style={{
        marginBottom: width < breakpoint
          ? "40px"
          : (width > breakpoint && width < breakpointT ? "10%" : "10rem"),
      }}
    >
      <LightSpeed left>
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8 text-container">
            <div className="col-lg-12 col-md-12 col-sm-12 p-1">
              <h1
                className="text-left"
                style={{
                  ...styles.firstText,
                  marginTop: width < breakpoint ? "80px"
                  : (width > breakpoint && width < breakpointT ? "80px" : ""),
                  marginLeft: width > breakpoint && width < breakpointT
                    ? "20px"
                    : "",
                }}
              >
                Tu portafolio digital{width < breakpoint ? <br /> : ""}{" "}
                de firma electrónica{width < breakpoint ? <br /> : ""}{" "}
                en la nube
              </h1>
            </div>
            <div
              className="col-lg-l2 col-md-12 col-sm-12"
              style={styles.secondContainer}
            >
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <h2 className="text-left sub-text" style={styles.titleT}>
                    Usa Dec para almacenar
                  </h2>
                  <p
                    className="text-left sub-text"
                    style={{
                      ...styles.subTitleT,
                      lineHeight: width < breakpoint ? "1.3" : "",
                    }}
                  >
                    Todos los procesos que creas en Dec, se{width < breakpoint
                      ? <br />
                      : ""}
                    guardan en tu{width > breakpoint && width < breakpointT
                      ? <br />
                      : ""}{" "}
                    storage personal con su ID{width < breakpoint ? <br /> : ""}
                    único en la nube,
                    permitiéndote{width > breakpoint && width < breakpointT
                      ? <br />
                      : ""}{"  "}acceder a
                    {width < breakpoint ? <br /> : ""}
                    ellos, fácil y rápidamente.
                  </p>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <h2 style={styles.titleT}>Usa Dec para firmar</h2>
                  <p
                    style={{
                      ...styles.subTitleT,
                      lineHeight: width < breakpoint ? "1.3" : "",
                    }}
                  >
                    Firma un documento, o solicita que lo
                    firmen.{width < breakpoint ? <br /> : ""}
                    Cualquier{width > breakpoint && width < breakpointT
                      ? <br />
                      : ""}{"  "}
                    persona puede firmar, incluso{width < breakpoint ? <br />
                    : ""}
                    sin tener una
                    firma{width > breakpoint && width < breakpointT ? <br />
                    : ""}{"  "}
                    electrónica creada{width < breakpoint ? <br /> : ""}{" "}
                    con anterioridad.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <img
              src={ImgRigth}
              style={{
                width: width < breakpoint ? "50%"
                : (width > breakpoint && width < breakpointT ? "100%" : ""),
                margin: width < breakpoint ? "auto" : "",
                display: width < breakpoint ? "block" : "",
                marginTop: width < breakpoint ? "20px"
                : (width > breakpoint && width < breakpointT ? "50%" : "80px"),
              }}
              alt=""
            />
          </div>
        </div>
      </LightSpeed>
    </div>
  );
};
