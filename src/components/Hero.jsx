import React from 'react'
import Bihar from '../assets/Bihar.mp4'
import { AiOutlineSearch } from 'react-icons/ai'
const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video className='w-full h-full object-cover' src={Bihar} alt="" autoPlay loop muted/>
      <div className='absolute w-full h-full top-0 left-0 bg-gray-500/30'>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
          <h1>Come to explore</h1>
          <h2 className='py-4'>Where Heritage meets Hospitality..</h2>
          <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
          rounded-md text-black bg-gray-100/90 '>
            <div><input className='bg-transparent w-[300px] sm:w-[400px] font-kalam focus:outline-none' type="text" placeholder='Search Places'/></div>
            <div><button><AiOutlineSearch size={20} className='icons'/></button></div>
          </form>
        </div>   </div>
    </div>
  )
}

export default Hero
