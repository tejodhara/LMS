import React from 'react'
import { Form } from 'react-bootstrap'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const DropdownCom = ({
    dropDownList=[],
}) => {

  return (
    <>
      <Form.Select aria-label="Default select example" style={{width:'370px'}} >
          {dropDownList.map((val,idx) => {
          return <option key={idx}>{val}</option>
          })}
      </Form.Select>
    </>
  )
}

export default DropdownCom