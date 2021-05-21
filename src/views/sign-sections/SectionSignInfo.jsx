import React from "react";
import { LightSpeed } from "react-reveal";
import SvgPaper from "../../components/SvgSectionEasySign/SvgPaper";
import SvgHand from "../../components/SvgSectionEasySign/SvgHand";
import SvgPhone from "../../components/SvgSectionEasySign/SvgPhone";
import useViewport from "../../components/GridResponsive/ViewResponsive";
export const SectionSignInfo = () => {
  const { width, breakpoint, breakpointT } = useViewport();
  const styles = {
    rowSign: {
      borderTop: "1px solid gray",
      borderBottom: "1px solid gray",
    },
    cardP: {
      backgroundColor: "#3a436d",
      borderRadius: "20px",
    },
    cardG: {
      backgroundColor: "#1bb482",
      borderRadius: "20px",
    },
    textCard1: {
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      color: "#ffffff",
      fontFamily: "MYRIADPROREGULAR , sans-serif",
      fontSize: width < breakpoint
        ? "15px"
        : (width > breakpoint && width < breakpointT ? "12px" : "18px"),
      fontWeight: "400",
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      marginTop: width > breakpoint && width < breakpointT ? "0px" : "20px",
    },
    textCard2: {
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      color: "#ffffff",
      fontFamily: "MYRIADPROREGULAR , sans-serif",
      fontSize: width < breakpoint ? "15px"
      : (width > breakpoint && width < breakpointT ? "12px" : "18px"),
      fontWeight: "400",
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
    },
    textCard3: {
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      color: "#ffffff",
      fontFamily: "MYRIADPROREGULAR , sans-serif",
      fontSize: width < breakpoint ? "15px"
      : (width > breakpoint && width < breakpointT ? "12px" : "18px"),
      fontWeight: "400",
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      marginTop: width > breakpoint && width < breakpointT ? "0px" : "15px",
    },
    margint: {
      marginTop: "20px",
    },
  };
  return (
    <LightSpeed right>
      <div className="container-fluid">
        <div
          className="row"
          style={width < breakpoint ? { padding: "1px" } : styles.rowSign}
        >
          <div
            className="col-lg-9 col-md-9 col-sm-9 mx-auto"
            style={{
              marginTop: width < breakpoint ? "40px" : "6rem",
              marginBottom: width < breakpoint ? "0px" : "6rem",
            }}
          >
            <div className="row">
              {width < breakpoint
                ? <div
                  className="col-lg-4 col-md-4 col-sm-4 mb-3"
                  style={{ marginLeft: width < breakpoint ? "18%" : "" }}
                >
                  <div
                    className="card"
                    style={{ ...styles.cardP, borderRadius: "10px" }}
                  >
                    <div className="row no-gutters">
                      <div className="col-7 mx-auto">
                        <p
                          className="card-text"
                          style={{
                            ...styles.textCard1,
                            marginTop: "16%",
                            marginLeft: "15%",
                          }}
                        >
                          Varios tipos de firma disponibles de acuerdo <br />
                          a tus nesecesidades.
                        </p>
                      </div>
                      <div className="col-5">
                        <div
                          style={{ marginTop: "20%", marginBottom: "20%" }}
                        >
                          <SvgPaper
                            width={150}
                            height={70}
                            mt={false}
                            mxAuto={true}
                            p20={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                : <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="card" style={styles.cardP}>
                    <SvgPaper
                      width={width > breakpoint && width < breakpointT
                        ? 68
                        : 200}
                      height={width > breakpoint && width < breakpointT ? 67
                      : 100}
                      mt={true}
                      mxAuto={true}
                      p20={false}
                    />
                    <div
                      className="card-body"
                      style={{
                        marginBottom: width > breakpoint && width < breakpointT
                          ? "0px"
                          : "20px",
                      }}
                    >
                      <p
                        className="card-text"
                        style={styles.textCard1}
                      >
                        Varios tipos de firma disponibles de acuerdo a tus
                        nesecesidades.
                      </p>
                    </div>
                  </div>
                </div>}

              {width < breakpoint
                ? <div
                  className="col-lg-4 col-md-4 col-sm-4 mb-3"
                  style={{ marginRight: width < breakpoint ? "18%" : "" }}
                >
                  <div
                    className="card"
                    style={{ ...styles.cardG, borderRadius: "10px" }}
                  >
                    <div className="row no-gutters">
                      <div className="col-4">
                        <div
                          style={{ marginTop: "20%", marginBottom: "20%" }}
                        >
                          <SvgHand
                            width={93}
                            height={70}
                            mt={false}
                            mxAuto={true}
                            p20={false}
                          />
                        </div>
                      </div>
                      <div className="col-8 mx-auto">
                        <p
                          className="card-text"
                          style={{
                            ...styles.textCard1,
                            marginTop: "13%",
                            marginLeft: "10%",
                          }}
                        >
                          Tu firma electrónica con validez legal al
                          alcance<br /> de tu mano.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                : <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="card" style={styles.cardG}>
                    <SvgHand
                      width={width > breakpoint && width < breakpointT ? 68
                      : 200}
                      height={width > breakpoint && width < breakpointT ? 67
                      : 100}
                      mt={true}
                      mxAuto={true}
                      p20={false}
                    />
                    <div className="card-body">
                      <p className="card-text" style={styles.textCard2}>
                        Tu firma electrónica con validez legal al alcance de tu
                        mano.
                      </p>
                    </div>
                  </div>
                </div>}
              {width < breakpoint
                ? <div
                  className="col-lg-4 col-md-4 col-sm-4 mb-3"
                  style={{ marginLeft: width < breakpoint ? "18%" : "" }}
                >
                  <div
                    className="card"
                    style={{ ...styles.cardP, borderRadius: "10px" }}
                  >
                    <div className="row no-gutters">
                      <div className="col-7 mx-auto">
                        <p
                          className="card-text"
                          style={{
                            ...styles.textCard1,
                            marginTop: "16%",
                            marginLeft: "10%",
                          }}
                        >
                          Firma fácil y rápido desde cualquier dispositivo
                          usando DecSigner.
                        </p>
                      </div>
                      <div className="col-5">
                        <div
                          style={{ marginTop: "20%", marginBottom: "20%" }}
                        >
                          <SvgPhone
                            width={150}
                            height={70}
                            mt={false}
                            mxAuto={true}
                            p20={false}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                : <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="card" style={styles.cardP}>
                    <SvgPhone
                      width={width > breakpoint && width < breakpointT ? 68
                      : 200}
                      height={width > breakpoint && width < breakpointT ? 67
                      : 100}
                      mt={true}
                      mxAuto={true}
                      p20={false}
                    />
                    <div className="card-body">
                      <p className="card-text" style={styles.textCard3}>
                        Firma fácil y rápido desde cualquier dispositivo usando
                        DecSigner.
                      </p>
                    </div>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </LightSpeed>
  );
};
