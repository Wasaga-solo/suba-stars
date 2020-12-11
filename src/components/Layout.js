import React from 'react'
import NavBar from './NavBar'
import InnerNav from '../pages/InnerNav'
import Footer from './Footer'



const Layout = ({children}) => {
    return (
        <>
        <NavBar/>
        <InnerNav/>
           {children} 
        <Footer/>
        </>
    )
}

export default Layout
