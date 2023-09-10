import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    const navList = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Product",
            href: "/product"
        },
        {
            name: "Learn",
            href: "/learm"
        }
    ]

  return (
    <div className='Nav flex justify-around items-center bg-black p-5'>
        <div className="logo">Nav</div>
        <ul className="navLinks flex justify-around">
            {navList.map((link) => {
                return(
                    <Link className='link mr-5' to={link.href}>{link.name}</Link>
                )
            })}
        </ul>
        <button className="btn bg-orange-600 rounded-full">Request Demo</button>
    </div>
  )
}

export default Nav