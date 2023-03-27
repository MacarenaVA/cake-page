import React from "react"
import { Form, Button } from "react-bootstrap"

function Contact() {
  return (
    <div>
      <h2>Contact us</h2>
      <p style={{ width: "30rem" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima atque
        ut ducimus necessitatibus ad quaerat natus quo, numquam sunt esse
        maiores voluptatum odio cumque, quisquam placeat mollitia assumenda
        sapiente itaque!
      </p>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label> Message</Form.Label>
          <Form.Control
            placeholder="Type your message here"
            as="textarea"
            rows={3}
          />
          <br />
          <Button variant="secondary" className="mb-3">
            Send
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Contact
