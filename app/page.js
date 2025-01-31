'use client'
import React from 'react'

import { useRouter } from 'next/navigation'

const home = () => {
  const router = useRouter()

  const navigate = (page) => {
    router.push(page)
  }

  return (
    <section>
      <h1>useRouter</h1>
      <button className='border px-2 py-4' onClick={() => navigate('about')}>Go to About Page</button>
      <button className='border px-2 py-4' onClick={() => navigate('login')}>Go to Login Page</button>
    </section>
  )
}

export default home
