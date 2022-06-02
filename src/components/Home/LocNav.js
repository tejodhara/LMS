import React, { useState } from "react";
import { Layout, Button, Input, Row, Col } from "antd";
import image from "../asserts/Xnix-Line-Search 5.svg";

const { Header } = Layout;

const LocNav = ({batch,val=true}) => (
  <>
    {/* const [hideButton, setHideButton] = useState(true) */}
    {/* let buttonFun = () => {return (setHideButton(props.status))} */}
    <Layout>
      <Header>
      <Row justify="space-around">
            <Col span={13}>
                <label sytle={{color: '#FAA81D'}}>{batch} List </label>
              {/* <img src={logo} sytle={{width:'80px',height:"54px"}} orientation="left" alt="/" /> */}
            </Col>
            <Col span={7}>
                <Input prefix={<img src={image} alt="/" />} sytle={{color: '#F4F5F8'}} placeholder="Search Mentor/Employee"  />
            </Col>
            {val ?
            <Col span={2}>
               <Button class="pull-right" ml-2 varient="bordered-primary" orientation="right">+ New {batch}</Button>
            </Col> :null}
        </Row>
      </Header>
    </Layout>
  </>
);

export default LocNav;
