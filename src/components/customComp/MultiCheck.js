import { TreeSelect } from 'antd';
import React, { useState } from 'react';
const { SHOW_PARENT } = TreeSelect;

const titleList =['React JS','Angular JS','Java Script','Java','Spring Boot']
const treeData1= 
[{ 
    value: '0-0',
key: '0-0',  
    title: titleList.map((val,key)=>{return val[key]}) ,
}]
console.log(treeData1);
const treeData = [
  {
    title: titleList[0],
    value: '0-0',
    key: '0-0',
  },
  {
    title: titleList[1],
    value: '0-1',
    key: '0-1',
  },
  {
    title: titleList[2],
    value: '0-2',
    key: '0-2',
  },{
    title: titleList[3],
    value: '0-3',
    key: '0-3',
  },{
    title: titleList[4],
    value: '0-4',
    key: '0-4',
  },
];

const MultiCheck = () => {
  const [value, setValue] = useState(['0-0']);

  const onChange = (newValue) => {
    console.log('onChange ', value);
    setValue(newValue);
  };

  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Please select',
    style: {
    //   width: '100%',
    width: "370px",
    height: "64px",
    textAlign: "left",
    fontFamily: 'normal normal normal 21px Open Sans',
    fontSize: '16px',
    color: '#707070',
    },
  };
  return <TreeSelect {...tProps} />;
};

export default MultiCheck;