import React from 'react'

function Destinations() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 '>
      <h1>Top Destinations</h1>
      <p>Unlock the Travel Realm: Explore Bihar's Hidden Treasures!</p>
      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src="https://i.pinimg.com/474x/30/11/7e/30117ecee25d9fa6b90c5e1f41b154b4.jpg" alt="" />
        <img className='w-full h-full object-cover' src="https://i.pinimg.com/564x/f7/3b/da/f73bda7bc3e5e298c95b80b969472b97.jpg" alt="" />
        <img className='w-full h-full object-cover' src="https://i.pinimg.com/736x/0a/a1/91/0aa19189327b43e460fca64a12deda4a.jpg" alt="" />
        <img className='w-full h-full/2 object-cover' src="https://i.pinimg.com/564x/f5/19/a7/f519a7700ed8ca2cb6e6033b9f35676d.jpg" alt="" />
        <img className='w-full h-full object-cover' src="https://i.pinimg.com/564x/c8/15/4b/c8154b4374be49fc679d2af5fa9f7e6e.jpg" alt="" />
      </div>
    </div>
  )
}

export default Destinations
