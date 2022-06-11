import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { Button, Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


const Login = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div container >
      
<Card style={{ width: '50%', margin:'auto',marginTop:'30px' }} >
  <Card.Img variant="top" src={require("../asserts/logo.png")} />
  <Card.Body>
  <Card.Img variant="top" src={require("./../asserts/Artboard – 2.png")} />
    <Card.Title>Login</Card.Title>
    <Card.Text>

    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Form>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
</Form>
        </Form>

    </Card.Text>
    <Button type="submit">Login</Button>
    <Button variant="primary">Cancel</Button>
  </Card.Body>
</Card>
    </div>
    )
}

export default Login