import React, { useState } from "react"

import { Form, Button, Col, Row, Container } from "react-bootstrap"

const FormContact = () => {
  const [formState, setFormState] = useState({
    prenom: "",
    nom: "",
    email: "",
    tel: "",
    demande: "",
  })

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", ...formState }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  return (
    <>

    <Container data-aos="fade-up">
      <Row>
        <Form
          onSubmit={handleSubmit}
          name="devis"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
        <input type="hidden" name="form-name" value="devis" />
          <Row>
            <Col md="6">
              <Form.Control
                id="prenom"
                type="text"
                name="prenom"
                onChange={handleChange}
                value={formState.prenom}
                placeholder="Prénom"
              />
            </Col>
            <Col md="6">
              <Form.Control
                id="nom"
                type="text"
                name="nom"
                onChange={handleChange}
                value={formState.nom}
                placeholder="Nom"
              />
            </Col>
          </Row>
          <Form.Group controlId="exampleForm.ControlInput1">
            {/*<Form.Label>Email address</Form.Label>*/}
            <Form.Control
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              value={formState.email}
              placeholder="Email@exemple.com"
            />
          </Form.Group>
          <Form.Control
            id="tel"
            type="text"
            name="tel"
            onChange={handleChange}
            value={formState.tel}
            placeholder="Numéro de téléphone"
          />
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows="3"
              name="demande"
              id="demande"
              onChange={handleChange}
              value={formState.demande}
              placeholder="Votre demande"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mb-2">
            Envoyer
          </Button>
        </Form>
        </Row>
      </Container>
    </>
  )
}

export default FormContact
