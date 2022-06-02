import React from 'react'
import FormComp from './../customComp/FormComp';
import ButtonComp from './../customComp/ButtonComp';

const BankDetailsComp = () => {
  return (
    <div>
        <FormComp label1='Account No.' label2='Bank Name'/>
        <FormComp dropdown1={true} dropDownList1={['Saving','Personal']} label1='Account Type' label2='IFSC Code'/>
        <FormComp dropdown1={true} dropDownList1={['Saving','Personal']} label1='Branch' 
                dropdown2={true} dropDownList2={['Karnataka','Andhra Pradesh','Tamil Nadu']} label2='State'/>
        <ButtonComp />
    </div>
  )
}

export default BankDetailsComp