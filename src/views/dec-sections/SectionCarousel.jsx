import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Bounce} from 'react-reveal';
import useMobileDetect from 'use-mobile-detect-hook';

import item1 from '../../assets/img/section-carousel/item1.png';
import item2 from '../../assets/img/section-carousel/item2.png';
import item3 from '../../assets/img/section-carousel/item3.png';
import item4 from '../../assets/img/section-carousel/item4.png';
import item1Mobil from '../../assets/img/section-carousel/item-mobil-1.png';
import item2Mobil from '../../assets/img/section-carousel/item-mobil-2.png';
import item3Mobil from '../../assets/img/section-carousel/item-mobil-3.png';
import item4Mobil from '../../assets/img/section-carousel/item-mobil-4.png';
import imgPrev from '../../assets/img/section-carousel/prev.png';
import imgNext from '../../assets/img/section-carousel/next.png';

export const SectionCarousel = () => {

  const detectMobile = useMobileDetect();

  return (
    <Bounce right>
    <section id="carousel">
      <Container fluid>
        <Row>
          <Col lg={12}>
            <h1>
              Conoce más sobre Dec, te lo mostramos:
            </h1>
          </Col>
        </Row>
        <Row
         className="body-container"
        >
          <Col
            lg={12}
          >
            <OwlCarousel
              items={1}
              className="owl-theme"
              loop
              nav
              dots
              margin={8}
              autoplay
              navText={[
                "<img src='" + imgPrev + "' />",
                "<img src='" + imgNext + "' />",
              ]}
            >
              <div>
                <Image src={ detectMobile.isMobile()?item1Mobil:item1} fluid />
              </div>
              <div>
                <Image src={ detectMobile.isMobile()?item2Mobil:item2} fluid />
              </div>
              <div>
                <Image src={ detectMobile.isMobile()?item3Mobil:item3} fluid />
              </div>
              <div>
                <Image src={ detectMobile.isMobile()?item4Mobil:item4} fluid />
              </div>
            </OwlCarousel>
          </Col>
        </Row>
      </Container>
    </section>
    </Bounce>
  );
};
