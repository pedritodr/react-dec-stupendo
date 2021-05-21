import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Flip from "react-reveal/Flip";
import useViewport from "../../components/GridResponsive/ViewResponsive";

export const SectionPlansHeader = () => {
  const { width, breakpoint } = useViewport();
  const styles = {
    title: {
      margin: "0 0 10px 0",
      fontSize: width < breakpoint ? "30px" : "44px",
      fontWeight: "500",
      lineHeight: "56px",
      color: "#3E4A74",
      fontFamily: "MYRIADPRO , sans-serif",
    },
    buttonSelected: {
      background: "#29b181",
      color: "white",
    },
    firstButtonP: {
      padding: width < breakpoint
        ? "10px 17px 10px 17px"
        : "10px 30px 10px 30px",
      borderRadius: "20px 0 0 20px",
      background: "white",
      color: "#29b181",
      border: "1px solid #29b181",
    },
    secondButtonP: {
      padding: width < breakpoint ? "10px 17px 10px 17px"
      : "10px 40px 10px 40px",
      borderRadius: "0 20px 20px 0",
      background: "white",
      color: "#29b181",
      border: "1px solid #29b181",
    },
    middleButtonP: {
      padding: width < breakpoint ? "10px 17px 10px 17px"
      : "10px 40px 10px 40px",
      background: "white",
      color: "#29b181",
      border: "1px solid #29b181",
    },
    firstButtonG: {
      padding: "10px 30px 10px 30px",
      borderRadius: "20px 0 0 20px",
      background: "white",
      color: "#29b181",
      border: "1px solid black",
    },
    secondButtonG: {
      padding: "10px 40px 10px 40px",
      borderRadius: "0 20px 20px 0",
      background: "#3a436d",
      color: "white",
    },
  };
  return (
    <Flip top>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-8 mx-auto pt-2"
            style={{
              marginBottom: width < breakpoint ? "10%" : "3rem",
              marginTop: width < breakpoint ? "10%" : "3rem",
            }}
          >
            <div
              className="col-lg-12"
              style={{ marginTop: width < breakpoint ? "10%" : "3rem" }}
            >
              <h1
                className="text-center"
                style={{ ...styles.title, marginBottom: "10%" }}
              >
                Planes y precios Dec
              </h1>
            </div>
            <div className="col-lg-12 text-center mb-4">
              <div
                className="btn-group row"
                role="group"
                aria-label="Button group with nested dropdown"
              >
                <button
                  type="button"
                  className="btn btn-info"
                  style={styles.firstButtonP}
                >
                  Personal
                </button>
                <button
                  type="button"
                  className="btn btn-info"
                  style={styles.middleButtonP}
                >
                  Enterprice
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  style={{ ...styles.secondButtonP, ...styles.buttonSelected }}
                >
                  Developers
                </button>
              </div>
            </div>
            <div className="col-lg-12 text-center mb-5">
              <div
                className="btn-group"
                role="group"
                aria-label="Button group with nested dropdown"
              >
                <button
                  type="button"
                  className="btn btn-info"
                  style={styles.firstButtonG}
                >
                  Mensual
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  style={styles.secondButtonG}
                >
                  Anual
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Flip>
  );
};
