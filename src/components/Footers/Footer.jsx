import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "../../styles/footer.css";
import logoFooter from "../../assets/img/logo-dec-footer.png";
import useViewport from "../../components/GridResponsive/ViewResponsive";

export const Footer = () => {
  const { width, breakpoint, breakpointT } = useViewport();
  return (
    <footer>
      <div className="body-footer">
        <Row>
          <Col
            className="mt-2 d-md-none d-lg-block"
            md={{ span: 6, offset: 3 }}
          >
            <Row>
              <Col className="text-center" lg={2}></Col>
              <Col className="text-center" lg={2}>
                <a
                  style={{
                    textDecoration: "none !important",
                    fontSize: width > breakpoint && width < breakpointT
                      ? "7px"
                      : "",
                  }}
                >
                  Soporte
                </a>
              </Col>
              <Col className="text-center pl-1" lg={2}>
                <a
                  style={{
                    fontSize: width > breakpoint && width < breakpointT
                      ? "7px"
                      : "",
                    textDecoration: "none !important",
                  }}
                >
                  Privacidad
                </a>
              </Col>
              <Col className="text-center pl-1" lg={2}>
                <a
                  style={{
                    fontSize: width > breakpoint && width < breakpointT
                      ? "7px"
                      : "",
                    textDecoration: "none !important",
                  }}
                >
                  Desarrolladores
                </a>
              </Col>
              <Col className="text-center pl-3" lg={2}>
                <a
                  style={{
                    fontSize: width > breakpoint && width < breakpointT
                      ? "7px"
                      : "",
                    textDecoration: "none !important",
                  }}
                >
                  Legal
                </a>
              </Col>
            </Row>
          </Col>
          <Col
            className="mt-2 d-md-block d-lg-none"
            md={{ span: 6, offset: 3 }}
          >
            <Row>
              <Col className="text-center" lg={3} md={3} sm={3}>
                <a
                  style={{
                    fontSize: width > breakpoint && width < breakpointT
                      ? "7px"
                      : "",
                    textDecoration: "none !important",
                  }}
                >
                  Soporte
                </a>
              </Col>
              <Col className="text-center" lg={3} md={3} sm={3}>
                <a
                  style={{
                    fontSize: width > breakpoint && width < breakpointT
                      ? "7px"
                      : "",
                    textDecoration: "none !important",
                  }}
                >
                  Privacidad
                </a>
              </Col>
              <Col className="text-center pl-2" lg={3} md={3} sm={3}>
                <a
                  style={{
                    fontSize: width > breakpoint && width < breakpointT
                      ? "7px"
                      : "",
                    textDecoration: "none !important",
                  }}
                >
                  Desarrolladores
                </a>
              </Col>
              <Col className="text-center" lg={3} md={3} sm={3}>
                <a
                  style={{
                    fontSize: width > breakpoint && width < breakpointT
                      ? "7px"
                      : "",
                    textDecoration: "none !important",
                  }}
                >
                  Legal
                </a>
              </Col>
            </Row>
          </Col>
          <Col className="mt-2" md={{ span: 4, offset: 4 }}>
            <div className="text-center">
              <Image src={logoFooter} fluid />
            </div>
          </Col>
          <Col className="text-center mt-2" md={{ span: 4, offset: 4 }}>
            <p>Copyright 2021. Todos lo desrechos reservados .</p>
          </Col>
        </Row>
      </div>
      <div className="body-container-footer-xs">
        <Row>
          <Col xs={{ span: 4, order: 1 }}>
            <div className="text-left">
              <a
                style={{
                  fontSize: width > breakpoint && width < breakpointT
                    ? "7px"
                    : "",
                  textDecoration: "none !important",
                }}
              >
                Soporte
              </a>
              <br></br>
              <a
                style={{
                  fontSize: width > breakpoint && width < breakpointT ? "7px"
                  : "",
                  textDecoration: "none !important",
                }}
              >
                Desarrolladores
              </a>
            </div>
          </Col>
          <Col xs={{ span: 3, order: 2 }}>
            <div className="text-left">
              <a
                style={{
                  fontSize: width > breakpoint && width < breakpointT ? "7px"
                  : "",
                  textDecoration: "none !important",
                }}
              >
                Legal
              </a>
              <br></br>
              <a
                style={{
                  fontSize: width > breakpoint && width < breakpointT ? "7px"
                  : "",
                  textDecoration: "none !important",
                }}
              >
                Privacidad
              </a>
            </div>
          </Col>
          <Col xs={{ span: 5, order: 3 }}>
            <div className="text-center">
              <Image src={logoFooter} fluid />
            </div>
            <div className="text-center body-dec-bottom">
              <p>Copyright 2021. Todos lo desrechos reservados .</p>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};
