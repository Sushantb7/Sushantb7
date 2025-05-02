import React, { useContext, useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Application from './pages/Applications'
import Applyjob from './pages/Applyjob'
import RecruiterLogin from './components/RecruiterLogin'
import { AppContext } from './context/Appcontext'
import Dashboard from './pages/Dashboard'
import AddJob from './pages/AddJob'
import ManageJobs from './pages/ManageJobs'
import ViewApplications from './pages/ViewApplications'
import'quill/dist/quill.snow.css'


const App = () => {
 const {showRecruiterLogin}=useContext(AppContext)

  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Application />} />
        <Route path="/apply-job/:id" element={<Applyjob />} />
        <Route path="/dashboard" element={<Dashboard/>} >
          <Route path="add-job" element={<AddJob />} />
          <Route path="manage-jobs" element={<ManageJobs />} />
          <Route path="view-applications" element={<ViewApplications />} />

        
        </Route>
      </Routes>
    </div>
  )
}   

export default App
