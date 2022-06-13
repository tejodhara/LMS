import { Breadcrumb, Button, Col, Layout, Row, Avatar } from 'antd';
import logo from "../asserts/logo1.png"
import { Input } from 'antd';
import "./MentorNavbar.css"
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import MultiCheck from '../customComp/MultiCheck';
import MentorBatch from './MentorBatch';
import Dashboard from './Dashboard';
import { useState } from 'react';

const { Header, Sider, Content } = Layout;
const { Search } = Input;
const onSearch = (value) => console.log(value);

const MentorNavbar = () => {

  const [dashboard, setdashboard] = useState(<Dashboard />)
  let changeTable1=() =>{
    setdashboard(<Dashboard />)
  }
  let changeTable=() =>{
    setdashboard(<MentorBatch />)
  }
  return  (
  <>
    <Layout>
      {/* Header  */}
        <Header >
          <Row justify="space-around">
            <Col span={8}>
              <img src={logo} sytle={{width:'80px',height:"54px"}} orientation="left" alt="/" />
            </Col>
            <Col span={8}>
            {/* <Input icon={<img src={require("../asserts/Xnix-Line-Search 5.png")} />} placeholder="Search Mentor/Employee"  /> */}
            <Input icon={<SearchOutlined />} className='inpNav' placeholder="Search Mentor/Employee"  />
            </Col>
            <Col span={8}>
              {/* <Button class="pull-right" ml-2='true' varient="bordered-primary">Logout</Button> */}
               <Avatar
                  style={{
                    backgroundColor: '#87d068',
                    float:'right'
                  }}
                  icon={<UserOutlined />}
                />
            </Col>
        </Row>
        </Header>
      <Layout>
        {/* Side Bar content */}
        <Sider >
          <img src={require("../asserts/dashboard (3).png")} alt="/" onClick={changeTable1}/> <br/>
          <img src={require("../asserts/group.png")} alt="/" onClick={changeTable}/> 
        </Sider>

        <Content
        style={{
          // margin: '24px 16px',
          margin: '0 8px',
          padding: 15,
          minHeight: '100%',
        }}>

          {/* Bread Crum */}
          <Breadcrumb
              style={{
                margin: '8px 0',
              }}
            > 
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item onChange={()=>{}}>
                  Batch
              </Breadcrumb.Item>
            </Breadcrumb>
          
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 460,
            }}
          >
           {dashboard}
          </div></Content>
      </Layout>
    </Layout>

  </>
);}

export default MentorNavbar;
