import React from 'react'
import { Form, Row, Col } from 'react-bootstrap';

const DateComp = ({
  date= "",
}) => {
  return (
    <div
    style={{
      width: "820px",
      height: "64px",
      textAlign: "left",
      fontFamily: 'normal normal normal 21px/28px Open Sans',
      fontSize: '16px',
      color: '#707070',
      paddingTop: '80px',
      margin: 'auto',
      // paddingLeft: '44px',
    }}>
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>{date}</Form.Label>
                <Form.Control type="date" placeholder="" style={{maxWidth:'370px', height:''}}/>
                </Form.Group>
            </Row>
        </Form>
    </div>
  )
}

export default DateComp