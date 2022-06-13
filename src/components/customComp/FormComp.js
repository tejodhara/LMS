import { Input } from "antd";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import DropdownCom from "./DropdownCom";

// import './FormComp.css'
const FormComp = ({
    label1 = "",
    label2 = "",
    state1= true,
    className1 = "",
    placeholder1 = "",
    value1 = "",
    name1='',
    onChange1 = () => {},
    onClick1 = () => {},
    size = "default",
    style1 = {},
    status1 = "", //error or warning
    readOnly1 = false,
    type1 = "text",
    as='', // text area
    rows='',  //row for text area
    dropdown1=false,
    dropDownList1=[],

    className2 = "",
    placeholder2 = "",
    value2 = "",
    name2='',
    onChange2 = () => {},
    onClick2 = () => {},
    style2 = {},
    status2 = "", //error or warning
    readOnly2 = false,
    type2 = "text",
    dropdown2=false,
    dropDownList2=[],
}) => {

  
  return (
    <div>
      <Form 
        style={{
          width: "820px",
          height: "64px",
          textAlign: "left",
          fontFamily: 'normal normal normal 21px Open Sans',
          fontSize: '16px',
          color: '#707070',
          // paddingTop: '20px',
          paddingBottom:'auto',  
          margin: 'auto',
          justifyContent: '',
        }}
      >
        <Row style={{marginTop:'15px'}}>
          
          <Form.Group className="mb-3"  as={Col} controlId="formGridEmail">
            <Form.Label  className="control-label col-md-7">{label1}</Form.Label>
           { dropdown1 ? <DropdownCom dropDownList={dropDownList1} /> :
            <Form.Control 
              type={type1} 
              placeholder={placeholder1} 
              className ={className1}
              value={value1}
              name={name1}
              readOnly={readOnly1}
              onChange={onChange1}
              onClick={onClick1}
              style={{width:'370px', height:'',paddingTop: '10px',}}/>}
          </Form.Group>

          {state1?<Form.Group className="mb-3" as={Col} controlId="formGridPassword" >
            <Form.Label  className="control-label col-md-7">{label2}</Form.Label>
            {dropdown2 ? <DropdownCom dropDownList={dropDownList2} /> :
            <Form.Control  type={type2} placeholder={placeholder2} 
                          className ={className2}
                          value={value2}
                          name={name2}
                          readOnly={readOnly2}
                          onChange={onChange2}
                          onClick={onClick2}
                          style={{width:'370px', height:''}}/>}
          </Form.Group>: null}
        </Row>
      </Form>
    </div>
  );
};

export default FormComp;





// import React from "react";
// import { Col, Form, Row } from "react-bootstrap";

// const FormComp = ({
//     label1 = "",
//     label2 = "",
//     state= true,
    
// }) => {
//   return (
//     <div>
//       <Form 
//         style={{
//           width: "820px",
//           height: "64px",
//           textAlign: "left",
//           // fontFamily: 'normal normal normal 21px Open Sans',
//           fontSize: '16px',
//           color: '#707070',
//           paddingTop: '80px',
//           paddingBottom:'auto',  
//           margin: 'auto',
//           justifyContent: '',
//         }}
//       >
//         <Row className="mb-3">
//           <Form.Group as={Col} controlId="formGridEmail">
//             <Form.Label className="control-label col-md-7">{label1}</Form.Label>
//             <Form.Control type='text' style={{width:'370px', height:''}}/> 
//           </Form.Group>

//           {state?<Form.Group as={Col} controlId="formGridPassword" >
//             <Form.Label className="control-label col-md-7">{label2}</Form.Label>
//             <Form.Control type='text' style={{width:'370px', height:''}}/>
//           </Form.Group>: null}
//         </Row>
//       </Form>
//     </div>
//   );
// };

// export default FormComp;

