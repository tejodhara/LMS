import React from 'react'
import { Form } from 'react-bootstrap'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const DropDownComp = ({
    label = "",
    value1 = "",
    value2 = "",
    value3 = "",
    dropDownList=[],
}) => {

  return (<>
     {/* <div
    style={{
        width: "820px",
        height: "64px",
        textAlign: "left",
        fontFamily: 'normal normal normal 21px/28px Open Sans',
        fontSize: '16px',
        color: '#707070',
        paddingTop: '80px',
        margin: 'auto',
        
      }}> */}
        <Row className="mb-3 " style={{
          width: "820px",
          height: "64px",
          textAlign: "left",
          fontFamily: 'normal normal normal 21px/28px Open Sans',
          fontSize: '16px',
          color: '#707070',
          paddingTop: '80px',
          margin: 'auto',
          
        }}>
            <Form.Group as={Col}>
            <Form.Label class="control-label col-md-7">{label}</Form.Label>
            <Form.Select aria-label="Default select example" style={{maxWidth:'370px', height:'',display: 'inline'}}>
                {/* <option>Open this select me<Form.Group as={Col}>nu</option> */}
                <option value="1">{value1}</option>
                <option value="2">{value2}</option>
                <option value="3">{value3}</option>
            </Form.Select>

            <Form.Select style={{width:'100%'}} >
               {dropDownList.map((val,idx) => {
               return <option key={idx}>{val}</option>
               })}
            </Form.Select>
            </Form.Group>
        </Row>
    {/* </div> */}</>
  )
}

export default DropDownComp