import React from 'react'
import Hero from './components/Hero'
import { FloatingNav } from './components/ui/FloatingNav'
import { FaHome } from 'react-icons/fa'
import Grid from './components/Grid'


const home = () => {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <FloatingNav className="" navItems={[{ name: 'Home', link: '/', icon: <FaHome /> }]} />
        <Hero />
        <Grid />
      </div>
    </main>
  )
}

export default home
