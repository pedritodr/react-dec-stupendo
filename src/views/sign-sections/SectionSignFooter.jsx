import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { LightSpeed } from "react-reveal";
import {Link} from "react-router-dom";
import imagenLeft from "../../assets/img/section-sign/sing-footer-left.png";
import signFooter from "../../assets/img/section-sign/easy-sing-footer.png";
import backgroundText from "../../assets/img/section-sign/stars.png";
import backgroundMobile from "../../assets/img/section-sign/stars-mobile.png";
import useViewport from "../../components/GridResponsive/ViewResponsive";
export const SectionSignFooter = () => {
  const { width, breakpoint, breakpointT } = useViewport();
  const styles = {
    textH1: {
      margin: "0 0 10px 0",
      fontSize: width > breakpoint && width < breakpointT ? "18px" : "35px",
      fontWeight: "500",
      lineHeight: width > breakpoint && width < breakpointT ? "1" : "56px",
      color: "#3b4b73",
      fontFamily: "MYRIADPRO, sans-serif",
    },
    textImage: {
      backgroundImage: width < breakpoint
        ? `url(${backgroundText})`
        : `url(${backgroundMobile})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: width < breakpoint ? "75% auto"
      : (width > breakpoint && width < breakpointT ? "90% auto" : "100% 100%"),
      backgroundPosition: width < breakpoint ? "center"
      : (width > breakpoint && width < breakpointT ? "center" : ""),
    },
    buttonFooter: {
      textAlign: "center",
      fontFamily: "MYRIADPRO, sans-serif",
      fontWeight: "500",
      fontSize: "30px",
      letterSpacing: "1px",
      display: "inline-block",
      padding: "5px 45px 5px 45px",
      borderRadius: "50px",
      transition: "0.5s",
      color: "#fff",
      background: "#29B383",
      cursor: "pointer",
      marginTop: "30px",
      textDecoration: 'none'
    },
  };

  return (
    <div className="container-fluid mb-5">
      <div className="row">
        {width < breakpoint
          ? <div
            className="col-lg-11 col-md-11 col-sm-11 mx-auto"
          >
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 mb-5">
                <LightSpeed right>
                  <div className="text-center">
                    <img
                      src={signFooter}
                      style={{
                        width: "80%",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                  </div>
                  <div
                    className="text-center pt-3 body-container"
                    style={{
                      ...styles.textImage,
                      marginTop: width > breakpoint && width < breakpointT
                        ? "10%"
                        : "6%",
                    }}
                  >
                    <h1
                      style={{
                        ...styles.textH1,
                        fontSize: "18px",
                        paddingBottom: "2%",
                      }}
                    >
                      El complemento perfecto de Dec
                    </h1>
                  </div>
                  <div className="text-center text-lg-center body-btn">
                    <a
                      className="btn-get-started"
                      style={{
                        textAlign: "center",
                        fontFamily: "MYRIADPRO, sans-serif",
                        fontWeight: "bold",
                        fontSize: "14px",
                        letterSpacing: "1px",
                        display: "inline-block",
                        padding: "5px 30px 5px 30px",
                        borderRadius: "50px",
                        transition: "0.5s",
                        color: "#fff",
                        background: "#29B383",
                        cursor: "pointer",
                        marginTop: "3px",
                      }}
                    >
                      Prueba Dec
                    </a>
                  </div>
                </LightSpeed>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <LightSpeed left>
                  <div className="text-center">
                    <Image src={imagenLeft} fluid />
                  </div>
                </LightSpeed>
              </div>
            </div>
          </div>
          : <div className="col-lg-11 col-md-11 col-sm-11 mx-auto">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <LightSpeed left>
                  <div className="text-center mt-auto">
                    <Image
                      src={imagenLeft}
                      fluid
                      style={{ display: "block", marginTop: "auto" }}
                    />
                  </div>
                </LightSpeed>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <LightSpeed right>
                  <div className="text-center">
                    <Image src={signFooter} fluid />
                  </div>
                  <div
                    className="text-center pt-3 body-container"
                    style={{
                      ...styles.textImage,
                      marginTop: width > breakpoint && width < breakpointT
                        ? "10%"
                        : "",
                    }}
                  >
                    <h1
                      style={{
                        ...styles.textH1,
                      }}
                    >
                      El complemento perfecto de Dec
                    </h1>
                  </div>
                  <div className="text-center text-lg-center body-btn">
                    <Link to={process.env.REACT_APP_BTN_PRUEBA_DEC} className="btn-get-started" style={styles.buttonFooter}>
                      Prueba Dec
                    </Link>
                  </div>
                </LightSpeed>
              </div>
            </div>
          </div>}
      </div>
    </div>
  );
};
