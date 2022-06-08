import { Input } from "antd";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import DropdownCom from "./DropdownCom";

// import './FormComp.css'
const InputCom = ({
    label1 = "",
    state= true,
    className = "",
    placeholder = "",
    value1 = "",
    onChange = () => {},
    onClick = () => {},
    size = "default",
    style = {},
    status = "", //error or warning
    readOnly = false,
    type = "text",
    as='', // text area
    rows='',  //row for text area
    dropdown=false,
    dropDownList=[],
}) => {

  
  return (
    <div style={{display:'inline'}}>
      <Form >
        <Row>
          <Form.Group className="mb-3"  as={Col} controlId="formGridEmail">
            <Form.Label  className="control-label col-md-7">{label1}</Form.Label>
           { dropdown ? 
           <DropdownCom dropDownList={dropDownList} /> :
            //  dropdownCom1(dropDownList):
            <Form.Control 
              type={type} 
              placeholder={placeholder} 
              className ={className}
              // value={value1}
              readOnly={readOnly}
              onChange={onChange}
              onClick={onClick}
              style={{width:'370px', height:'',paddingTop: '10px',display:'inline'}}/>}
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
};

export default InputCom;