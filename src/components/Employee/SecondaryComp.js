import React, { useState } from 'react'
import FormComp from './../customComp/FormComp';
import ButtonComp from './../customComp/ButtonComp';
import PrimaryComp from './PrimaryComp';
import EducationDetails from './EducationDetails';


const SecondaryComp = () => {
  const [first, setfirst] = useState(false)
  let navCom1 =() =>{ setfirst(true); <EducationDetails />}
  return (
    <div>
        <FormComp label1='PAN No.' label2='Aadhar No.'/>
        <FormComp label1='Father Name' label2='Mother Name' />
        <FormComp label1='Spouce Name' label2='Passport No.' />
        <FormComp state1={false} dropdown1={true} dropDownList1={['Single','Unmarried']} label1='Marital Status'/>
        <ButtonComp onclick1={<PrimaryComp />} onclick2={navCom1} />
    </div>
  )
}

export default SecondaryComp