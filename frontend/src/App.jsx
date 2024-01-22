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
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import './App.css'

function App() {
  const { user } = useAuthContext()

  return (
    <div className='page-container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/login'
          element={!user ? <Login /> : <Navigate to='/missions' />}
        />
        <Route
          path='/signup'
          element={!user ? <SignUp /> : <Navigate to='/missions' />}
        />
        <Route path='/contact' element={<Contact />} />
        <Route
          path='/missions'
          element={user ? <MissionsIndex /> : <Navigate to='/login' />}
        />
        <Route path='/missions/new' element={<NewMission />} />
        <Route
          path='/missions/:id'
          element={!user ? <Login /> : <MissionDetails />}
        />
        <Route
          path='/missions/:id/edit'
          element={!user ? <Login /> : <EditMission />}
        />
      </Routes>
    </div>
  )
}

export default App
