import React from 'react'
import littlestar from '../assets/littlestar.png'
import { Properti } from './Context'
import betroomicon from "../assets/betroomicon.png"
import bathroomicon from "../assets/bathroomicon.png"
import villaicon from "../assets/villaicon.png"


const Properties = () => {
    return (
        <div className='w-full h-full bg-gray1 md:px-20 p-4 ' id='properties'>

            {/* heading  */}
            <div className=''>
                <div className=''>
                    <div className='relative right-3'>
                        <img className='w-14' src={littlestar} alt="" />
                    </div>
                    <h1 className='text-white text-3xl font-semibold mb-5'>Featured Properties</h1>
                </div>
                <div className='flex md:flex-row flex-col justify-between'>
                    <div className='md:w-3/5'>
                        <p className=' text-gray7 text-sm'>Explore our handpicked selection of featured properties.
                            Each listing offers a glimpse into exceptional homes and investments available through Estatein.
                            Click "View Details" for more information.
                        </p>

                    </div>
                    <div className='hidden md:block'>
                        <button className='bg-gray2 text-sm p-2 rounded text-white  cursor-pointer hover:bg-gray4 duration-300 border border-gray3'>View All Properties</button>
                    </div>
                </div>
            </div>

            {/* properties item */}
            <div className='flex md:flex-row flex-col flex-wrap justify-between gap-3 mx-auto mt-8 '>
                {Properti.map((data) => <div key={data.id} className='border border-gray3 rounded-md md:w-[330px] mx-auto p-5'>
                    <img className='hover:scale-105 duration-300 cursor-pointer rounded-sm' src={data.Image} alt="" />
                    <div className='mt-3'>
                        <h1 className='text-white  text-l'>{data.title}</h1>
                        <p className='text-wrap text-[12px] mt-1 text-gray7'>{data.description} <span className='text-neutral-300 underline cursor-pointer'>Read More</span></p>
                    </div>
                    <div className='flex flex-row gap-2 my-4'>
                        <div className='flex border rounded-2xl border-gray3 p-[6px] bg-gray2'>
                            <div>
                                <img className='w-4 mr-1' src={betroomicon} alt="" />
                            </div>
                            <div>
                                <p className='text-[10px]  text-white'>{data.betroom}</p>
                            </div>
                        </div>
                        <div className='flex  border rounded-2xl border-gray3 p-[7px] bg-gray2'>
                            <div >
                                <img className='w-4 mr-1' src={bathroomicon} alt="" />
                            </div>
                            <div>
                                <p className='text-[10px]  text-white'>{data.bathroom}</p>
                            </div>
                        </div>
                        <div className='flex  border rounded-2xl border-gray3 p-[7px] bg-gray2'>
                            <div>
                                <img className='w-4 mr-1' src={villaicon} alt="" />
                            </div>
                            <div>
                                <p className='text-[10px]  text-white'>villa</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <p className='text-[12px] text-gray7'>Price</p>
                            <h1 className='font-semibold text-white text-md'>$555.000</h1>
                        </div>
                        <div className='m-2'>
                            <button className='bg-Purple1 text-[11px] w-[150px] p-2 rounded text-white hover:bg-Purple2 duration-300' >View Property Details</button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Properties