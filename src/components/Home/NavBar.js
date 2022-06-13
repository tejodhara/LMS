// ant framework
import { Breadcrumb, Button, Col, Layout, Row } from 'antd';
import logo from "../asserts/logo1.png"
import { Input } from 'antd';
import "./NavBar.css"
import { SearchOutlined } from '@ant-design/icons';
import Batch1 from './Batch1';
import Mentor1 from './Mentor1';
import { BrowserRouter, Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Request from './Request';
import { useState } from 'react';
import Login1 from './../Login/Login1';


const { Header, Sider, Content } = Layout;

const { Search } = Input;

const onSearch = (value) => console.log(value);
const NavBar = () => {
  const [displayComp, setdisplayComp] = useState(true)
  const [displayComp1, setdisplayComp1] = useState(false)
  const [navComp, setnavComp] = useState(<Batch1 />)
  const [breadcrum, setbreadcrum] = useState("Batch")
  
  const batchNav =() =>{
    setnavComp(<Batch1 />)
    setbreadcrum("Batch")
  }
  const mentorNav =() =>{
    setnavComp(<Mentor1 />)
    setbreadcrum("Mentor")
  }
  const requestNav =() =>{
    setnavComp(<Request />)
    setbreadcrum("Request")
  }

const navigate =useNavigate(); 
  return (
  <>

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
              <Button class="pull-right" ml-2='true' varient="bordered-primary" onClick={()=>{navigate('/')}}>Logout</Button>
            </Col>

        </Row>

        </Header>
      <Layout>
        <Sider >
          
        {/* <Button type="primary"  size="large" onClick={<Batch />}> <img src={require("../asserts/group.png")} alt="/" />  </Button> */}
         {/* <div>
          <nav>
          <Link to="/batch" >
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

          {/* <Button onClick={batchNav} style={{bordor: 'none',}}>
               <img src={require("../asserts/group.png")}  alt="/" /> 
          </Button>
          <Button onClick={mentorNav} style={{bordor: 'none',}}>
             <img src={require("../asserts/team (4).png")} navigate='/mentor' alt="/" /> 
          </Button>
          <Button onClick={requestNav} style={{bordor: 'none',}}>
            <img src={require("../asserts/add-user.png")} navigate='/request' alt="/" /> 
          </Button> */}

          <img src={require("../asserts/group.png")} onClick={batchNav} alt="/" /> 
          <img src={require("../asserts/team (4).png")} onClick={mentorNav} alt="/" /> 
          <img src={require("../asserts/add-user.png")} onClick={requestNav}  alt="/" /> 
        </Sider>
        <Content
        style={{
          // margin: '24px 16px',
          margin: '0 8px',
          padding: 15,
          minHeight: '100%',
        }}>
          <Breadcrumb separator=">"
              style={{
                margin: '8px 0',
              }}
            > 
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item onChange={()=>{}}>
                  {breadcrum}
              </Breadcrumb.Item>
            </Breadcrumb>
          
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 460,
            }}
          >
            {/* <Navigate to="/batch" replace={true} /> */}
            {/* <Routes> */}
              {/* <Route path="/batch" element={<Batch1 />}/>
              <Route path='/mentor' element={<Mentor1 /> } /> 
              <Route path ='/request' element={<Request />} /> */}
            {/* </Routes>  */}

            {navComp}


          </div>
          </Content>
      </Layout>
    </Layout>

  </>
)}

export default NavBar;
