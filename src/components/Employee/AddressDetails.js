import React, { useState } from 'react'
import { FormLabel } from 'react-bootstrap';
import FormComp from './../customComp/FormComp';
import ButtonComp from './../customComp/ButtonComp';
import { Collapse } from 'antd';
const { Panel } = Collapse;


const AddressDetails = () => {
  const [first, setfirst] = useState('show')
  return (
    <div>
      {/* <Dropdown.Menu first>
        <Dropdown.Header>Dropdown header</Dropdown.Header>
        <Dropdown.Item eventKey="2">
          df
        </Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      </Dropdown.Menu> */}
      <Collapse expandIconPosition='right' ghost={true} hidden="false"
      style={{
        width: "820px",  margin:'auto', 
        // paddingLeft:'10px', marginTop:'50px',paddingTop:'10px'
        }}>
      <Panel >
        <FormComp dropdown1={true} dropDownList1={["","Married","Unmarried"]}  label1='Address Details' label2='Door No.'/>
        <FormComp label1='Street' label2='Locolality'/>
        <FormComp dropdown1={true} dropDownList1={[" ","Bangalore","Hyderabad","Ongole"]} type1='dropdown' 
          dropdown2={true} dropDownList2={["","Karnataka","Telangana","Andhra Pradesh"]}
          type2='dropdown' label1='City' label2='State'/>
        <FormComp label1='Pin Code' label2='Land Mark'/><br/>
        <FormLabel style={{float:'right'}}> Add + </FormLabel>
      </Panel>
      {/* <Card style={{width: "820px",
          height: "400px", margin:'auto', paddingLeft:'10px', marginTop:'50px',paddingTop:'10px'}} >
        <FormComp dropdown1={true} dropDownList1={["","Married","Unmarried"]}  label1='Address Details' label2='Door No.'/>
        <FormComp label1='Street' label2='Locolality'/>
        <FormComp dropdown1={true} dropDownList1={[" ","Bangalore","Hyderabad","Ongole"]} type1='dropdown' 
          dropdown2={true} dropDownList2={["","Karnataka","Telangana","Andhra Pradesh"]}
          type2='dropdown' label1='City' label2='State'/>
        <FormComp label1='Pin Code' label2='Land Mark'/>
        </Card> */}
         </Collapse>
        <ButtonComp />
    </div> 
  )
}         

export default AddressDetails