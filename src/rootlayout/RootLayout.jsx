import React from 'react'
import NavUI from "../components/navUI";
import { Outlet } from 'react-router';
import Footer from '../components/footer';

const RootLayout = () => {
  return (
    <>
        <NavUI></NavUI>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default RootLayout