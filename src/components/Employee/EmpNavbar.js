// ant framework
import { Breadcrumb, Button, Col, Layout, Row } from 'antd';
import logo from "../asserts/logo1.png"
import { Input } from 'antd';
import "./EmpNavbar.css"
import { SearchOutlined } from '@ant-design/icons';
// import Batch from './Batch';
// import Batch1 from './Batch1';
// import Mentor from './Batch';
// import Mentor1 from './Mentor1';
// import { BrowserRouter, Link, Route, Switch, Routes } from 'react-router-dom';
// import Request from './Request';
// import ModelComp from '../custom/ModelComp';
// import BreadCrumComp from './BreadCrumComp';

const { Header, Sider, Content } = Layout;

const { Search } = Input;

const onSearch = (value) => console.log(value);
const EmpNavbar = () => (
  <>
  {/* <BrowserRouter > */}
    <Layout>
        <Header >
          <Row justify="space-around">
            <Col span={8}>
              <img src={logo} sytle={{width:'80px',height:"54px"}} orientation="left" alt="/" />
            </Col>
            <Col span={8}>
            {/* <Input icon={<img src={require("../asserts/Xnix-Line-Search 5.png")} />} placeholder="Search Mentor/Employee"  /> */}
            <Input icon={<SearchOutlined />} placeholder="Search Mentor/Employee"  />
            </Col>
            <Col span={8}>
              <Button class="pull-right" ml-2='true' varient="bordered-primary">Logout</Button>
            </Col>

        </Row>

        </Header>
      <Layout>
        <Sider >
        {/* <Button type="primary"  size="large" onClick={<Batch />}> <img src={require("../asserts/group.png")} alt="/" />  </Button> */}
         {/* <div>
          <nav>
          <Link to="/" >
            <img src={require("../asserts/group.png")} alt="/" /> 
            <pre>Batch</pre>
          </Link>
          <Link to="/mentor" >
            <img src={require("../asserts/team (4).png")} alt="/" /> 
            <pre>Mentor</pre> 
          </Link>
          <Link to="/request" >
            <img src={require("../asserts/add-user.png")} alt="/" /> 
            <pre>Request</pre>
          </Link></nav>
          </div> */}
          <img src={require("../asserts/group.png")} alt="/" /> 
            {/* <img src={require("../asserts/team (4).png")} alt="/" /> 
            <img src={require("../asserts/add-user.png")} alt="/" />  */}
        </Sider>
        <Content
        style={{
          // margin: '24px 16px',
          margin: '0 8px',
          padding: 15,
          minHeight: '100%',
        }}>
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
          >Content
            {/* <Routes>
              <Route path="/" element={<Batch1 />}/>
              <Route path='/mentor' element={<Mentor1 /> } /> 
              <Route path ='/request' element={<Request />} />
            </Routes>  */}
          </div></Content>
      </Layout>
    </Layout>
    {/* </BrowserRouter > */}
  </>
);

export default EmpNavbar;
