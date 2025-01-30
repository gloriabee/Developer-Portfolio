import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='px-8 py-4'>
            <ul className='flex justify-between'>
                <div className='logo'>
                    <h1>Logo</h1>
                </div>
                <div className="list-container">
                    <Link href='/' className='link'>Home</Link>
                    <Link href='/about' className='link'>About</Link>
                    <Link href='/portfolio' className='link'>Portfolio</Link>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
