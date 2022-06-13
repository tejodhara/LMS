import './App.css';
import 'antd/dist/antd.css'; 
import NavBar from './components/Home/NavBar';
import ModalCom from './components/customComp/ModalCom';
import TableComp from './components/customComp/TableComp';
import Login1 from './components/Login/Login1';
import MentorNavbar from './components/Mentor/MentorNavbar';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Batch1 from './components/Home/Batch1';
import Request from './components/Home/Request';
import EmpNavbar from './components/Employee/EmpNavbar';
import PrimaryComp from './components/Employee/PrimaryComp';
import SecondaryComp from './components/Employee/SecondaryComp';
import EducationDetails from './components/Employee/EducationDetails';
import TechnicalSkillComp from './components/Employee/TechnicalSkillComp';
import AddressDetails from './components/Employee/AddressDetails';
import Experience from './components/Employee/Experience';
import ContactComp from './components/Employee/ContactComp';
import BankDetailsComp from './components/Employee/BankDetailsComp';
import TabComp from './components/customComp/TabComp';


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

        <Route path ='/primary' element={<PrimaryComp />} />
        <Route path ='/secondary' element={<SecondaryComp />} />
        <Route path ='/education' element={<EducationDetails />} />
        <Route path ='/address' element={<AddressDetails />} />
        <Route path ='/bank' element={<BankDetailsComp />} />
        <Route path ='/technical' element={<TechnicalSkillComp/>} />
        <Route path ='/experience' element={<Experience/>} />
        <Route path ='/contact' element={<ContactComp/>} />
      </Routes>
    </BrowserRouter>

{/* <Login /> */}
    </div>
  );
}

export default App;
