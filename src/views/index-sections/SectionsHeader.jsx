import React from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import leftHomeImg from "../../assets/img/img-left-home.png";
import "animate.css/animate.css";
import useViewport from "../../components/GridResponsive/ViewResponsive";

export const SectionsHeader = () => {
  const { width, breakpoint, breakpointT } = useViewport();
  const styles = {
    textHeader: {
      lineHeight: width < breakpoint
        ? "1"
        : (width > breakpoint && width < breakpointT ? "1.1" : "1"),
      color: "#3d4975",
      fontFamily: "MYRIADPRO, sans-serif",
      fontSize: width < breakpoint ? "32px"
      : (width > breakpoint && width < breakpointT ? "38px" : "60px"),
    },
    buttonHeader: {
      fontFamily: "MYRIADPRO , sans-serif",
      fontWeight: "500",
      fontSize: width < breakpoint ? "17px"
      : (width > breakpoint && width < breakpointT ? "24px" : "30px"),
      letterSpacing: "1px",
      padding: width < breakpoint ? "5px 15px 5px 15px"
      : (width > breakpoint && width < breakpointT ? "10px 20px 10px 20px"
      : "5px 50px 5px 50px"),
      borderRadius: "50px",
      transition: "0.5s",
      color: "#fff",
      background: "#29B383",
      cursor: "pointer",
    },
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-lg-6 col-md-6 col-sm-6 col-xs-6"
          style={{ marginTop: width < breakpoint ? "2rem" : "10rem" }}
        >
          <div className="col-lg-10 md-lg-10  col-sm-10  col-xs-10  mx-auto">
            <div className="row">
              <p style={styles.textHeader}>
                Firma documentos eletrónicos en tu portafolio digital
              </p>
              <div
                style={{
                  marginTop: width < breakpoint
                    ? "2rem"
                    : (width > breakpoint && width < breakpointT ? "3rem"
                    : "6rem"),
                }}
              >
                <a style={styles.buttonHeader}>Comienza Gratis</a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-6 col-md-6 col-sm-6 col-xs-6 animate__animated animate__fadeInUp"
        >
          <img src={leftHomeImg} style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};
