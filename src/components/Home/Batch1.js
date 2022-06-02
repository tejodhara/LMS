import React, { useState } from 'react';
import { Layout, Button, Input, Row, Col } from 'antd';
import image from "../asserts/Xnix-Line-Search 5.svg"
import Table1 from './Table1';
// import ModelComp from '../customComp/ModelComp';
import ModalCom from './../customComp/ModalCom';


const { Header, Footer, Sider, Content } = Layout;

const Batch1 = () => (
  <>
    <Layout>
      <Header>
      <Row justify="space-around">
            <Col span={13}>
                <label sytle={{color: '#FAA81D'}}>Batch List </label>
              {/* <img src={logo} sytle={{width:'80px',height:"54px"}} orientation="left" alt="/" /> */}
            </Col>
            <Col span={7}>
                <Input prefix={<img src={image} alt="/" />} placeholder="Search Mentor/Employee"  />
            </Col>
            <Col span={2}>
                <Button class="pull-right" ml-2 varient="bordered-primary" orientation="right" >+ New Batch</Button>
            </Col>
        </Row>
      </Header>
        <Content>
            <Table1 />
        </Content>
    </Layout>

  </>
);

export default Batch1;