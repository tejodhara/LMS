import React from 'react'
import FormComp from './../customComp/FormComp';
import ButtonComp from './../customComp/ButtonComp';

const TechnicalSkillComp = () => {
  return (
    <div>
        
        <FormComp label1='Skill Type' label2='Skill Rating' />
        <FormComp label1='Year of Experience (over skill)' state1={true}/>

        <ButtonComp />
    </div>
  )
}

export default TechnicalSkillComp