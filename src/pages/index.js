import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from "../components/NavBar"
import HeroSection from "../components/HeroSection"
import AboutMe from "../components/AboutMe"
import Skills from "../components/Skills"
import Footer from "../components/Footer"
import AOS from "aos"
import "aos/dist/aos.css"


class IndexPage extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
      //disable: "mobile",
    })
  }

  render() {
    return (
      <>
      <NavBar />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Footer />
      </>
    )
  }
}

export default IndexPage
