import React from 'react'
import { Carousel } from "@material-tailwind/react";
import headerimg1 from '../../assets/header-img1.png'
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <>
      <Carousel className="">
        <div className=' bg-gradient-to-r from-blue-400 to-indigo-600' >
          <div className='sm:flex items-center px-5 lg:px-24'>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-60 flex flex-col sm:items-start justify-center space-y-4"
            >
              <h1 className='text-2xl md:text-4xl lg:text-6xl text-white font-bold italic  '>Natural Height Enhancement</h1>
              <p className='text-sm md:text-md lg:text-xl lg:pe-12 font-medium text-gray-50 '>Unlock your growth potential with our Height Growth Capsules, designed to naturally and effectively add inches to your height.</p>
              <button className='h-10 border p-5 flex justify-center items-center rounded-full bg-gradient-to-r from-blue-400 to-indigo-700 text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-950 hover:scale-105 duration-300'>Order Now</button>
            </motion.div>
            <motion.div
              initial={{  rotate: 45  }}
              animate={{ rotate: 0 }}
              transition={{ duration: 1, ease: "easeInOut"}}
              className='w-full h-full p-5  rounded-xl '>
              <img
                src={headerimg1}
                alt="image 1"
                className="h-full w-full object-cover hover:scale-105 duration-300"
              />
            </motion.div>
          </div>
        </div>
        <div className=' bg-gradient-to-r from-blue-400 to-indigo-600' >
          <div className='sm:flex items-center px-5 lg:px-24'>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-60 flex flex-col sm:items-start justify-center space-y-4"
            >
              <h1 className='text-2xl md:text-4xl lg:text-6xl text-white font-bold italic'>Advanced Growth Formula</h1>
              <p className='text-sm md:text-md lg:text-xl lg:pe-12 font-medium text-gray-50 '>Stimulate your body's growth process with essential nutrients that promote bone development and overall height increase.</p>
              <button className='h-10 border p-5 flex justify-center items-center rounded-full bg-gradient-to-r from-blue-400 to-indigo-700 text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-950 hover:scale-105 duration-300'>Order Now</button>

            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='w-full h-full p-5  rounded-xl '>
              <img
                src={headerimg1}
                alt="image 1"
                className="h-full w-full object-cover rounded-xl hover:scale-105 duration-300"
              />
            </motion.div>
          </div>
        </div>
        <div className=' bg-gradient-to-r from-blue-400 to-indigo-600' >
          <div className='sm:flex items-center px-5 lg:px-24'>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-60 flex flex-col sm:items-start justify-center space-y-4"
            >
              <h1 className='text-2xl md:text-4xl lg:text-6xl text-white font-bold italic'>Achieve Your Desired Height</h1>
              <p className='text-sm md:text-md lg:text-xl lg:pe-12 font-medium text-gray-50 '>Reach new heights with our safe and proven formula, tailored to help you achieve your ideal stature naturally.</p>
              <button className='h-10 border p-5 flex justify-center items-center rounded-full bg-gradient-to-r from-blue-400 to-indigo-700 text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-950 hover:scale-105 duration-300'>Order Now</button>

            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='w-full h-full p-5  rounded-xl '>
              <img
                src={headerimg1}
                alt="image 1"
                className="h-full w-full object-cover rounded-xl hover:scale-105 duration-300"
              />
            </motion.div>
          </div>
        </div>
      </Carousel >
    </>
  )
}

export default Banner

