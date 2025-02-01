'use client'
import { usePathname } from 'next/navigation';
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import React from 'react'

const Layout = ({ children }) => {
    const pathName = usePathname()
    console.log(pathName);

    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout