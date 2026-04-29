import React from 'react'
import Sidebar from '../AdminComponents/Sidebar'
import AdminLogin from '../AdminComponents/AdminLogin'
import AdminDashboard from '../AdminComponents/AdminDashboard'
import { Route, Routes } from 'react-router-dom'
import ViewUser from '../AdminComponents/ViewUser'
import AddCategory from '../AdminComponents/AddCategory'
import ViewCategory from '../AdminComponents/ViewCategory'
import ManageClaims from '../AdminComponents/ManageClaims'
import ManageExpiredItems from '../AdminComponents/ManageExpiredItems'
export default function ARoutes() {
  return (
    <div>
      <Sidebar/>
      <Routes>
        <Route path='/AdminLogin' element={<AdminLogin/>} />
        <Route path='/ViewUser' element={<ViewUser/>} />
        <Route path='/AddCategory' element={<AddCategory/>} />
        <Route path='/ManageClaims' element={<ManageClaims/>} />
        <Route path='/ViewCategory' element={<ViewCategory/>} />
        <Route path='/ManageExpiredItems' element={<ManageExpiredItems/>} />
        <Route path='/' element={<AdminDashboard/>} />
      
      </Routes>
    </div>
  )
}
