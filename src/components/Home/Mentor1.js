import React from 'react'
import LocNav from './LocNav';
import Table2 from './Table2';
// import NavbarComp from './../custom/NavbarComp';
import { useState } from 'react';
import FormComp from './../customComp/FormComp';

function Mentor1() {
  const [showModal, setshowModal] = useState(false)
  const [modalInputData, setmodalInputData]= useState([])

  const modalData =( <>
    <FormComp state1={false} label1={"Mentor Name"}/>
    <FormComp state1={false} label1={"Employee ID"}/>
    <FormComp state1={false} label1={"E-mail ID"}/>
    <FormComp dropdown1={true} dropDownList1={['Java','React JS','Angular JS']} state1={false} label1={"Skills"}/>
  </>)
  const displayModal = ()=>{
    setshowModal(true)
  }

  const closeModal =()=>{
    const arr1 = [...modalInputData]
    // if(rowidx===""){
    //   arr1.push(mData);
    // }else{
    //   arr1.splice(rowidx,1,mData)
    // }
    // setmodalInputData([...arr1])
    // setmData({
    //   id: "",
    //   mentorName: "",
    //   employeeId: "",
    //   emailId:"",
    //   skills: "",
    // })
    setshowModal(false)
  }

  const editModal =() =>{setshowModal(true)}

  return (
    <div>
        <LocNav batch="Mentor Modal" 
          showModal={showModal}
          displayModal={displayModal}
          closeModal ={closeModal}
          modalData={modalData}
          
        />
        {/* <NavbarComp batch="Mentor"/> */}
        <Table2 
          editModal={editModal}
        />
    </div>
  )
}

export default Mentor1