import React from 'react'
import FormComp from './../customComp/FormComp';
import ButtonComp from './../customComp/ButtonComp';

const ContactComp = () => {
  return (
    <div>
        <FormComp label1='Contact Type' label2='Contact No' />
        <ButtonComp label2='Submit' type2='Submit'/>
    </div>
  )
}

export default ContactComp