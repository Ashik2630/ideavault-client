import Link from 'next/link';
import React from 'react';

const Navbar = () => {
// Home
// 
//  (Private)
//  (Private)
// 
const links = <>
<Link className='hover:text-blue-600 rounded-lg text-[16px]' href={`/`}>Home</Link>
<Link className='hover:text-blue-600 rounded-lg text-[16px]' href={`/ideas`}>Ideas</Link>
<Link className='hover:text-blue-600 rounded-lg text-[16px]' href={`/add-idea`}>Add Idea</Link>
<Link className='hover:text-blue-600 rounded-lg text-[16px]' href={`/my-ideas`}>My Ideas</Link>
<Link className='hover:text-blue-600 rounded-lg text-[16px]' href={`/my-interactions`}>My Interactions</Link>
</>


    return (
        <div className="navbar bg-base-100 shadow-md px-4 sm:px-8">
            {/* Navbar Start: Logo Section */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    {/* Mobile Dropdown Menu */}
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52 font-medium">
                       {links}
                    </ul>
                </div>
                
                {/* Logo Link */}
                <a className="flex items-center gap-2 cursor-pointer group">
                    {/* Inline Logo SVG (Lightbulb + Vault Nodes) */}
                    <svg className="w-8 h-8 text-blue-600 transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        <circle cx="12" cy="10" r="1.5" className="fill-blue-600" />
                    </svg>
                    <span className="text-xl font-bold tracking-tight text-base-content">
                        Idea<span className="text-blue-600">Vault</span>
                    </span>
                </a>
            </div>

            {/* Navbar Center: Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 font-medium ">
                    {links}
                </ul>
            </div>

            {/* Navbar End: Action Button */}
            <div className="navbar-end">
                <a className="btn btn-primary btn-sm sm:btn-md rounded-xl normal-case text-white bg-blue-600 hover:bg-blue-700 border-none">
                    Get Started
                </a>
            </div>
        </div>
    );
};

export default Navbar;