import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Bounce } from "react-reveal";
import useMobileDetect from "use-mobile-detect-hook";

import item1 from "../../assets/img/section-carousel/item1.png";
import item2 from "../../assets/img/section-carousel/item2.png";
import item3 from "../../assets/img/section-carousel/item3.png";
import item4 from "../../assets/img/section-carousel/item4.png";
import item1Mobil from "../../assets/img/section-carousel/item-mobil-1.png";
import item2Mobil from "../../assets/img/section-carousel/item-mobil-2.png";
import item3Mobil from "../../assets/img/section-carousel/item-mobil-3.png";
import item4Mobil from "../../assets/img/section-carousel/item-mobil-4.png";
import imgPrev from "../../assets/img/section-carousel/prev.png";
import imgNext from "../../assets/img/section-carousel/next.png";
import backgroundImageDec from "../../assets/img/section-carousel/backgraund-carouse.png";
import useViewport from "../../components/GridResponsive/ViewResponsive";

export const SectionCarousel = () => {
  const detectMobile = useMobileDetect();
  const { width, breakpoint, breakpointT } = useViewport();
  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  };
  const styles = {
    carousel: {
      backgroundImage: `url(${backgroundImageDec})`,
      backgroundPosition: "center",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      paddingBottom: "120px",
      paddingTop: "10px",
      paddingLeft: "8%",
      paddingRight: "8%",
      marginBottom: "30px",
    },
    textH1: {
      padding: width < breakpoint ? "0px 0px 5px 20px" : "0px 30px 30px 30px",
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      color: "#3a436d",
      fontFamily: "MYRIADPRO , sans-serif",
      fontSize: width < breakpoint
        ? "28px"
        : (width > breakpoint && width < breakpointT ? "25px" : "45px"),
      fontWeight: "bold",
      fontStyle: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
      textAlign: width < breakpoint ? "left" : "",
    },
  };
  return (
    <Bounce right>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 text-center">
            <h1 style={styles.textH1}>
              Conoce más sobre Dec,{width < breakpoint ? <br /> : ""}
              te lo mostramos:
            </h1>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-12 col-md-12 col-sm-12"
            style={styles.carousel}
          >
            <OwlCarousel
              items={1}
              className="owl-theme"
              loop
              nav
              dots
              margin={8}
              autoplay
              responsive={responsive}
              navText={[
                "<img src='" + imgPrev + "' />",
                "<img src='" + imgNext + "' />",
              ]}
            >
              <div>
                <Image
                  src={width < breakpoint ? item1Mobil : item1}
                  fluid
                />
              </div>
              <div>
                <Image
                  src={width < breakpoint ? item2Mobil : item2}
                  fluid
                />
              </div>
              <div>
                <Image
                  src={width < breakpoint ? item3Mobil : item3}
                  fluid
                />
              </div>
              <div>
                <Image
                  src={width < breakpoint ? item4Mobil : item4}
                  fluid
                />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </Bounce>
  );
};
