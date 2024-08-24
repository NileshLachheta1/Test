import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <div className='sm:flex px-5 w-full md:px-12 lg:px-24 py-12 space-y-4 sm:space-y-0'>
        <div className='sm:w-1/3 w-full'>
          <img src="https://imgs.search.brave.com/V_BO95fx3fs2yXPvz1RMjoGW2xCZk1abt-CYy0aWP0I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9vbmxp/bmVwbmd0b29scy5j/b20vaW1hZ2VzL2V4/YW1wbGVzLW9ubGlu/ZXBuZ3Rvb2xzL2dv/b2dsZS1sb2dvLnBu/Zw" className='h-12' alt="" />
          <p className='text-justify font-medium'>Are you looking to add a few more inches to your height? Height Growth Capsules are here to help you achieve your desired height, naturally and effectively. Our advanced formula is designed to stimulate your body’s growth process.</p>

        </div>
        <div className='sm:w-2/3 w-full grid grid-cols-2 sm:flex justify-around'>
          <div>
            <p className='font-bold text-lg py-5 sm:py-0'>Links</p>
            <ul className='space-y-1 py-2'>
              <li className='relative hover:cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full font-medium hover:text-blue-400'>Company</li>
              <li className='relative hover:cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full font-medium hover:text-blue-400'>Market</li>
              <li className='relative hover:cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full font-medium hover:text-blue-400'>Features</li>
            </ul>
          </div>

          <div>
            <p className='font-bold text-lg py-5 sm:py-0'>Support</p>
            <ul className='space-y-1 py-2'>
              <li className='relative font-medium hover:cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-400'>T&C</li>
              <li className='relative font-medium hover:cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-400'>Contact US</li>
              <li className='relative font-medium hover:cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-400'>Team</li>
            </ul>
          </div>
          
          <div>
            <p className='font-bold text-lg py-5 sm:py-0'>Social Media</p>
            <ul className='space-y-1 py-2'>
              <li className='relative font-medium hover:text-md hover:text-blue-500 hover:cursor-pointer flex gap-2 items-center hover:scale-110 duration-300'> <FaLinkedin className='text-blue-500 ' />LinkedIn</li>
              <li className='relative font-medium hover:text-md hover:text-blue-500 hover:cursor-pointer flex gap-2 items-center hover:scale-110 duration-300'> <FaFacebookF className='text-blue-500' />FaceBook</li>
              <li className='relative font-medium hover:text-md hover:text-red-500 hover:cursor-pointer flex gap-2 items-center hover:scale-110 duration-300'> <FaInstagram className='text-red-500' />Instagram</li>
              <li className='relative font-medium hover:text-md hover:text-blue-500 hover:cursor-pointer flex gap-2 items-center hover:scale-110 duration-300'> <FaTwitter className='text-blue-500' />Twitter</li>
              <li className='relative font-medium hover:text-md hover:text-red-500 hover:cursor-pointer flex gap-2 items-center hover:scale-110 duration-300'> <FaYoutube className='text-red-500' />Youtube</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='py-2'>
        <p className='text-center text-sm text-gray-500'>© 2021 Height Growth Capsules. All rights reserved.</p>
      </div>
    </>
  )
}

export default Footer