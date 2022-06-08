import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalC(props) {
  const [open, setOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const handleOpen = () => {
    setrowidx('');
    setOpen(true)
  };
  const [mData,setmData] =useState({
    id: "",
    name1: "",
    age: '',
    phoneno:"",
  })
  const [rowidx, setrowidx] = useState()

  // const rows = [
  //   createData('Sai', 25, 8247802033),
  // ];

  const handleClose = () => {
    const arr1 = [...tableData]
    if(rowidx===""){
      arr1.push(mData);
    }else{
      arr1.splice(rowidx,1,mData)
    }
    setTableData([...arr1])
    setmData({
      id: "",
      name1: "",
      age: '',
      phoneno:"",
    })
    setOpen(false)
  };

  let handleChange =(e)=>{
    setmData({...mData,
    [e.target.name]: e.target.value
    })
  }
  let handleEdit =(id) =>{
    setrowidx(id)
    let data= {}
    tableData && tableData.map((item,idx)=>{
      if(idx === id){
        data=item;
      }
    })
    setmData({
      id: data.id,
      name1: data.name1,
      age: data.age,
      phoneno:data.phoneno,
    })
    setOpen(true);
  }

  let handleDelete =(id) =>{
    const arr1 = [...tableData]
    arr1.splice(id,1)
    setTableData(arr1)
  }
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Id
          </Typography>
          <TextField name='id' value={mData.id} onChange={handleChange} label="Outlined" variant="outlined" /> */}
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Name
          </Typography>
          <TextField name='name1' value={mData.name1} onChange={handleChange} label="Outlined" variant="outlined" />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Age
          </Typography>
          <TextField name='age' value={mData.age} onChange={handleChange} label="Outlined" variant="outlined" />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Phone Number
          </Typography>
          <TextField name='phoneno' value={mData.phoneno} onChange={handleChange} label="Outlined" variant="outlined" />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button autoFocus onClick={handleClose}>
             Add
            </Button>          
        </Typography>
        </Box>
      </Modal>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400,  }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell >Id</TableCell> */}
            <TableCell  >Name</TableCell>
            <TableCell align="right" >Age</TableCell>
            <TableCell align="right" >Phone No</TableCell>
            <TableCell align="right" >
              {/* <Button variant="contained" onClick={showAddComp}>Add</Button> */}
              <Button onClick={handleOpen}>Open modal</Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row,idx) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {row.id}
              </TableCell> */}
              <TableCell >{row.name1}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.phoneno}</TableCell>
              <TableCell align="right">
                <Button variant="contained" size="small" onClick={()=>handleEdit(idx)}>Edit</Button> 
                <Button variant="contained" size="small" onClick={()=>handleDelete(idx)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
