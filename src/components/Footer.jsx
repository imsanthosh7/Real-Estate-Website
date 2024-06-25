import React from 'react'
import footerlofgo from '../assets/logo.png'
import messsageicon from '../assets/Vector.png'
import sendicon from "../assets/sendicon.png"
import "../components/Footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <>
            <div className='w-full h-full bg-gray1 md:px-20 p-4 '>
                <div className='grid md:grid-flow-col  grid-flow-row gap-10'>
                    <div className='flex  flex-col gap-4'>
                        <div>
                            <img className='w-32' src={footerlofgo} alt="logo" />
                        </div>
                        <div className='flex gap-1  items-center  border-[1px] rounded-md border-gray4 md:w-fit p-3 '>
                            <div className=''>
                                <img className='w-3' src={messsageicon} alt="" />
                            </div>
                            <div>
                                <input className='bg-gray1 outline-none border-none text-sm text-white w-[270px]  md:w-[280px]' type="text" placeholder='Enter your Email' />
                            </div>
                            <div className=''>
                                <img className='w-6 cursor-pointer' src={sendicon} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* footerlinks */}
                    <div className='grid md:grid-flow-col grid-flow-row  grid-cols-2 md:gap-19 gap-5 ml-7 my-3 footer-links '>
                        <div className=''>
                            <h1>Home</h1>
                            <ul className=''>
                                <li>Hero Section</li>
                                <li>Features</li>
                                <li>Properties</li>
                                <li>Testimonials</li>
                                <li>FAQ’s</li>
                            </ul>
                        </div>
                        <div className=''>
                            <h1>About Us</h1>
                            <ul>
                                <li>Our Story</li>
                                <li>Our Works</li>
                                <li>How It Works</li>
                                <li>Our Team</li>
                                <li>Our Clients</li>
                            </ul>
                        </div>
                        <div className=''>
                            <h1>Properties</h1>
                            <ul>
                                <li>Portfolio</li>
                                <li>Categories</li>
                            </ul>
                        </div>
                        <div className='row-span-2 md:row-auto'>
                            <h1>Services</h1>
                            <ul>
                                <li>Valuation Mastery</li>
                                <li>Strategic Marketing</li>
                                <li>Negotiation Wizardry</li>
                                <li>Closing Success</li>
                                <li>Property Management</li>
                            </ul>
                        </div>
                        <div className=''>
                            <h1>Contact Us</h1>
                            <ul>
                                <li>Contact Form</li>
                                <li>Our Offices</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* copyright section  */}
            <div className='flex md:flex-row-reverse flex-col  justify-between items-center bg-gray2 py-5 md:py-1 px-20'>
                <div className='flex gap-3'>
                    <h1 className='bg-gray1 md:p-2 p-4  md:text-[18px] text-2xl rounded-full text-white hover:bg-Purple1 hover:-translate-y-2 duration-300 cursor-pointer'><FaFacebookF /></h1>
                    <h1 className='bg-gray1 md:p-2 p-4  md:text-[18px] text-2xl rounded-full text-white hover:bg-Purple1 hover:-translate-y-2 duration-300 cursor-pointer '><FaLinkedin /></h1>
                    <h1 className='bg-gray1 md:p-2 p-4  md:text-[18px] text-2xl rounded-full text-white hover:bg-Purple1 hover:-translate-y-2 duration-300 cursor-pointer '><FaXTwitter /></h1>
                    <h1 className='bg-gray1 md:p-2 p-4  md:text-[18px] text-2xl rounded-full text-white hover:bg-Purple1 hover:-translate-y-2 duration-300 cursor-pointer '><FaYoutube /></h1>

                </div>
                <div className='flex md:flex-row flex-col gap-3 md:w-auto w-56 text-white text-sm text-center my-6'>
                    <h1 className='text-sm'>@2024 Estatein. All Rights Reserved.</h1>
                    <p className='text-sm'>Terms & Conditions</p>
                </div>
            </div>
        </>
    )
}

export default Footer
