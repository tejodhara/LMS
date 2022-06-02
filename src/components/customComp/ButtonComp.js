import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const ButtonComp = ({
  hidePrev=true,
  label2 ='Next',
  type2 = 'button',
  onclick1= ()=>{},
  onclick2= ()=>{},
  style1={},style2={}}) => {
  // const [hidePrev, sethidePrev] = useState(true)

  return (
    <div
    style={{
    //     width: "816px",
    //     height: "64px",

    //     margin: 'auto',

    //     paddingRight: '30px',

    //     border: '1px solid black',
        // position: 'fixed',
        // botton: '100px'
        

      }}
    >
        <Form style={{
        width: "770px",
        height: "64px",
        color: '#707070',
        paddingTop: '30px',
        margin: 'auto',
        justifyContent: 'center',
        paddingLeft: '10px',
        paddingRight: '10px',
        className: "",
        // position: 'absolute',
        // paddingBottom: '50px',
        // border: '1px solid black',


      }}>
            <Row className="mb-3">
                <Form.Group as={Col}>
                {hidePrev ? <Button variant="primary" type="button" onClick={onclick1} style={{width:'80px', float:'left',style1}}>
                        Previous
                    </Button>: null}
                </Form.Group>
                <Form.Group as={Col}>
                    <Button variant="primary" type={type2} onClick={onclick2} style={{width:'75px',float:'right',style2}}>
                        {label2}
                    </Button>
                </Form.Group>
            </Row>
         </Form>
    </div>
  )
}

export default ButtonComp