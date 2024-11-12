import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import Monitoring from '../pages/monitoring/Monitoring'
import Sms from '../pages/sms/Sms'
import Phonebook from '../pages/Phonebook/Phonebook'
import Callrecording from '../pages/Callrecording/Callrecording'
import Browsermanagment from '../pages/Browsermanagment/Browsermanagment'
import Notification from '../pages/Notification/Notification'
import Location from '../pages/Location/Location'
import ConnectedDevice from '../pages/ConnectedDevice/ConnectedDevice'
import AccountActivation from '../pages/AccountActivation/AccountActivation'
import Settings from '../pages/Settings/Settings'

export default function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/monitoring' element={<Monitoring/>}/>
            <Route path='/sms' element={<Sms/>}/>
            <Route path='/phonebook' element={<Phonebook/>}/>
            <Route path='/call_recording' element={<Callrecording/>}/>
            <Route path='/browser_management' element={<Browsermanagment/>}/>
            <Route path='/notifications' element={<Notification/>}/>
            <Route path='/locations' element={<Location/>}/>
            <Route path='/connected_device' element={<ConnectedDevice/>}/>
            <Route path='/account_activity' element={<AccountActivation/>}/>
            <Route path='/settings' element={<Settings/>}/>
        </Routes>
    </Router>
  )
}
