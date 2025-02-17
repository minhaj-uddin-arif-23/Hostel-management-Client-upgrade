import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

function Layout() {
  return (
    <div className='w-full bg-sky-50/15'> 
      <header className='w-full mx-auto bg-[#fef7f7] z-50  top-0 fixed'>
        <Navbar />
      </header>
      <div className=''>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
