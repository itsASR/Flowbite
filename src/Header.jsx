import React from 'react'
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import logo from '../public/logo.svg'



function Header() {
    return (
        <>
            <header className='h-24 w-screen bg-red-400 flex justify-between items-center container mx-auto'>
                <img src={logo} className=''></img>
                <nav>
                    <ul className='flex [&>li]:px-2 font-medium'>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Products</li>
                        <li>Pages</li>
                        <li>Blog</li>
                        <li>Buy Now</li>
                    </ul>
                </nav>
                <div>
                    <ul className='flex [&>li]:px-2'>
                        <li><FaSearch /></li>
                        <li><FiUser /></li>
                        <li><FaRegHeart /></li>
                        <li><IoBagOutline /></li>
                    </ul>
                </div>
            </header>


        </>
    )
}

export default Header