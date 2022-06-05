import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Home/Header/Header'
import Hero from '../components/Home/Hero/Hero'
import Work from '../components/Home/Work/Work';

const Layout = () => {
    return (
        <div className='bg-body text-white pb-12 md:min-h-screen'>
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout