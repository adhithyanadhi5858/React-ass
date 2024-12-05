import React from 'react'
import Navs from '../components/header'
import { Outlet } from "react-router-dom";

function Root() {
  return (
    
    <div>
        <Navs/>

          <Outlet/>
    </div>
   
  )
}

export default Root;