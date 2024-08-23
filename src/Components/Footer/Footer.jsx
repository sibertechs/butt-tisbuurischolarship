import React from 'react'
import logo from "./Image/logo.png"
import {AiOutlineCopyright} from "react-icons/ai"
import {Bivertical} from "react-icons/bi"
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col mt-20 pb-[5rem] flex-wrap">
        <div className='justify-around flex flex-wrap'>
        <img src={logo} alt="" className='w-[6rem] pb-4 mx-8' />
        <ul className='flex flex-wrap'>
            <li className='mx-4 md:text-[1rem] text-[0.73rem] cursor-pointer hover:text-[#483bdd] ease-in-out duration-300 '>Privacy Policy</li>
            <li className='mx-4 md:text-[1rem] text-[0.73rem] cursor-pointer hover:text-[#483bdd] ease-in-out duration-300 '>Terms and Conditions</li>
            <li className='mx-4 md:text-[1rem] text-[0.73rem] cursor-pointer hover:text-[#483bdd] ease-in-out duration-300 '>Cookie Policy</li>
            <li className='mx-4 md:text-[1rem] text-[0.73rem] cursor-pointer hover:text-[#483bdd] ease-in-out duration-300 '>Complaints</li>
        </ul>
        </div>
        <div className=" justify-around mt-8 text-center flex mx-auto">
        <p className='flex w-full text-center '>
        <AiOutlineCopyright className='relative mt-1'/>
        <span className='ml-1'>Copyright 2023 VimTech. All rights reserved</span>
      </p>
      </div>


      </div>

    
    </div>
  )
}

export default Footer
