import React, { useState } from 'react'
import LocNavbar from './../customComp/LocNavbar';
import TableComp from './../customComp/TableComp';
import ModalCom from './../customComp/ModalCom';
import { NavLink } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import FormComp from './../customComp/FormComp';

function MentorBatch() {
  const [displayMenModal, setdisplayMenModal] = useState(false)
  const tablehead =["No.",'Batch ID',"Batch Name","Technology","Start Date","End Date","Status","Batch Strength"]
  const tablebody =["1",'#123456',"UpLift","React JS",'',"","",""]
  const modal =['']

  const changeModal =() =>{setdisplayMenModal(true)}
  const hideModal =() =>{setdisplayMenModal(false)}

  const modTableHead =['No.','Employee ID','Employee Name','Attendance']
  const modTableBody =[1,'#1523456','ADSFA','','']
  const modalData=(
  <TableComp 
  tablehead={modTableHead}
  tabelbody={modTableBody}
  />
)
  return (
    <div>
              <LocNavbar />
              <TableComp tablehead={tablehead} tabelbody={tablebody}>
                  {/* <NavLink onClick={changeModal}>Attandance</NavLink> */}
                  <Button onClick={changeModal}>Attandance</Button>
              </TableComp>

              <ModalCom 
              modHead={"Attandance"}
              showModal={displayMenModal}
              closeModal={hideModal}
              >   
              <TableComp 
              tablehead={modTableHead}
              tabelbody={modTableBody}
              />
              </ModalCom>
    </div>
  )
}

export default MentorBatch