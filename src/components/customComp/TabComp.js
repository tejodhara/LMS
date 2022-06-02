import React from 'react';
import { Tabs } from 'antd';
import './TabComp.css';
import PrimaryComp from './../Employee/PrimaryComp';
import SecondaryComp from './../Employee/SecondaryComp';
import EducationDetails from './../Employee/EducationDetails';
import BankDetailsComp from './../Employee/BankDetailsComp';
import TechnicalSkillComp from './../Employee/TechnicalSkillComp';
import AddressDetails from './../Employee/AddressDetails';
import Experience from './../Employee/Experience';
import ContactComp from './../Employee/ContactComp';

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const TabComp = () => (
  <Tabs defaultActiveKey="1" onChange={onChange}>
    <TabPane tab="Primary Details" key="1">
      <PrimaryComp />
    </TabPane>
    <TabPane tab="Secondary Details" key="2">
      <SecondaryComp />
    </TabPane>
    <TabPane tab="Education Details" key="3">
      <EducationDetails />
    </TabPane>
    <TabPane tab="Address Details" key="4">
      <AddressDetails />
    </TabPane>
    <TabPane tab="Bank Details" key="5">
      <BankDetailsComp />
    </TabPane>
    <TabPane tab="Technical Skill" key="6">
      <TechnicalSkillComp/>
    </TabPane>
    <TabPane tab="Experience" key="7">
      <Experience/>
    </TabPane>
    <TabPane tab="Contact" key="8">
      <ContactComp/>
    </TabPane>
  </Tabs>
);

export default TabComp;