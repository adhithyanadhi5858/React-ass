import React from 'react'
import Navs from '../components/header'
import Footer from '../components/Footer'
import { Outlet } from "react-router-dom";

function Roots() {
  return (
    
    <div>
        <Navs/>


        <Footer/>
    </div>
   
  )
}

export default Roots;