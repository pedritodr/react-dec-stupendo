import React, { useState } from 'react';
import { Container, Row, Col,Collapse} from 'react-bootstrap';
import {Fade,Slide } from 'react-reveal';
import arrowRight from '../../assets/img/section-plans/arrow-left-footer-plans.png';
import { FaAngleDown,FaAngleUp } from 'react-icons/fa';

export const SectionPlansBody = () => {

  const [openBusiness, setOpenBusiness] = useState(false);
  const [openEnterprise, setOpenEnterprise] = useState(false);
  const [openPlatinum, setOpenPlatinum] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <section id="plans-body" className="d-flex align-items-center">
      <Container fluid>
      <Fade bottom>
        <Row>
          <Col lg={12} className="text-center container-main">
            <div className="box">
              <div className="box-header">
                <h1 className="text-center title-developer">Cuenta</h1>
                <h1 className="text-center title-developer">Developer</h1>
                <div className="box-price-header align-items-center">
                <h2 className="text-center title-header-info">GRATIS</h2>
                <div className="text-center text-lg-center">
                  <a className="download-btn">Comenzar</a>
                </div>
                </div>
              </div>
              <div className="box-price align-items-center  pt-5">
                <h2 className="text-center pb-2 pt-5">GRATIS</h2>
                <div className="text-center text-lg-center  pt-5">
                  <a className="download-btn">Comenzar</a>
                </div>
              </div>
              <div className="box-info">
                <p>
                  La cuenta Developer gratuita te permite probar tus APIs
                  GRATIS, no expira, y tiene todas las features habilitadas de
                  un plan platinum. Para salir a producción con tu solución,
                  necesitas una cuenta API para que satisfaga tus necesidades.
                  También puedes iniciar directamente con cualquiera de nuestros
                  planes pagos, en los cuales tienes un trial de 15 días para
                  realizar tu integración.
                </p>
              </div>
            </div>

            <div className="box-simple">
              <div className="box-simple-header">
                <h1 className="text-center title-developer">API Business</h1>
                <div className="box-price-header align-items-center">
                <h2 className="text-center parrafo-price">$45/mes</h2>
                <hr></hr>
                <p className="parrafo-price text-center pb-1">$540 al año</p>
                <div className="text-center text-lg-center  pt-1">
                  <a className="download-btn2">Comenzar</a>
                </div>
                </div>
              </div>
              <div className="box-simple-price align-items-center  pt-5">
                <h2 className="text-center pt-2">$45/mes</h2>
                <hr></hr>
                <p className="text-info-box-p text-center">$540</p>
                <p className="text-info-box-p text-center">al año</p>
                <div className="text-center text-lg-center  pt-4">
                  <a className="download-btn2">Comenzar</a>
                </div>
              </div>
              <div className="box-simple-info-container">
              <div className="box-simple-info">
                <p className="text-center text-info-box">
                  1000 procesos por año
                </p>
              </div>
              <div className="box-simple-normal">
                <p className="text-center text-info-box">Storage de 50 GB </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Seguridad ISO 27.001
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Widget personalizado de aceptación simple
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Dashboard de control
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">DecSigner </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  PIN de seguridad en visualización
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  API de consulta de procesos
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Compatibilidad con firma acreditada
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  API de firma simple: Creación y firmado
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Retroalimentación de procesos en tiempo real
                </p>
              </div>
              <div className="box-simple-final">
                <p className="text-center text-info-box">
                  Documentación API disponible 24/7
                </p>
              </div>
            </div>
            <div className="box-simple-info-container-xs">
              <div className="box-simple-normal-xs">
                <p className="text-center">
                <p className="price text-center">
                  1000 procesos por año
                </p>
                </p>
              </div>

              <div className="box-simple-final-xs">
                <p className="text-center text-info-box-2">
                Ver Funciones
                <a
                    onClick={() => setOpenBusiness(!openBusiness)}
                   aria-controls="collapseBusiness"
                   aria-expanded={openBusiness}
                  className="arrow-dn"
                 >
               {!openBusiness? <FaAngleDown />:<FaAngleUp />}
               </a>
                </p>
              </div>
              </div>

              <Collapse in={openBusiness}>
              <div id="collapseBusiness">
              <div className="box-simple-info-resumen-2">
                <p className="text-center  text-info-box">
                Storage de 50 GB
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Seguridad ISO 27.001
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Widget personalizado de aceptación simple
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Dashboard de control
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">DecSigner </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  PIN de seguridad en visualización
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  API de consulta de procesos
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Compatibilidad con firma acreditada
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  API de firma simple: Creación y firmado
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Retroalimentación de procesos en tiempo real
                </p>
              </div>
              <div className="box-simple-final">
                <p className="text-center text-info-box">
                Documentación API disponible 24/7
                </p>
              </div>
               </div>
              </Collapse>
            </div>

            <div className="box-simple">
              <div className="box-simple-header">
                <h1 className="text-center title-developer">API Enterprise</h1>
                <div className="box-price-header align-items-center">
                <h2 className="text-center parrafo-price">$195/mes</h2>
                <hr></hr>
                <p className="parrafo-price text-center pb-1">$2340 al año</p>
                <div className="text-center text-lg-center  pt-1">
                  <a className="download-btn2">Comenzar</a>
                </div>
                </div>
                <div
                  className="text-center box-simple-recomendado"
                >
                  <p className="text-recomendado">Recomendado</p>
                </div>
              </div>

              <div className="box-simple-price align-items-center  pt-5">
                <h2 className="text-center pt-2">$195/mes</h2>
                <hr></hr>
                <p className="text-info-box-p  text-center">$2340</p>
                <p className="text-info-box-p  text-center">al año</p>
                <div className="text-center text-lg-center  pt-4">
                  <a className="download-btn2">Comenzar</a>
                </div>
              </div>
              <div className="box-simple-info-container">
              <div className="box-simple-info">
                <p className="text-center text-info-box">
                  3000 procesos por año
                </p>
              </div>
              <div className="box-simple-normal">
                <p className="text-center text-info-box">Storage de 100 GB </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Seguridad ISO 27.001
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Widget personalizado de aceptación simple
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Dashboard de control
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">DecSigner </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  PIN de seguridad en visualización
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  API de consulta de procesos
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Compatibilidad con firma acreditada
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  API de firma simple: Creación y firmado
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Retroalimentación de procesos en tiempo real
                </p>
              </div>
              <div className="box-simple-final">
                <p className="text-center text-info-box">
                  Documentación API disponible 24/7
                </p>
              </div>
              </div>
              <div className="box-simple-info-container-xs">
              <div className="box-simple-normal-xs">
                <p className="text-center">
                <p className="price text-center">
                  3000 procesos por año
                </p>
                </p>
              </div>
              <div className="box-simple-final-xs">
                <p className="text-center text-info-box-2">
                Ver Funciones
                <a
                    onClick={() => setOpenEnterprise(!openEnterprise)}
                   aria-controls="collapseEnterprice"
                   aria-expanded={openEnterprise}
                  className="arrow-dn"
                 >
               {!openEnterprise? <FaAngleDown />:<FaAngleUp />}
               </a>
                </p>
              </div>
              </div>
              <Collapse in={openEnterprise}>
              <div id="collapsePlatinum">
              <div className="box-simple-info-resumen-2">
                <p className="text-center  text-info-box">
                Storage de 100 GB
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Seguridad ISO 27.001
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Widget personalizado de aceptación simple
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Dashboard de control
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">DecSigner </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  PIN de seguridad en visualización
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  API de consulta de procesos
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Compatibilidad con firma acreditada
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  API de firma simple: Creación y firmado
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Retroalimentación de procesos en tiempo real
                </p>
              </div>
              <div className="box-simple-final">
                <p className="text-center text-info-box">
                Documentación API disponible 24/7
                </p>
              </div>
               </div>
              </Collapse>
            </div>

            <div className="box-simple">
              <div className="box-simple-header">
                <h1 className="text-center title-developer">API Platinum</h1>
                <div className="box-price-header align-items-center">
                <h2 className="text-center parrafo-price">$295/mes</h2>
                <hr></hr>
                <p className="parrafo-price text-center pb-1">$3540 al año</p>
                <div className="text-center text-lg-center  pt-1">
                  <a className="download-btn2">Comenzar</a>
                </div>
                </div>
              </div>
              <div className="box-simple-price align-items-center  pt-5">
                <h2 className="text-center pt-2">$295/mes</h2>
                <hr></hr>
                <p className="text-info-box-p  text-center">$3540</p>
                <p className="text-info-box-p  text-center">al año</p>
                <div className="text-center text-lg-center  pt-4">
                  <a className="download-btn2">Comenzar</a>
                </div>
              </div>
              <div className="box-simple-info-container">
              <div className="box-simple-info">
                <p className="text-center text-info-box">
                  5000 procesos por año
                </p>
              </div>
              <div className="box-simple-normal">
                <p className="text-center text-info-box">Storage de 200 GB </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Seguridad ISO 27.001
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Widget personalizado de aceptación simple
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Dashboard de control
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">DecSigner </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  PIN de seguridad en visualización
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  API de consulta de procesos
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Compatibilidad con firma acreditada
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  API de firma simple: Creación y firmado
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Retroalimentación de procesos en tiempo real
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Documentación API disponible 24/7
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Creación de firmas para persona jurídica
                </p>
              </div>
              <div className="box-simple-final">
                <p className="text-center text-info-box">
                  Customer Care representative
                </p>
              </div>
              </div>
              <div className="box-simple-info-container-xs">
              <div className="box-simple-normal-xs">
                <p className="text-center">
                <p className="price text-center">
                  5000 procesos por año
                </p>
                </p>
              </div>

              <div className="box-simple-final-xs">
                <p className="text-center text-info-box-2">
                Ver Funciones
                <a
                    onClick={() => setOpenPlatinum(!openPlatinum)}
                   aria-controls="collapsePlatinum"
                   aria-expanded={openPlatinum}
                  className="arrow-dn"
                 >
               {!openPlatinum? <FaAngleDown />:<FaAngleUp />}
               </a>
                </p>
              </div>
              </div>
              <Collapse in={openPlatinum}>
              <div id="collapsePlatinum">
              <div className="box-simple-info-resumen-2">
                <p className="text-center  text-info-box">
                Storage de 200 GB
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Seguridad ISO 27.001
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Widget personalizado de aceptación simple
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Dashboard de control
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">DecSigner </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  PIN de seguridad en visualización
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  API de consulta de procesos
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Compatibilidad con firma acreditada
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  API de firma simple: Creación y firmado
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Retroalimentación de procesos en tiempo real
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Documentación API disponible 24/7
                </p>
              </div>
              <div className="box-simple-normal-2">
                <p className="text-center text-info-box">
                  Creación de firmas para persona jurídica
                </p>
              </div>
              <div className="box-simple-final">
                <p className="text-center text-info-box">
                  Customer Care representative
                </p>
              </div>

               </div>
              </Collapse>
            </div>

            <div className="box-simple">
              <div className="box-simple-header">
                <h1 className="text-center title-developer">Personalizado</h1>
                <div className="box-price-header align-items-center">
                <h2 className="text-center parrafo-price-2 pt-3">¿Buscas un Plan</h2>
                <h2 className="text-center parrafo-price-2 pb-3">personalizado?</h2>
                <div className="text-center text-lg-center  pt-3">
                  <a className="download-btn2">Comenzar</a>
                </div>
                </div>
              </div>
              <div className="box-simple-price align-items-center  pt-3">
                <h3 className="text-center">¿Buscas un Plan</h3>
                <h3 className="text-center"> personalizado?</h3>
                <p className="price text-center">
                  ¿Tienes más inquietudes? ¡Llámanos!
                </p>
                <p className="price text-center">(02) 394-7210</p>
                <div className="text-center text-lg-center  pt-5">
                  <a className="download-btn">Contáctanos</a>
                </div>
              </div>
              <div className="box-simple-info-container">
              <div className="box-simple-info">
                <p className="text-center">
                  Nuestros ejecutivos de venta están disponibles para
                  proporcionarte información adicional sobre nuestros planes
                  existentes, y recomendarte el que se adapte mejor a tus flujos
                  de negocio.
                </p>
              </div>

              <div className="box-simple-final-2">
                <p className="text-center text-info-box">
                  Arma el plan a tu medida: Dec puede ser personalizado a la
                  cantidad de Storage y procesos que necesites llevar
                  anualmente.
                </p>
              </div>
              </div>
              <div className="box-simple-info-container-xs">
              <div className="box-simple-normal-xs">
                <p className="text-center">
                <p className="price text-center">
                  ¿Tienes más inquietudes? ¡Llámanos!
                </p>
                <p className="price text-center">(02) 394-7210</p>
                </p>
              </div>
              <div className="box-simple-final-xs">
                <p className="text-center text-info-box-2">
                Ver Funciones
                <a
                    onClick={() => setOpen(!open)}
                   aria-controls="collapsePersonalizado"
                   aria-expanded={open}
                  className="arrow-dn"
                 >
               {!open? <FaAngleDown />:<FaAngleUp />}
               </a>
                </p>
              </div>
              </div>
              <Collapse in={open}>
              <div id="collapsePersonalizado">
              <div className="box-simple-info-resumen">
                <p className="text-center">
                  Nuestros ejecutivos de venta están disponibles para
                  proporcionarte información adicional sobre nuestros planes
                  existentes, y recomendarte el que se adapte mejor a tus flujos
                  de negocio.
                </p>
              </div>
              <div className="box-simple-final-2">
                <p className="text-center text-info-box">
                  Arma el plan a tu medida: Dec puede ser personalizado a la
                  cantidad de Storage y procesos que necesites llevar
                  anualmente.
                </p>
              </div>
               </div>
              </Collapse>
            </div>
          </Col>
        </Row>
        </Fade>
        <Slide right>
        <Row id="footer-plans">

        <Col lg={5} xs={12} className="pt-5 order-0 d-flex align-items-center">
            <Row>
              <Col className="pt-5">
                <h2 className="text-left title-footer">
                El plan ideal para tí, al
                </h2>
                <h2 className="text-left title-footer">
                mejor precio.
                </h2>
                <p className="p-footer text-left">Hay una versión de Dec que se ajusta a tus necesidades y a tu presupuesto.</p>
                <p className="p-footer text-left">¿Aún no sabes cuál elegir?, comienza con tu prueba gratis.</p>
              </Col>

            </Row>
          </Col>
          <Col lg={7} xs={{ order: 2,span: 6 }} className=" text-right arrow-right">
            <img src={arrowRight} className="img-fluid" alt="" />
          </Col>
          <Col lg={{ order: 2,span: 12}} xs={{ order: 1,span: 6 }} className="pt-5 d-lg-flex flex-lg-column justify-content-center align-items-stretch">
                <div className="text-left text-lg-left  pt-5 pb-5">
                  <a className="download-btn-footer">Comienza Gratis</a>
                </div>
              </Col>
        </Row>

        </Slide>
      </Container>
    </section>

  );
};
