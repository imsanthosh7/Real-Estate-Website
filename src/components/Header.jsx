import React, { useEffect, useState } from 'react'
import "../components/Header.css"

const Header = () => {

    //  banner hideen 
    const [banner,setbanner]=useState("")
    
    const bannerhiden = ()=>{
         setbanner(("hidden"))
    }
  
    return (
        <div className=''>
            {/* banner */}
            <div className={'banner  -z-20 w-full  flex justify-between md:px-8 px-4  md:py-4 py-6  bg-gray2 '+(banner)}>
                <div className='md:w-9/12  md:mx-auto '>
                    <h3 className='text-center text-white text-[13px] md:text-[16px] '>✨Discover Your Dream Property with Estatein <span className='underline'>Learn More</span></h3>
                    {/* <img src="src\assets\Abstract Design.png" alt="" /> */}
                </div>
                <div>
                    <button onClick={bannerhiden} className='text-white font-semibold rounded-full bg-gray4 hover:bg-gray5  w-6 h-6'>X</button>
                </div>
            </div>
        </div>
    )
}

export default Header