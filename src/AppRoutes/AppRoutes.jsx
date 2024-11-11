import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
export default function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
        </Routes>
    </Router>
  )
}
