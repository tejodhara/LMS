import React, { useState } from 'react'
import FormComp from './../customComp/FormComp';
import ButtonComp from './../customComp/ButtonComp';
import SecondaryComp from './SecondaryComp';
import { useNavigate } from 'react-router-dom';

function PrimaryComp() {
  const [primaryInfo, setprimaryInfo] = useState({
    employeeId: '',
    employeeName: '',
    dateofJoining: '',
    dateOfBirth: '',
    emailId: '',
    bloodGroup: '',
    gender: '',
    nationality:'',
    employeeStatus:'',
  })
  const navigate = useNavigate();
  return (
    <div>
      <FormComp  label1='Employee ID' label2='Employee Name' />
      <FormComp type1={"date"} type2={"date"} label1='Date of Joining' label2='Date of Birth' />
      <FormComp label1='Email ID' label2='Blood Group' />
      <FormComp dropdown1={true} dropDownList1={['Front end','Back end','Full stack']} label1='Designation' 
                dropdown2={true} dropDownList2={['Male','Female',]} label2='Gender' />
      <FormComp dropdown1={true} dropDownList1={['Indian','others',]} label1='Nationality' 
                dropdown2={true} dropDownList2={['Trinee','Employee',]} label2='Employee Status' />   
      <ButtonComp onclick2={()=>{}}/>       {/*navigate('/secondary')*/}
    </div>
  )
}

export default PrimaryComp