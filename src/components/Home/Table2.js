import { Divider, Radio, Table } from 'antd';
import { useState } from 'react';
import { Badge } from 'react-bootstrap';
import './Table1.css'



const Table2 = ({editModal}) => {
  const [selectionType, setSelectionType] = useState('checkbox');
  
  const columns = [
    {
      title: 'No.',
      dataIndex: 'no',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Mentor Name',
      dataIndex: 'mentorName',
  
    },
    {
      title: 'Employee ID',
      dataIndex: 'employeeID',
    },
    {
      title: 'E-mail ID',
      dataIndex: 'emailId',
    },
    {
      title: 'Skills',
      dataIndex: 'skills',
      // render: () => {return( data.map((idx,val)=>{return <Badge bg="primary" key={idx}>{val.technologies}</Badge>}))}
      render: ()=>{return <Badge bg="primary">React</Badge>}
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: ()=>{return (
        <> <i class="fa-solid fa-pen" onClick={editModal}></i> {"  "}
        <i class="fa-solid fa-trash"></i></>
      )}
    },
  ];
  const data = [
    {
      key: '1',
      no: 1,
      mentorName: 'Sathyam',
      employeeID: '#154234653',
      emailId: 'sathyam@testyantra.com',
      skills:'React',
      action: '',
    },
    {
      key: '2',
      no: 2,
      mentorName: 'Sathyam',
      employeeID: '#154234653',
      emailId: 'sathyam@testyantra.com',
      skills:'React',
      action: '',
    },
    {
      key: '3',
      no: 3,
      mentorName: 'Sathyam',
      employeeID: '#154234653',
      emailId: 'sathyam@testyantra.com',
      skills:'React',
      action: '',
    },
    {
      key: '4',
      no: 4,
      mentorName: 'Sathyam',
      employeeID: '#154234653',
      emailId: 'sathyam@testyantra.com',
      skills:'React',
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
    </div>
  );
};

export default Table2;