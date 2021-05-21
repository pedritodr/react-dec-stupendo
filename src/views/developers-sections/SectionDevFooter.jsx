import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { LightSpeed } from "react-reveal";
import imagenRight from "../../assets/img/section-developer/Recurso7.png";
import imagenLeft from "../../assets/img/section-developer/Recurso8.png";
import textBackground from "../../assets/img/section-developer/Recurso91.png";
import textBackgroundTablet from "../../assets/img/section-developer/text-mobile-star.png";
import useViewport from "../../components/GridResponsive/ViewResponsive";
export const SectionDevFooter = () => {
  const { width, breakpoint, breakpointT } = useViewport();
  const styles = {
    textImage: {
      fontSize: width > breakpoint && width < breakpointT ? "14px" : "20px",
      fontFamily: "MYRIADPRO , sans-serif",
      color: "#3a436d",
    },
    textBG: {
      backgroundImage: width > breakpoint && width < breakpointT
        ? "url(" + textBackgroundTablet + ")"
        : `url(${textBackground})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: width > breakpoint && width < breakpointT ? "50px" : "60px",
      paddingTop: "10px",
      fontFamily: "MYRIADPRO , sans-serif",
      color: "#3a436d",
    },
  };
  return (
    <div
      className="container-fluid"
      style={{
        marginTop: width < breakpoint
          ? "0px"
          : (width > breakpoint && width < breakpointT ? "20%" : "1.5rem"),
        marginBottom: width < breakpoint ? "0px" : "1.5rem",
      }}
    >
      {width < breakpoint ? "" : <div className="row">
        <div
          className={width > breakpoint && width < breakpointT
            ? "col-lg-12 col-md-12 col-sm-12 mx-auto"
            : "col-lg-10 col-md-10 col-sm-10 mx-auto"}
        >
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 mt-7 mb-5">
              <LightSpeed left>
                <div
                  className="text-center body-image"
                >
                  <Image src={imagenLeft} />
                </div>
              </LightSpeed>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <LightSpeed right>
                <div className="col-lg-10 col-md-10 col-sm-10 mx-auto">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <Image
                        src={imagenRight}
                        className="center-block"
                        width="90%"
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-5" style={styles.textImage}>
                  Potencia al máximo tus aplicaciones o procesos de negocio.
                </p>
                <div
                  className="text-center"
                >
                  <h2
                    style={{
                      ...styles.textBG,
                      fontSize: width > breakpoint && width < breakpointT
                        ? "19px"
                        : "",
                    }}
                  >
                    ¿Estás listo?
                  </h2>
                </div>
              </LightSpeed>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
  /* return (
    <section id="dev-footer">
      <Container fluid>
        <Row>
          <Col lg={{span:6,order:1}}  xs={{span:12,order:2}}>
            <LightSpeed left>
            <div
              className="text-center body-image"
            >
              <Image src={imagenLeft} fluid />
            </div>
            </LightSpeed> 
          </Col>

          <Col lg={{span:6,order:2}} xs={{span:12,order:1}}>
          <LightSpeed right>
            <div className="text-left">
              <Image src={imagenRight} fluid />
              <p className="mt-5">
                Potencia al máximo tus aplicaciones o procesos de negocio.
              </p>
              <div
                className="body-container-btn pt-3 text-brackground"
              >
                <h1>¿Estás listo?</h1>
              </div>
              <div className="body-container-btn pt-5">
                <a className="btn-get-started">Comienza Gratis</a>
              </div>
            </div>
            </LightSpeed>
          </Col>
        </Row>
      </Container>
    </section>
  ); */
};
