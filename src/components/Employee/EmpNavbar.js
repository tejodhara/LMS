import { Breadcrumb, Button, Col, Layout, Row } from 'antd';
import logo from "../asserts/logo1.png"
import { Input } from 'antd';
import "./EmpNavbar.css"
import { SearchOutlined } from '@ant-design/icons';
import Dashboard from './../Mentor/Dashboard';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';

const { Header, Sider, Content } = Layout;

const { Search } = Input;

const onSearch = (value) => console.log(value);

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="small"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
          
        </Modal.Title><br />
        <Button onClick={props.onHide} >Close</Button>
      </Modal.Body>
    </Modal>
  );
}

const EmpNavbar = () => {
  const [modalShow, setModalShow] = useState(true);
  // modal to change password
  <MyVerticallyCenteredModal
  show={modalShow}
  onHide={() => setModalShow(false)} />

  return(
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
              <Button class="pull-right" ml-2='true' varient="bordered-primary">Logout</Button>
            </Col>

        </Row>

        </Header>
      <Layout>
        <Sider >
          <img src={require("../asserts/group.png")} onClick={()=>{}} alt="/" /> 
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
          >
            Content
{/* <Dashboard/> */}
          </div></Content>
      </Layout>
    </Layout>

  </>
);}

export default EmpNavbar;
