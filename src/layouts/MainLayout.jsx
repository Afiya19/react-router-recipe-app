import React from 'react'
import Navigation from '../components/Navigation'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <Navigation/>
      <main className='p-6'>
      <Outlet/>
      </main>
    </>
  )
}

export default MainLayout
