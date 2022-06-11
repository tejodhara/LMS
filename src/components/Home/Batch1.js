import React, { useState } from 'react';
import { Layout, Button, Input, Row, Col } from 'antd';
import image from "../asserts/Xnix-Line-Search 5.svg"
import Table1 from './Table1';
import ModalCom from './../customComp/ModalCom';
import FormComp from './../customComp/FormComp';


const { Header, Content } = Layout;


const Batch1 = () => {
  const [showModal, setshowModal] = useState(false)
  const [batchData, setbatchData] = useState([])
  const [addBatchData, setaddBatchData] = useState({
    id: '',
    mentorName: '',
    technologies:'',
    startDate: '',
    endDate: '',
  })
  const displayModal =()=>{
    setshowModal(true)
  }
  const closeModal =()=>{
    const arr1 = [...batchData]
    // if(rowidx===""){
    //   arr1.push(mData);
    // }else{
    //   arr1.splice(rowidx,1,mData)
    // }
    // setbatchData([...arr1])
    // addBatchData({
    //   id: "",
    //   mentorName: "",
    //   technologies: "",
    //   startDate:"",
    //   endDate: "",
    // })
    setshowModal(false)
  }

  let handleChange =(e)=>{
    setaddBatchData({...addBatchData,
    [e.target.name1]: e.target.value1
    })
  }

  
  
  let modalData = (
    <>
    <FormComp label1='Batch Name' state1={false} />
      <FormComp dropdown1={true} 
        name1={'mentorName'} value1={addBatchData.mentorName} onChange1={()=>{handleChange()}} 
        dropDownList1={["Chandan","Sathyam","Sai teja"]} label1='Mentor Name' state1={false} />
      <FormComp dropdown1={true} 
        name1={'technologies'} value1={addBatchData.technologies} onChange1={()=>{handleChange()}} 
        dropDownList1={["React JS","Angular","Java","Python"]} label1='Technologies' state1={false} />
      <FormComp label1='Start Date' type1={"Date"} state1={false} 
        name1={'startDate'} value1={addBatchData.startDate} onChange1={()=>{handleChange()}}
      />
      <FormComp label1='End Date' type1={"Date"} state1={false} 
        name1={'endDate'} value1={addBatchData.endDate} onChange1={()=>{handleChange()}}
      />
      </>
  );
  return(
  <>
    <Layout>
      <Header>
      <Row justify="space-around">
            <Col span={13}>
                <label sytle={{color: '#FAA81D'}}>Batch List </label>
              {/* <img src={logo} sytle={{width:'80px',height:"54px"}} orientation="left" alt="/" /> */}
            </Col>
            <Col span={8}>
                <Input prefix={<img src={image} alt="/" />} placeholder="Search Mentor/Employee"  />
            </Col>
            <Col span={2}>
                <Button class="pull-right" ml-2 varient="bordered-primary" orientation="right" onClick={displayModal}>+ New Batch</Button>
            </Col>
        </Row>
      </Header>
        <Content>
            <Table1 />
        </Content>
    </Layout>


    <ModalCom 
      showModal={showModal}
      closeModal={closeModal}
      modalData={modalData}
    /> 
  </>
);}

export default Batch1;