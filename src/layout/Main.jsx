import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'

const Main = () => {
  return (
    <div className="dark:bg-slate-600">
      <Navbar />
      <Outlet></Outlet>
    </div>
  )
}

export default Main
