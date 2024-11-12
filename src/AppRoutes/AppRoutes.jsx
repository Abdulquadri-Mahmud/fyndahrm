import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import Monitoring from '../pages/monitoring/Monitoring'
export default function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/monitoring' element={<Monitoring/>}/>
        </Routes>
    </Router>
  )
}
