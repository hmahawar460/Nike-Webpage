import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './font.css'
import logo from '../assets/nike-logo.png'

function Header() {
  return (
    <>
        <nav className="bg-[#f5efe6] w-full z-20 top-0 start-0 border-b border-default sticky">
            <div className="max-w-6xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-1 rtl:space-x-reverse">
                    <img src={logo} className="h-12" alt="Flowbite Logo"/>
                    <span className="self-center text-xl text-heading font-semibold whitespace-nowrap nike-text">NI<span className='text-blue-500'>KE</span></span>
                </Link>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-default rounded-base bg-[#f5efe6]
                     md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#f5efe6]">
                        <li>
                            <NavLink to="/" className={({isActive}) =>`block py-2 px-3 md:p-0 ${isActive? "text-white bg-brand rounded-sm md:bg-transparent md:text-fg-brand": "text-heading hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand"}`}>Home</NavLink>
                        </li> 
                        <li>
                            <NavLink to="/about" className={({isActive}) =>`block py-2 px-3 md:p-0 ${isActive? "text-white bg-brand rounded-sm md:bg-transparent md:text-fg-brand": "text-heading hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand"}`}>About</NavLink>
                        </li> 
                        <li>
                            <NavLink to="/contact" className={({isActive}) =>`block py-2 px-3 md:p-0 ${isActive? "text-white bg-brand rounded-sm md:bg-transparent md:text-fg-brand": "text-heading hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand"}`}>Contact</NavLink>
                        </li> 
                        <li className='relative'>
                            <span className="absolute -top-1.5 -right-8 -translate-x-1/2 
                                text-[8px] text-green-300 bg-red-500 
                                px-1.5 py-0.5 rounded-full font-bold z-0">
                                NEW
                            </span>
                            <NavLink to="/3d-model" className={({isActive}) =>` z-10 block py-2 px-3 md:p-0 ${isActive? "text-white bg-brand rounded-sm md:bg-transparent md:text-fg-brand": "text-heading hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand"}`}>3D Model</NavLink>
                        </li>
                        <li>
                            <NavLink to="/github" className={({isActive}) =>`block py-2 px-3 md:p-0 ${isActive? "text-white bg-brand rounded-sm md:bg-transparent md:text-fg-brand": "text-heading hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand"}`}>Github</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex md:order-2 space-x-3 md:space-x-3 rtl:space-x-reverse">
                    <button type="button" className="text-gray-800 hover:bg-gray-200 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-bold leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">Log In</button>
                    <button type="button" className="text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">Get started</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
                    </button>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header
