// function Header (){
//     return<div className="flex justify-between fixed top-0  px-20 py-2 items-center w-full bg-white bg-opacity-60 backdrop-blur-md shadow z-10">
// <h1 className="text-4xl font-bold"> CWA</h1>
// <ul className="flex space-x-5 ">
//     <li>Home</li>
//     <li>About</li>
//     <li>Contact</li>
//     <li>Register</li>
//     <li>Login</li>
// </ul>
//     </div>
// }


// export default Header
import { Link } from 'react-router-dom';

import React, { useState } from 'react';


function Header() {
    // State to manage mobile menu visibility
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
        
        <div className="flex justify-between fixed top-0 px-4 sm:px-10 md:px-20 py-4 items-center w-full bg-white bg-opacity-60 backdrop-blur-md shadow z-10">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">CWA</h1>
            
            {/* For larger screens (md and up) */}
            <ul className="hidden md:flex space-x-5">
               <Link to= "/"> <li className="hover:text-blue-500 cursor-pointer">Home</li></Link>
                <Link to="/about"><li className="hover:text-blue-500 cursor-pointer">About</li></Link>
                <Link to="/contact"><li className="hover:text-blue-500 cursor-pointer">Contact</li> </Link>
               <Link to="/id"> <li className="hover:text-blue-500 cursor-pointer">Register</li></Link>
           <Link to ="/login">   <li className="hover:text-blue-500 cursor-pointer">Login</li></Link>  
            </ul>

            {/* For mobile (smaller screens) */}
            <div className="md:hidden">
                {/* Hamburger Menu Icon or Close Icon */}
                <button 
                    className="text-blue-500 focus:outline-none text-3xl" 
                    onClick={toggleMenu}
                >
                    {isOpen ? '✖' : '☰'}
                </button>
            </div>

            {/* Mobile Menu - Show if isOpen is true */}
            {isOpen && (
                <ul className="absolute top-16 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-lg flex flex-col items-center space-y-4 py-4 md:hidden">
                   <Link to="/"> <li className="hover:text-blue-500 cursor-pointer" onClick={toggleMenu}>Home</li></Link>
                   <Link to="/about"> <li className="hover:text-blue-500 cursor-pointer" onClick={toggleMenu}>About</li></Link>
                   <Link to="/contact">         <li className="hover:text-blue-500 cursor-pointer" onClick={toggleMenu}>Contact</li> </Link>
                   <Link to="/id"><li className="hover:text-blue-500 cursor-pointer" onClick={toggleMenu}>Register</li></Link> 
                <Link to="/login">    <li className="hover:text-blue-500 cursor-pointer" onClick={toggleMenu}>Login</li></Link>  
                </ul>
                
            )}
            
        </div>
        </div>
    );
}

export default Header;
