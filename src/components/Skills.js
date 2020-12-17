import React from "react"
import {
  FaMarker,
  FaReact,
  FaDev,
  FaMobileAlt,
  FaBalanceScaleLeft,
  FaHtml5,
  FaCss3,
  FaSass,
  FaDrupal,
  FaGithub,
  FaBootstrap
 } from 'react-icons/fa';
import {
  Container,
  Row,
  Tooltip,
  OverlayTrigger } from "react-bootstrap"
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'
configureAnchors({offset: -150, scrollDuration: 200})


function Skills() {
  return (
      <>
      <Container>
        <ScrollableAnchor id={'Competences'}>
          <h2 class="text-dark"><span class="mr-1"><FaMarker /></span>Compétences
          </h2>
        </ScrollableAnchor>
        <Row>
          <div class="col-12 col-md-6 col-lg-4 mb-1 text-center">
            <div class="card mx-1 mx-md-0" data-aos="flip-left">
              <h5 class="card-header bg-dark">
                <i class="icon-skills">
                  <FaDev />
                </i>
              </h5>
              <div class="card-body">
                <h5 class="card-title">Développement web
                </h5>
                <p class="card-text"><p>Développement de sites et de thèmes sur mesure</p>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 mb-1 text-center">
            <div class="card mx-1 mx-md-0" data-aos="flip-left">
              <h5 class="card-header bg-dark">
                <i class="icon-skills">
                  <FaMobileAlt />
                  </i>
              </h5>
              <div class="card-body">
                <h5 class="card-title">Responsive Web design</h5>
                <p class="card-text"><p>Intégration de sites peu importe le service utilisé (tablette, mobile...)</p>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 mb-1 text-center">
            <div class="card mx-1 mx-md-0" data-aos="flip-left">
              <h5 class="card-header bg-dark">
                <i class="icon-skills">
                  <FaBalanceScaleLeft />
                </i>
              </h5>
              <div class="card-body">
                <h5 class="card-title">Référencement naturel</h5>
                <p class="card-text"><p>Mettre en place les meilleurs pratiques SEO pour un référencement optimal</p></p>
              </div>
            </div>
          </div>
        </Row>
      </Container>
      <Container>
        <h3 class="pt-3">Technologies utilisées</h3>
        <i class="d-flex justify-content-around pt-2 pb-4">
          <OverlayTrigger
          placement={'top'}
          overlay={
          <Tooltip>
            HTML-5
          </Tooltip>
        }
      >
        <FaHtml5 className="icon-techno pr-1" data-aos="zoom-in"/>
        </OverlayTrigger>
        <OverlayTrigger
        placement={'top'}
        overlay={
        <Tooltip>
          CSS-3
        </Tooltip>
        }
      >
        <FaCss3 className="icon-techno pr-1" data-aos="zoom-in"/>
        </OverlayTrigger>
        <OverlayTrigger
        placement={'top'}
        overlay={
        <Tooltip>
          Sass
        </Tooltip>
        }
      >
        <FaSass  className="icon-techno pr-1" data-aos="zoom-in"/>
        </OverlayTrigger>
        <OverlayTrigger
        placement={'top'}
        overlay={
        <Tooltip>
          Bootstrap
        </Tooltip>
        }
      >
        <FaBootstrap className="icon-techno pr-1" data-aos="zoom-in"/>
        </OverlayTrigger>
        <OverlayTrigger
        placement={'top'}
        overlay={
        <Tooltip>
          React
        </Tooltip>
        }
      >
        <FaReact className="icon-techno pr-1" data-aos="zoom-in"/>
        </OverlayTrigger>
        <OverlayTrigger
        placement={'top'}
        overlay={
        <Tooltip>
          Drupal
        </Tooltip>
        }
      >
        <FaDrupal className="icon-techno pr-1" data-aos="zoom-in"/>
        </OverlayTrigger>
        <OverlayTrigger
        placement={'top'}
        overlay={
        <Tooltip>
          Github
        </Tooltip>
        }
      >
        <FaGithub  className="icon-techno pr-1" data-aos="zoom-in"/>
        </OverlayTrigger>
        </i>
        </Container>

       </>
    )
  }

  export default Skills