import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
const Navbar = () => {
    const pathName = usePathname()

    return (
        <div>
            {pathName !== '/login/loginadmin' ?
                (<li>
                    <Link href="/login/loginuser">Login Regular User</Link>
                </li>) :
                (
                    <ul className='login-menu flex justify-between'>

                        <li>
                            <Link href="/login/loginadmin">Login Admin</Link>
                        </li>

                    </ul>)
            }

        </div>
    )
}

export default Navbar