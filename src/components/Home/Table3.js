import { Radio, Table } from 'antd';
import { useState } from 'react';
import { Button, FormControl, InputGroup, FormLabel } from 'react-bootstrap';
import './Table1.css'
import ModalCom from './../customComp/ModalCom';
import FormComp from './../customComp/FormComp';


const Table3 = () => {
  const [selectionType, setSelectionType] = useState('checkbox');
  const [showModal, setshowModal] = useState(false)
  const [showRejectModal, setshowRejectModal] = useState(false)


  const modalData =(<>
    <FormComp label1='Batch Name' state1={false} dropdown1={true} dropDownList1={["","uplift1","uplift2",]}/>
    <FormComp label1='Batch ID' state1={false} dropdown1={true} dropDownList1={["","#123456","#23456",]}/>
    </>
  )

  const modalRejectData=(<>
    {/* <FormComp label1='Reason' state1={false} as="textarea" rows='8' /> */}
    <FormLabel>Reason</FormLabel><br/>
    <FormControl as="textarea"  aria-label="With textarea" />
  </>)
  // logic should write
  let approve = () =>{setshowModal(true)}
  let reject = () =>{setshowRejectModal(true)}
  let closeModal=() =>{
    setshowModal(false) 
    setshowRejectModal(false)
  }
  
  const columns = [
    {
      title: 'No.',
      dataIndex: 'no',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Employee ID',
      dataIndex: 'employeeID',
    },
    {
      title: 'Employee Name',
      dataIndex: 'employeeName',
  
    },
    {
      title: 'YOP',
      dataIndex: 'yop',
    },
    {
      title: 'Percentage',
      dataIndex: 'percentage',
    },
    {
      title: 'Experience',
      dataIndex: 'experience',
    },
    {
      title: 'Contact No.',
      dataIndex: 'contactNo',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: ()=>{return (
        <> <Button style={{color:'#00811A',backgroundColor:'#00951E1A',border:'1px solid #00811A80'}} onClick={()=>{approve()}}>Approve </Button> {"  "}
        <Button style={{color:'#CE000E',backgroundColor:'#CE000E1A',border:'1px solid #B2000C80'}} onClick={()=>{reject()}}>Reject </Button></>
      )}
    },
  ];
  const data = [
    {
      key: '1',
      no: 1,
      employeeID:'#56789423',
      employeeName: 'Varun',
      yop: 2022,
      percentage: '80%',
      experience:'Fresher',
      contactNo: 1234567890,
      action: '',
    },
    {
      key: '2',
      no: 2,
      employeeID:'#56789423',
      employeeName: 'Varun',
      yop: 2022,
      percentage: '80%',
      experience:'Fresher',
      contactNo: 1234567890,
      action: '',
    },
    {
      key: '3',
      no: 3,
      employeeID:'#56789423',
      employeeName: 'Varun',
      yop: 2022,
      percentage: '80%',
      experience:'Fresher',
      contactNo: 1234567890,
      action: '',
    },
    {
      key: '4',
      no: 4,
      employeeID:'#56789423',
      employeeName: 'Varun',
      yop: 2022,
      percentage: '80%',
      experience:'Fresher',
      contactNo: 1234567890,
      action: '',
    },
  ]; 
  
  // rowSelection object indicates the need for row selection
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

  return (
    <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
      </Radio.Group>

      {/* <Divider /> */}

      <Table 
        pagination={false}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />

      <ModalCom 
        modHead ='Change Status'
        btnType='Submit'
        showModal={showModal}         // to display the modal it takes boollean as input
        modalData={modalData}        // modal children data
        closeModal={closeModal}     // close the modal
      />
      <ModalCom 
        modHead ='Reason for Rejection'
        btnType='Submit'
        showModal={showRejectModal}         // to display the modal it takes boollean as input
        modalData={modalRejectData}        // modal children data
        closeModal={closeModal}     // close the modal
      />
    </div>
  );
};

export default Table3;