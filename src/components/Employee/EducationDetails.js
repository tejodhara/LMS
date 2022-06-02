import React from 'react'
import FormComp from './../customComp/FormComp';
import ButtonComp from './../customComp/ButtonComp';
import SecondaryComp from './SecondaryComp';
import AddressDetails from './AddressDetails';

const EducationDetails = () => {
  return (
    <div>
      <FormComp dropdown1={true} dropDownList1={['B.E','Degree']} label1='Education Type' label2='Year of Passing'/>
      <FormComp dropdown2={true} dropDownList2={['University','Collage']} label1='Percentage' label2='University Name'/>
      <FormComp dropdown2={true} dropDownList2={['Karnataka','Andhra Pradesh','Tamil Nadu']} label1='Specialization' label2='State'/>
      <ButtonComp onclick1={()=>{<SecondaryComp />}} onclick2={()=>{<AddressDetails />}}/>
    </div>
  )
}

export default EducationDetails