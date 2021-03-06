import { Divider, Radio, Table } from 'antd';
import { useState } from 'react';
import { Badge, Dropdown } from 'react-bootstrap';
import './Table1.css'
import InputCom from './../customComp/InputCom';
import FormComp from './../customComp/FormComp';

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
      <> <i class="fa-solid fa-pen"></i> {'   '}
      <i class="fa-solid fa-trash"></i></>
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
  {
    key: '2',
    no: 2,
    batchId: '#154234653',
    batchName: 'uplift24',
    mentorName: 'Sathyam',
    technologies:'React',
    startDate: '14 mar 2022',
    endDate: '14 mar 2022',
    status: 'Completed',
    action: '',
  },
  {
    key: '3',
    no: 3,
    batchId: '#154234653',
    batchName: 'uplift24',
    mentorName: 'Sathyam',
    technologies:'React',
    startDate: '14 mar 2022',
    endDate: '14 mar 2022',
    status: 'Completed',
    action: '',
  },
  {
    key: '4',
    no: 4,
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

const Table1 = () => {
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

export default Table1;