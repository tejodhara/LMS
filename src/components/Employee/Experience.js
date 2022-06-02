import React from 'react'
import FormComp from './../customComp/FormComp';
import ButtonComp from './../customComp/ButtonComp';

const Experience = () => {
  return (
    <div>
        <FormComp label1='Company Name' label2='Years of Experience' />
        <FormComp label1='Date of Joining' label2='Date of Releving' />
        <FormComp dropdown1={true} dropDownList1={[]} label1='Designation' label2='Location' />
        <ButtonComp />
    </div>
  )
}

export default Experience