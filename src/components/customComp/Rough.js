// import React, { useState } from 'react';
// import 'antd/dist/antd.css';
// import './index.css';
// import {  Switch } from 'antd';

// const style ={background:"green"}
// const style1 ={background:"red"}
// const App = () => {
//   const [show, setShow] = useState(true);
//   const [show1, setShow1] = useState(true);

//   const onChange = (checked,checked1) => {
//     setShow(checked);
//   };

//   const onChange1 = (checked1) => {
//     setShow1(checked1);
//   };

//   return (
//     <>
//       <Switch onChange={onChange} checked={show} style={style} />    
//       <Switch onChange={onChange1} checked1={show1} style={{backgroundColor:'darkred',}}/>
//     </>
//   );
// };

// export default App;
// //boat

                                                      // avatar and bu
// import React from 'react';
// import 'antd/dist/antd.css';
// import './index.css';
// import { Button, Dropdown, Menu } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
// import { Avatar, Image } from 'antd';
// import { Modal } from 'react-bootstrap';

// const menu = (
//   <Menu
//     items={[
//       {
//         key: '1',
//         label: (
//           <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
//             Initial Strength
//           </a>
//         ),
//       },
//       {
//         key: '2',
//         label: (
//           <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
//             Drop
//           </a>
//         ),
//       },
//       {
//         key: '3',
//         label: (
//           <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
//             Abscond
//           </a>
//         ),
//       },
//       {
//         key: '4',
//         label: (
//           <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
//             Present Strength
//           </a>
//         ),
//       },
//     ]}
//   />
// );

// const App = () => (
//   <>
//     <Dropdown overlay={menu} placement="bottom" arrow>
//       <Button>bottom</Button>
//     </Dropdown>

//     <Avatar
//       style={{
//         backgroundColor: '#87d068',
//         float:'right'
//       }}
//       icon={<UserOutlined />}
//     />
//   </>
// );

// export default App;


//                                    // modified modal comp for empnavbar from bootstrap
// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="small"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Body closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
          
//         </Modal.Title><br />
//         <Button onClick={props.onHide} >Close</Button>
//       </Modal.Body>
//     </Modal>
//   );
// }

// function App1() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }


                                        //to make reusable table
import { Divider, Radio, Table } from 'antd';
import { useState } from 'react';
import { Badge, Button, Dropdown } from 'react-bootstrap';
import './Table1.css'
import InputCom from './../customComp/InputCom';
import FormComp from './../customComp/FormComp';

const styleEd ={
  bgcolor: 'none',

}


const Table1 = ({editModal,deleteModal}) => {
  const tech =['React JS','JavaScript','HTML']
  const columns = [
    {
      title: 'No.',
      dataIndex: 'no',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Batch ID',
      dataIndex: 'batchId',
  
    },
    {
      title: 'Batch Name',
      dataIndex: 'batchName',
    },
    {
      title: 'Mentor Name',
      dataIndex: 'mentorName',
    },
    {
      title: 'Technologies',
      dataIndex: 'technologies',
      // render:  ()=>{tech.map((idx,val)=>{return <Badge bg="primary" key={idx} >{val}</Badge>})},
      render: ()=>{return (
        <div>
          <Badge bg="primary">React</Badge>
          <Badge bg="primary">JavaScript</Badge>
      </div>
      )}
  
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      // render: ()=>{return (
      //   <span>
      // <InputCom state={false} dropdown={true} dropDownList={['In progress','Completed','To be started']}  style={{width:'5vw'}}/>
      //      <input type='dropdown' > <option> In Progress</option> <option>Completed</option><option> In Progress</option> </input>
      // </span>
      // )}
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: ()=>{return (
        <>
        <Button style={{backgroundColor: 'none'}} onClick={editModal}><i class="fa-solid fa-pen"></i></Button>  {'   '}
        <Button onClick={deleteModal}><i class="fa-solid fa-trash"></i></Button> 
         {/* <i class="fa-solid fa-trash"></i> */}
        </>
      )}
    },
  ];
  const data = [
    {
      key: '1',
      no: 1,
      batchId: '#154234653',
      batchName: 'uplift24',
      mentorName: 'Sathyam',
      technologies:'React',
      startDate: '14 mar 2022',
      endDate: '14 mar 2022',
      status: 'Completed',
      action: '',
    },

  ]; // rowSelection object indicates the need for row selection
  
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  const [selectionType, setSelectionType] = useState('checkbox');

  return (
    <div >
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
      </Radio.Group>

      {/* <Divider /> */}

      <Table responsive
        pagination={false}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}


                                                // reuse table
// import React from "react";
// import { Table } from "react-bootstrap";

// function TableComp({ tablehead, tabelbody, children , ...props}) {
//   const [selectionType, setSelectionType] = useState('checkbox');
//   return (
//     <div>
//       <Radio.Group
//         onChange={({ target: { value } }) => {
//           setSelectionType(value);
//         }}
//         value={selectionType}
//       >
//       </Radio.Group>

//       <Table responsive>
//         <thead>
//           <tr>
//             {tablehead.map((val, index) => (
//               <th key={index}> {val}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             {tabelbody.map((val, index) => (
//               <td key={index}> {val}</td>
//             ))}
//             {children}
//           </tr>
//         </tbody>
//       </Table>
//     </div>
//   );
// }

// export default TableComp;


