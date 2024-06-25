import React from 'react'
import littlestar from '../assets/littlestar.png'
import { client } from './Context'

const Clients = () => {
  return (
    <div className='w-full h-full bg-gray1 md:px-20 py-9 md:mt-5 p-4 ' id='aboutus'>

            {/* heading  */}
            <div className=''>
                <div className=''>
                    <div className='relative right-3'>
                        <img className='w-14' src={littlestar} alt="" />
                    </div>
                    <h1 className='text-white text-3xl font-semibold mb-5'>What Our Clients Say</h1>
                </div>
                <div className='flex md:flex-row  flex-col justify-between'>
                    <div className='md:w-3/5'>
                        <p className=' text-gray7 text-sm'>Read the success stories and heartfelt 
                            testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.
                        </p>

                    </div>
                    <div className='hidden md:block'>
                        <button className='bg-gray2 text-sm p-2 rounded text-white  cursor-pointer hover:bg-gray4 duration-300 border border-gray3'>View All Testimonials</button>
                    </div>
                </div>
            </div>

            {/* clients rivew */}
            <div className='flex md:flex-row flex-col justify-between gap-3 mx-auto mt-8 '>
            {client.map((data) => <div key={data.id} className='border border-gray3 rounded-md md:w-[330px] mx-auto p-5'>
                   <div className='py-3'>
                     <img className='w-3/5' src={data.stars} alt="" />
                   </div>
                   <div className='py-4 '>
                       <h1 className='text-white  text-l'>{data.title}</h1>
                       <p className='text-wrap text-[12px] mt-1 text-white'>{data.description}</p>
                   </div>
                   <div className='flex flex-row gap-3  items-center mt-3'>
                     <div className=''>
                        <img className='w-10' src={data.profile} alt="" />
                     </div>
                     <div>
                        <h3 className='text-white  text-[12px]'>{data.name}</h3>
                        <p className='text-wrap text-[10px] mt-1 text-gray7'>{data.city}</p>
                     </div>
                   </div>
                </div>)}
            </div>
        </div>
  )
}

export default Clients