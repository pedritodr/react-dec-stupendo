import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { LightSpeed } from "react-reveal";
import imagenLeft from "../../assets/img/section-developer/dec-developers-header.png";
import backgroundImageContainer from "../../assets/img/section-developer/backgraund-header-developer.png";
import useViewport from "../../components/GridResponsive/ViewResponsive";
import backgroundMobile from "../../assets/img/section-developer/background-mobile.svg";
export const SectionDevHeader = () => {
  const { width, breakpoint, breakpointT } = useViewport();
  const styles = {
    containerBG: {
      backgroundImage: width < breakpoint
        ? `url(${backgroundMobile})`
        : `url(${backgroundImageContainer})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      padding: "2px",
      position: "relative",
    },
    title: {
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "1",
      color: "#3c4876",
      fontWeight: "bold",
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
    },
    subTitle: {
      color: "#3E4A74",
      fontSize: "20px",
      lineHeight: "18px",
      fontFamily: "MYRIADPROREGULAR , sans-serif",
    },
  };
  return (
    <div className="container-fluid" style={styles.containerBG}>
      {width < breakpoint
        ? <div className="row mb-10">
          <div
            className="col-lg-10 col-md-10 col-sm-10 mx-auto mt-3 "
          >
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <LightSpeed right>
                  <div
                    className="text-center body-right"
                  >
                    <h1
                      className="text-left"
                      style={{
                        ...styles.title,
                        fontSize: "30px",
                        padding: "10% 7% 0 7%",
                      }}
                    >
                      APIs flexibles,<br /> seguras y potentes
                    </h1>
                    <p
                      className="text-left"
                      style={{
                        ...styles.subTitle,
                        paddingLeft: "7%",
                        fontSize: "18px",
                        lineHeight: "1.3",
                      }}
                    >
                      Integra facilmente la mejor<br />
                      experiencia de firmado, en tu<br />
                      aplicación o flujo de negocio.
                    </p>
                  </div>
                </LightSpeed>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <img
                  src={imagenLeft}
                  alt=""
                  style={{
                    width: "60%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    paddingTop: "3%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        : <div className="row mb-10">
          <div
            className={width > breakpoint && width < breakpointT
              ? "col-lg-10 col-md-10 col-sm-10 mx-auto mt-10"
              : "col-lg-10 col-md-10 col-sm-10 mx-auto mt-10"}
            style={{
              marginBottom: width > breakpoint && width < breakpointT
                ? "1.5rem"
                : "10rem",
            }}
          >
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <Image src={imagenLeft} fluid />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <LightSpeed right>
                  <div
                    className="text-center body-right"
                  >
                    <h1
                      className="text-left"
                      style={{
                        ...styles.title,
                        fontSize: width > breakpoint && width < breakpointT
                          ? "30px"
                          : "30px",
                        padding: width > breakpoint && width < breakpointT
                          ? "10% 0 0 1%"
                          : "10% 7% 0 7%",
                      }}
                    >
                      APIs flexibles, seguras y potentes
                    </h1>
                    <p
                      className="text-left"
                      style={{
                        ...styles.subTitle,
                        paddingLeft: width > breakpoint && width < breakpointT
                          ? "1%"
                          : "",
                        fontSize: width > breakpoint && width < breakpointT
                          ? "14px"
                          : "",
                        lineHeight: width > breakpoint && width < breakpointT
                          ? "1.3"
                          : "",
                      }}
                    >
                      Integra facilmente la mejor experiencia de<br />firmado,
                      en tu aplicación o flujo de negocio.
                    </p>
                  </div>
                </LightSpeed>
              </div>
            </div>
          </div>
        </div>}
    </div>
  );
};
