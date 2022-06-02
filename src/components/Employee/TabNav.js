import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import PrimaryComp from './PrimaryComp';
import SecondaryComp from './SecondaryComp';
import EducationDetails from './EducationDetails';

const TabNav = () => {
  const [key, setKey] = useState('PrimaryComp');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="PrimaryComp" title="Primary Details">
        <PrimaryComp />
      </Tab>
      <Tab eventKey="SecondaryComp" title="Secondary Details">
        <SecondaryComp />
      </Tab>
      <Tab eventKey="EducationDetails" title="Educational Details" >
        <EducationDetails />
      </Tab>
    </Tabs>
  );
}


export default TabNav