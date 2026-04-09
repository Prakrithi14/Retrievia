import React from 'react'
import Home from './Modules/Users/UserComponents/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import URoutes from './Modules/Users/UserRoutes/URoutes'
import ARoutes from './Modules/Admin/AdminRoutes/ARoutes'
export default function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<URoutes/>}/>
        <Route path='/Admin*' element={<ARoutes/>}/>
        
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

