import React from 'react'
import homeimage from "../assets/Container.png"
import rotateicon from "../assets/Sub Container.png"
import "../components/Home.css"
import uparrow from "../assets/up arrow.png"
import subicon1 from "../assets/Icon Container1.png"
import subicon2 from "../assets/Icon Container2.png"
import subicon3 from "../assets/Icon Container3.png"
import subicon4 from "../assets/Icon Container4.png"

const Home = () => {
    return (
        <div className='w-full  h-full bg-gray1 md:pt-16 pb-5 pt-16 ' id='home'>
            <div className='flex flex-col md:flex-row-reverse items-center '>
                {/* content right */}
                <div className='md:w-[45%] md:p-0 p-5 mt-5 md:mt-0 '>
                    <img className='w-full md:h-[534px] rounded-lg' src={homeimage} alt="" />
                </div>

                {/* content left  */}
                <div className='md:p-20 p-5 md:w-[55%] '>

                    <h1 className='text-white font-semibold md:text-4xl text-3xl'>Discover Your Dream <br />Property with Estatein</h1>
                    <p className='mt-5 text-gray7 text-sm'>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
                    <div className='mt-5 flex md:flex-row mx-auto flex-col gap-5 '>
                        <button className='bg-gray2 text-sm p-2 rounded text-white  cursor-pointer hover:bg-gray4 duration-300 border border-gray3'>Learn More</button>
                        <button className='bg-Purple1 text-sm p-2 rounded text-white  hover:bg-Purple2 duration-300'>Browse Properties</button>

                    </div>
                    <div className='absolute '>
                        <div className='relative md:left-[530px] md:bottom-[180px] bottom-[380px] rotate-image'>
                            <img className="w-[100px] " src={rotateicon} alt="" />
                        </div>
                    </div>
                    <div className='mt-8 md:flex grid grid-cols-2 gap-2 md:text-left text-center '>
                        <div className='w-full col-span-1 md:w-4/5  bg-gray2 rounded-md p-4 border border-gray3'>
                            <h1 className='text-3xl font-semibold text-white mb-1'>200+</h1>
                            <p className='text-sm text-gray7'>Happy Customers</p>
                        </div>
                        <div className='w-full col-span-2 md:w-4/5  bg-gray2 rounded-md p-4  border border-gray3' >
                            <h1 className='text-3xl font-semibold text-white mb-1'>10k+</h1>
                            <p className='text-sm text-gray7'>Properties For Clients</p>
                        </div>
                        <div className='md:w-4/5 bg-gray2 rounded-md p-4 col-span-3 border border-gray3'>
                            <h1 className='text-3xl font-semibold text-white mb-1'>16+</h1>
                            <p className='text-sm text-gray7'>Years of Experience</p>
                        </div>
                    </div>

                </div>
            </div>


            {/* sub container */}
            <div className='md:flex grid grid-cols-2  md:gap-4 gap-3 mx-auto  justify-center   md:p-3 p-3 border-4 md:w-full w-[350px] md:rounded-none rounded-xl border-gray2 '>
                <div className='rounded-lg bg-gray2  text-center  md:w-[292px] md:h-[138px]  p-3 hover:scale-105 duration-300 cursor-pointer border border-gray3'>
                    <div className='flex justify-end '><img className='w-[23px] ' src={uparrow} alt="" /></div>
                    <div className=''>
                        <img className='w-12 mx-auto' src={subicon1} alt="" />
                        <p className='mt-2 text-white text-sm'>Find Your Dream Home</p>
                    </div>
                </div>
                <div className='rounded-lg bg-gray2 text-center md:w-[292px] md:h-[138px] p-3 hover:scale-105 duration-300 cursor-pointer border border-gray3' >
                    <div className='flex justify-end'><img className='w-[25px]' src={uparrow} alt="" /></div>
                    <div>
                        <img className='w-12 mx-auto' src={subicon2} alt="" />
                        <p className='mt-2 text-white text-sm'>Unlock Property Value</p>
                    </div>
                </div>
                <div className='rounded-lg bg-gray2 text-center md:w-[292px] md:h-[138px] p-3 hover:scale-105 duration-300 cursor-pointer border border-gray3'>
                    <div className='flex justify-end'><img className='w-[25px]' src={uparrow} alt="" /></div>
                    <div>
                        <img className='w-12 mx-auto' src={subicon3} alt="" />
                        <p className='mt-2 text-white text-sm'>Effortless Property Management</p>
                    </div>
                </div>
                <div className='rounded-lg bg-gray2 text-center md:w-[292x] md:h-[138px] p-3 hover:scale-105 duration-300 cursor-pointer border border-gray3'>
                    <div className='flex justify-end'><img className='w-[25px]' src={uparrow} alt="" /></div>
                    <div>
                        <img className='w-12 mx-auto' src={subicon4} alt="" />
                        <p className='mt-2 text-white text-sm'>Smart Investments, Informed Decisions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home