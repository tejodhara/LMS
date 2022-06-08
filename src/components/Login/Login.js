import React from 'react'
import { Form } from 'react-bootstrap';

const Login = () => {
  return (
    <div>
        <Form>

        <Form.Label htmlFor="inputEmployeeID">Employee ID</Form.Label>
  <Form.Control
    type="text"
    id="inputEmployeeID"
    aria-describedby="passwordHelpBlock"
  />
    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
  <Form.Control
    type="password"
    id="inputPassword5"
    aria-describedby="passwordHelpBlock"
  />
        </Form>
    </div>
    )
}

export default Login