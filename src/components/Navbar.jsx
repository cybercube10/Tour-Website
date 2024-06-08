import React from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import { useState } from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';

function Navbar() {
  const [nav,setNav] = useState(false);
  const [logo,setLogo] = useState(false)
  const handleNav = ()=>{
    setNav(!nav);
    setLogo(!logo);
  }
  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white '>
      <div className='flex my-10'>
        <img src="https://tourism.bihar.gov.in/content/dam/bihar-tourism/logos/white_logo.png" className = 'w-[50px]' alt="" />
        <h1 onClick={handleNav} className={logo ? 'hidden':'block'}>Bihar</h1>
      </div>
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>Book</li>
      </ul>

      <div className='hidden md:flex'>
       <BiSearch   size={20}/>
      <BsPerson  size={20}/>

      </div>

{/*Hamburger*/}

      <div onClick={handleNav} className='md:hidden z-10'>
     {nav? <AiOutlineClose size={20}/>: <HiOutlineMenuAlt4 size={20}/> }
      </div>
      <div className={nav? 'absolute text-black left-[0] top-0 w-full px-4 py-7 flex flex-col bg-gray-100/90':'absolute left-[-100%] top-0 w-full px-4 py-7 flex flex-col bg-gray-100/90'}> 
        <h1>Beaches.</h1>
        <li className='border-b'>Home</li>
        <li className='border-b'>Destination</li>
        <li className='border-b'>Travel</li>
        <li className='border-b'>Book</li>
        <div className=' flex flex-col'>
          <button className='my-2'>Search</button>
          <button>Account</button>
        </div>

        <div className='flex justify-between my-4'> 
          <FaFacebook className='icon'/>
          <FaTwitter className='icon'/>
          <FaYoutube className='icon'/>
          <FaPinterest className='icon'/>
          <FaInstagram className='icon'/>
        </div>
      </div>
     
    </div>
  )
}

export default Navbar
