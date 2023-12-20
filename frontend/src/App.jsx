import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import MissionsIndex from './pages/Missions/Index'
import NewMission from './pages/Missions/New'
import MissionDetails from './pages/Missions/Details'
import EditMission from './pages/Missions/Edit'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className='page-container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/missions' element={<MissionsIndex />} />
        <Route path='/missions/new' element={<NewMission />} />
        <Route path='/missions/:id' element={<MissionDetails />} />
        <Route path='/missions/:id/edit' element={<EditMission />} />
      </Routes>
    </div>
  )
}

export default App
