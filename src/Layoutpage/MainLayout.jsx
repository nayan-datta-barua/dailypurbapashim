import React from 'react'
// import Socialbar from '../helper/Socialbar'
import { Outlet } from 'react-router-dom'
// import Navbar from '../helper/Navbar'
import Navber from '../helper/Navber'
import MenuButton from '../helper/MenuButton'
import FooterPage from '../pages/FooterPage'


const MainLayout = () => {
  return (
   <> 
   {/* <Socialbar/> */}
   
   <Navber/>
   <MenuButton/>
   <Outlet/>
   <FooterPage/>
   
   </>
  )
}

export default MainLayout