import React, { useState } from 'react'
import LocNavbar from './../customComp/LocNavbar';
import TableComp from './../customComp/TableComp';
import ModalCom from './../customComp/ModalCom';
import { NavLink } from 'react-bootstrap';
import FormComp from './../customComp/FormComp';
import { Switch } from 'antd';
import { Button, Dropdown, Menu } from 'antd';
import LocNav from './../Home/LocNav';

const style ={background:"#13BC07"}
const style1 ={background:"#CA0202"}
const attandanceModalSty ={margin:"auto",minWidth:'900px'}
// const style =(background)
function MentorBatch() {
  const [displayMenModal, setdisplayMenModal] = useState(false)

  // dropdwon for attendence
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              Initial Strength
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              Drop
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              Abscond
            </a>
          ),
        },
        {
          key: '4',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              Present Strength
            </a>
          ),
        },
      ]}
    />
  );
  
  // batch table content  
  const tablehead =["No.",'Batch ID',"Batch Name","Technology","Start Date","End Date","Status","Batch Strength"]
  const tablebody =["1",'#123456',"UpLift","React JS",'',"","",
  <> <Dropdown overlay={menu} placement="bottom" arrow>
    {/* <Button>bottom</Button>   */}
   <span> <i class="fa-solid fa-triangle-exclamation" style={{color:'#C9A805',fontSize:"15px",}}></i></span> 
  </Dropdown></>]


  // switch button 
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);

  const onChange = (checked) => {
    setShow(checked);
  };

  const onChange1 = (checked1) => {
    setShow1(checked1);
  };

  // to display attendence
  const changeModal =() =>{setdisplayMenModal(true)}
  const hideModal =() =>{setdisplayMenModal(false)}

  //modal table content
  const modTableHead =['No.','Employee ID','Employee Name','Attendance']
  const modTableBody =[1,'#1523456','ADSFA',<><Switch onChange={onChange} checked={show} style={style}/> <Switch onChange={onChange1} checked={show1} style={style1}/></>]

  // navigating to new table
  const modalData=(
  <TableComp 
  tablehead={modTableHead}
  tabelbody={modTableBody}
  />
  )
  return (
    <div>
              <LocNav
                batch="Batch"
                val ={false}
              />
              <TableComp tablehead={tablehead} tabelbody={tablebody}>
                  {/* <NavLink onClick={changeModal}>Attandance</NavLink> */}
                  <Button onClick={changeModal} style={{bordrer:"none"}}>Attandance</Button> 
                  <span > &gt;</span>
              </TableComp>

                    {/* Attandance modal component */}  
              <ModalCom 
              modHead={"Attandance"}
              showModal={displayMenModal}
              closeModal={hideModal}
              style={attandanceModalSty}
              size={'xl'}
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