import React, { useState, useEffect } from "react"
import { Navbar, Nav } from "react-bootstrap"
import { FaHome } from 'react-icons/fa';



function Header2() {
  const [header, setHeader] = useState("topPage")

  const listenScrollEvent = event => {
    if (window.scrollY < 73) {
      return setHeader("topPage")
    } else if (window.scrollY > 70) {
      return setHeader("scrollPage")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)

    return () => window.removeEventListener("scroll", listenScrollEvent)
  }, [])

  return (
    <>
    <Navbar className={header}  expand="lg" id="site-navbar">
      <Navbar.Brand className="text-primary font-weight-bold">
        <a href="https://www.instagram.com/cec_dm/">Cecile Henry</a>
        <a href="#Home"></a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link href="#Home"><FaHome className="text-white"/></Nav.Link>
          <Nav.Link href="#AproposdeMoi">Â propos de moi</Nav.Link>
          <Nav.Link href="#Competences">Mes compétences</Nav.Link>
          <Nav.Link href="#EcrisMoi">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
     </>
  )
}

export default Header2