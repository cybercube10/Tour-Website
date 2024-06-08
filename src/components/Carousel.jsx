import React, { useState } from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
  {url:'https://i.pinimg.com/736x/65/11/54/65115422a14670d5211de83f46605888.jpg'},
  {url:'https://i.pinimg.com/564x/4d/1c/e8/4d1ce852005658053cd69f72b4821810.jpg'},
  {url:'https://i.pinimg.com/564x/f6/dd/eb/f6ddebb042ec5da784e5d95d5ee48835.jpg'},
]

function Carousel() {
  const [slide,setSlide] = useState(0);
  const length = sliderData.length

  const prevSlide = () =>{
    setSlide(slide === length - 1? 0: slide - 1)
  }
  const nextSlide = () => {
    setSlide(slide === 0 ?length - 1: slide - 1)
  }



  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center '>
      <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-8' />
      <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'/>
      {sliderData.map((item,index)=>(
        <div className={index === slide?'opacity-100':'opacity-0'}>
    {index === slide && (  <img className='w-full rounded-md' src={item.url} />
)}
        </div>
      ))}
    </div>
  )
}

export default Carousel
