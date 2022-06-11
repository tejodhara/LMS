// import logo from './logo.svg';
import './App.css';
// import FormComp from './components/customComp/FormComp';
import TabNav from './components/Employee/TabNav';
import TabComp from './components/customComp/TabComp';
import 'antd/dist/antd.css'; 
import NavBar from './components/Home/NavBar';
import ModalCom from './components/customComp/ModalCom';
import TableComp from './components/customComp/TableComp';
import Login1 from './components/Login/Login1';
import MentorNavbar from './components/Mentor/MentorNavbar';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Mentor1 from './components/Home/Mentor1';
import Batch1 from './components/Home/Batch1';
import Request from './components/Home/Request';
import EmpNavbar from './components/Employee/EmpNavbar';
import Login from './components/Login/Login';



function App() {
  return (
    <div className="App">
{/*  */}
    {/* <NavBar /> */}
    {/* <TabComp /> */}
    {/* <ModalCom /> */}

    {/* <TableComp /> */}
{/* <Login1/> */}

    {/* <MentorNavbar /> */}

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login1 />} />
        <Route path='/admin' element={<NavBar />} />
        <Route path='/mentor' element={<MentorNavbar />} />
        <Route path='/employee' element={<EmpNavbar />} />
        <Route path='/register' element={<TabComp />} />

        <Route path="/batch" element={<Batch1 />}/>
        {/* <Route path='/mentor' element={<Mentor1 /> } />  */}
        <Route path ='/request' element={<Request />} />
      </Routes>
    </BrowserRouter>

{/* <Login /> */}
    </div>
  );
}

export default App;
