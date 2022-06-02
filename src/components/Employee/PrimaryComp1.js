import React from 'react'
import ButtonComp from './customComp/ButtonComp';
import DateComp from './customComp/DateComp';
import { Row, Col, Form, Button } from 'react-bootstrap';
import './PrimaryCom.css'
import DropDownComp from './../customComp/DropDownComp';
import FormComp from './../customComp/FormComp';

function PrimaryComp1() {
  return (
    <div className='d-flex row no-gutters'>
        <div className='col1 col-md-2' sm={{span: 6,offset:0}} md={{span: 6,offset:0}} lg={{span: 4,offset:2}}>
          <FormComp label1='Employee ID' label2='Employee Name' state={false}/>
          <DateComp date='Date of Joining'/>
          <FormComp label1='Email ID' label2='Blood Group' state={false}/>
          <DropDownComp label='Designation' value1='' value2='' value3=''   />
          <DropDownComp label='Nationality' value1='' value2='' value3=''/> <br/><br/>
          <Button className='btn1' variant="primary" type="submit" style={{width:'75px',float:'left'}}>
                        Submit
                    </Button>
        </div>
        <div  className='col2 col-md-2 ' sm={{span: 6,offset:0}} md={{span: 6,offset:0}} lg={{span: 4,offset:2}}> 
          <FormComp label1='Employee ID' label2='Employee Name' state={false}/>
          <DateComp date='Date of Joining'/>
          <FormComp label1='Email ID' label2='Blood Group' state={false}/>
          <DropDownComp label='Designation' value1='' value2='' value3=''   />
          <DropDownComp label='Nationality' value1='' value2='' value3=''/> <br/><br/>
          <Button className='btn2' variant="primary" type="submit" style={{width:'75px',float:'right'}}>
                        Submit
                    </Button>
        </div>
    </div>
  )
}

export default PrimaryComp1