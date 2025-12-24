import { useState } from 'react'
import HomePage from "./components/Home"
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import CheckUp from './components/CheckUp';
import Doctors from './components/Doctors';
import Articles from './components/Articles';
import ContactUs from './components/ContactUs';
import HospitalsNearby from './components/HospitalsNearby';
function App() {
   return (
  
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/dashboard' element={<Dashboard/>}  />
    <Route path='/doctors' element={<Doctors/>}  />
    <Route path='/checkup' element={<CheckUp/>}  />
    <Route path='/articles' element={<Articles/>}  />
    <Route path='/contactus' element={<ContactUs/>}  />
    <Route path='/hospitalsnearby' element={<HospitalsNearby/>}  />
    <Route path='/login' element={<Login/>}  />
   </Routes>
   </BrowserRouter>

  )
}

export default App
