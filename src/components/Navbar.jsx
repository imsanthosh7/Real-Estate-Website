import React from 'react';
import { Link } from 'react-scroll';
import { useState } from 'react';
import logo from "../assets/logo.png";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";








const Navbar = () => {

  const [ismenuOpen, setmenuOpen] = useState(false);
  // toggle menu 
  const toggleMenu = () => {
    setmenuOpen(!ismenuOpen);
  }


  // navitems arry 
  const navitems = [
    { link: "Home", path: "home" },
    { link: "Properties", path: "properties" },
    { link: "About Us", path: "aboutus" },
    { link: "Services", path: "services" },
  ];

  return (

    
    <nav className='md:px-8 py-4 bg-gray2 w-full px-4 fixed z-20'>
      <div className='flex justify-between'>
        {/* logo  */}
        <div className='pl-2'>
          <a href="">
            <img src={logo} alt="" width={120} />
          </a>
        </div>

        {/* navlinks */}

        <ul className='md:flex gap-8 hidden'>
          {
            navitems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path}
              className='text-white block hover:bg-gray1 hover:border border-gray3 p-2 rounded-md  cursor-pointer duration-300 '>{link}</Link>)
          }
        </ul>


        {/* singhub */}
        <div className='md:flex hidden'>
          <button className='bg-gray1 p-2 rounded text-white hover:bg-gray4 duration-300 border border-gray3'>Contact Us</button>
        </div>

        {/* menu button  */}
        <div className='md:hidden mt-2'>
          <button onClick={toggleMenu} className='text-white focus:outline-none '>
            {ismenuOpen ? (<IoMdClose className='h-7 w-7 ' />) : (<HiBars3BottomRight className='w-7 h-7' />)}
          </button>
        </div>
      </div>
      <div className={`bg-gray2 w-full ${ismenuOpen ? "block fixed text-center space-y-6 left-0 m-3 py-6 rounded-2xl mx-auto " : "hidden"}`}>
        {
          navitems.map(({ link, path }) =>
            <Link to={path} spy={true} smooth={true} offset={-100} key={path}
              className='block text-base text-white hover:text-Purple1 first:font-medium'>{link}</Link>
              
              
          )
          
          
        }
        
      </div>
    </nav>



  )
}

export default Navbar