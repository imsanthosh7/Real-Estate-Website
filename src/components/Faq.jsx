import React from 'react'
import littlestar from '../assets/littlestar.png'
import { FAQ } from './Context'
import '../components/Faq.css'


const Faq = () => {
    return (
        <>
            <div className='w-full h-full bg-gray1 md:px-20 p-4 ' id='properties'>

                {/* heading  */}
                <div className=''>
                    <div className=''>
                        <div className='relative right-3'>
                            <img className='w-14' src={littlestar} alt="" />
                        </div>
                        <h1 className='text-white text-3xl font-semibold mb-5'>Frequently Asked Questions</h1>
                    </div>
                    <div className='flex md:flex-row flex-col justify-between'>
                        <div className='md:w-3/5'>
                            <p className=' text-gray7 text-sm'>Find answers to common questions about Estatein's services, property listings,
                                and the real estate process. We're here to provide clarity and assist you every step of the way.
                            </p>

                        </div>
                        <div className='hidden md:block'>
                            <button className='bg-gray2 text-sm p-2 rounded text-white  cursor-pointer hover:bg-gray4 duration-300 border border-gray3'>View All FAQ’s</button>
                        </div>
                    </div>
                </div>


                {/* properties item */}
                <div className='flex md:flex-row flex-col justify-between gap-3 mx-auto mt-8 '>
                    {
                        FAQ.map((data) => <div key={data.id} className='border border-gray3 rounded-md md:w-[330px] mx-auto p-5'>
                            <div className='md:h-10'>
                                <h1 className='text-white  text-l'>{data.question}</h1>
                            </div>
                            <div className='mt-5'>
                                <p className='text-wrap text-[12px] mt-1 text-gray7'>{data.answer}</p>
                            </div>
                            <div className='mt-5'>
                                <button className='bg-gray1 p-2 text-[12px] rounded text-white hover:bg-gray4 duration-300 border border-gray3'>Read More</button>
                            </div>

                        </div>)
                    }
                </div>
            </div>

            {/* Explore Properties */}
            <div className=' md:h-[250px] my-10 explore-container border-y-[1px]  border-gray3' id='services'>
                <div className='flex justify-between md:flex-row flex-col md:p-20 py-8 p-4  items-center gap-5'>
                    <div className='md:w-[800px]'>
                        <h1 className='text-white text-3xl font-semibold mb-5'>Start Your Real Estate Journey Today</h1>
                        <p className=' text-gray7 text-sm'>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment,
                            or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step
                            towards your real estate goals and explore our available properties or get in touch with our team for
                            personalized assistance.
                        </p>
                    </div>
                    
                        <button className='bg-Purple1 text-sm md:w-[150px] w-full p-2 rounded text-white  hover:bg-Purple2 duration-300'>Explore Properties</button>
                    

                </div>
            </div>
        </>
    )
}

export default Faq