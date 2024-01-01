import React from 'react'
import NavLink from './navLink/navLink'

const Links = () => {
    
    const links = [
        {
            title : 'Home',
            path : '/',
        },
        {
            title : 'About',
            path : '/about',
        },
        {
            title : 'Contact',
            path : '/contact',
        },
        {
            title : 'Blog',
            path : '/blog',
        }
    ]

    const session = true
    const isAdmin = true
    
    return (
        <div className='flex items-center gap-x-9'>
            {
                links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))
            }{
                session ? (
                    <>
                    {
                    isAdmin && (
                        <NavLink item={{title : 'Admin', path : '/admin'}} />
                    )
                }
                <button className='text-lg'>Logout</button>
                </>
                ) : (
                    <NavLink item={{title : 'Login', path : '/login'}} />
                )
            }
        </div>
    )
}

export default Links
