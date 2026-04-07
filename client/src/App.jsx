import React from 'react'
import Topbar from './Modules/Users/UserComponents/Topbar'
import Home from './Modules/Users/UserComponents/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import URoutes from './Modules/Users/UserRoutes/URoutes'
export default function App() {
  return (
    <div>
      <Topbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<URoutes/>}/>
        
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

