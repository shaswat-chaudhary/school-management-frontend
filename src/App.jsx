import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AddSchool } from './pages/AddSchool'
import { ShowSchool } from './pages/ShowSchool'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/add-school' element={<AddSchool />} />
        <Route path='/show-schools' element={<ShowSchool />} />
      </Routes>
    </div>
  )
}

export default App
