import React from 'react'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { MdOutlineTravelExplore } from 'react-icons/md'
function Search() {
  return (
    <div className='max-w-[1240px] mx-auto grid  lg:grid-cols-3 gap-4 px-4 py-16'>
      
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
       <div>
        <h1> A Journey of Heritage, Spirituality, and Warm Hospitality</h1>
        <p className='py-4'>A visit to Bihar can be a rich tapestry of experiences. From exploring ancient historical sites like Nalanda and Bodh Gaya to immersing oneself in the vibrant cultural festivals like Chhath Puja, the state offers a blend of heritage and spirituality. The warm hospitality and delicious local cuisine, including mouth-watering sweets like Khaja and Thekua, add to the memorable experience. Bihar's landscapes, from the serene banks of the Ganges to the rural charm of villages, offer a glimpse into India's diverse beauty.</p>
       </div>
       <div className='grid md:grid-cols-2 gap-8 py-4'>
  <div className='flex flex-col  lg:flex-row items-cemter text-center'>
    <button><RiCustomerService2Fill size={30}/></button>
    <div>
      <h3 className='font-bold py-2'>Contact Support</h3>
       <p className='py-1'>010-128-889</p>
    </div>
  </div>

  <div className='flex flex-col  lg:flex-row items-cemter text-center'>
    <button><MdOutlineTravelExplore size={30}/></button>
    <div>
      <h3 className='font-bold py-2'>Learn More</h3>
       <p className='py-1'>Search Wiki</p>
    </div>
  </div>
       </div>
      </div>




      <div>

<div className='border text-center'>
<p className='py-2'> Get an Addiional 10% OFF</p>
<p className='py-4'>12 Hours Left</p>
<p className='bg-gray-400 text-gray py-5'>Book now and save</p>
</div>

<form className='w-full'>
  <div className='flex flex-col my-2'>
    <label htmlFor="">Destination</label>
    <select className='rounded-md border p-2' name="" id="">
      <option>Patna</option>
      <option>Muzzafarpur</option>
      <option>Bhagalpur</option>
      <option>Sasaram</option>
      <option >Munger</option>
      <option >Gaya</option>
      <option>Saharsa</option>
      <option>Madhepura</option>
      <option>Nalanda</option>
      <option>Vaishali</option>
    </select>
  </div>

  <div className='rounded-md border p-2'>
    <label htmlFor="">Book for: </label>
    <input type="date" />
  </div>

 <button className='w-full my-4'>Book now</button>

</form>



      </div>



    </div>
  )
}

export default Search
