// import React from 'react'

// const Contact = () => {
//   return (
//     <div className='md:px-12 lg:px-24 '>
//       <div className="w-full pt-12">
//         <p className="text-center text-btn-color font-medium">Contact Us</p>
//         <p className="text-center text-3xl md:text-4xl font-regular font-bold">
//           Ask your Questions Here
//         </p>
// </div>
// <form className='w-full space-y-3 p-5 bg-contact-background  rounded mt-10 '>
//   <div className='sm:flex gap-4 space-y-4 sm:space-y-0'>
//     <div className='w-full'>
//       <input
//         type="text"
//         placeholder="Enter Name"
//         className="w-full h-10 rounded-lg border border-gray-400 p-2  focus:outline-none bg-black/5 focus:bg-black/10"
//       />
//     </div>
//     <div className='w-full'>
//       <input type="text" placeholder='Enter Email' className='w-full h-10 rounded-lg border border-gray-400 p-2 focus:outline-none bg-black/5 focus:bg-black/10' />
//     </div>
//   </div>
//   <div className='sm:flex gap-4 space-y-4 sm:space-y-0'>
//     <div className='w-full'>
//       <input type="text" placeholder='Enter Contact' className='w-full h-10 rounded-lg border border-gray-400 p-2 focus:outline-none bg-black/5 focus:bg-black/10' />
//     </div>
//     <div className='w-full'>
//       <input type="text" placeholder='Enter Address' className='w-full h-10 rounded-lg border border-gray-400 p-2 focus:outline-none bg-black/5 focus:bg-black/10' />
//     </div>
//   </div>
//   <div className='w-full'>
//     <textarea placeholder='Enter Message' rows={5} className='w-full rounded-lg border border-gray-400 p-2 focus:outline-none bg-black/5 focus:bg-black/10' />
//   </div>
//   <div className='flex justify-center'>
//     <button type='button' className='md:w-1/6 w-1/2 bg-blue-500 h-10 rounded-lg text-white hover:duration-200 hover:bg-blue-600 active:bg-blue-900 active:scale-105'> Submit</button>
//   </div>
// </form>
//     </div>
//   )
// }

// export default Contact



import React from 'react'
import { BsGlobe2 } from 'react-icons/bs';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdMail, MdOutlineFax } from 'react-icons/md';


const Contact = () => {
  return (
    <div className='md:px-4 xl:px-24 bg-contact-background  '>
      <div className="w-full pt-12">
        <p className="text-center text-btn-color font-medium">Contact Us</p>
        <p className="text-center text-3xl md:text-4xl font-regular font-bold">
          Ask your Questions Here
        </p>
      </div>
      <div className='lg:flex gap-5 mt-4 p-4 md:p-2 lg:p-10 space-y-6 lg:space-y-0'>
        <div className='w-full shadow-md shadow-black rounded-lg'>
          <ul className=' grid grid-cols-1 gap-6 text-center text-slate-700 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-5'>
            <li className='flex flex-col items-center space-y-0 rounded-xl bg-transparent hover:scale-105 hover:bg-black/10 duration-300 hover:shadow-lg border border-black px-6 py-8 shadow-sm shadow-black hover:cursor-pointer' >
              <FaLocationDot className='text-xl'/>
              <h3 className="my-3 text-lg font-display font-bold uppercase">Our Office</h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500 font-medium">
                12, Near Greater Park, Sant Colony, Nagpur.
              </p>
            </li>
            <li className='flex flex-col items-center space-y-0 rounded-xl bg-transparent hover:scale-105 hover:bg-black/10 duration-300 hover:shadow-lg border border-black px-6 py-8 shadow-sm shadow-black hover:cursor-pointer' >
              <FaPhone className='text-xl' />
              <h3 className="my-3 text-lg font-display font-bold uppercase">Phone</h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500 font-medium">
                +91-6768869988, +41-6699000099
              </p>
            </li>
            <li className='flex flex-col items-center space-y-0 rounded-xl bg-transparent hover:scale-105 hover:bg-black/10 duration-300 hover:shadow-lg border border-black shadow-sm shadow-black px-6 py-8  hover:cursor-pointer' >
              <MdMail className='text-xl'/>
              <h3 className="my-3 text-lg font-display font-bold uppercase">Email</h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500 font-medium">
               support.help@gmail.com
              </p>
            </li>
            <li className='flex flex-col items-center space-y-0 rounded-xl bg-transparent hover:scale-105 hover:bg-black/10 duration-300 hover:shadow-lg border border-black px-6 py-8 shadow-sm shadow-black hover:cursor-pointer' >
              <MdOutlineFax className='text-xl' />
              <h3 className="my-3 text-lg font-display font-bold">FAX</h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500 font-medium">
                12, Near Greater Park, Sant Colony, Nagpur.
              </p>
            </li>
            <li className='flex flex-col items-center space-y-0 rounded-xl bg-transparent hover:scale-105 hover:bg-black/10 duration-300 hover:shadow-lg border border-black px-6 py-8 shadow-sm shadow-black hover:cursor-pointer' >
              <BsGlobe2 className='text-xl'/>
              <h3 className="my-3 text-lg font-display font-bold uppercase">Website</h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500 font-medium">
                www.google.com
              </p>
            </li>
            <li className='flex flex-col items-center space-y-0 rounded-xl bg-transparent hover:scale-105 hover:shadow-lg hover:bg-black/10 duration-300 border border-black px-6 py-8 shadow-sm shadow-black hover:cursor-pointer' >
              <FaLocationDot className='text-lg'/>
              <h3 className="my-3 text-xl font-display font-bold">Our Office</h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500 font-medium">
                12, Near Greater Park, Sant Colony, Nagpur.
              </p>
            </li>
          </ul>
        </div>
        <div className='w-full shadow-md shadow-black rounded-lg'>
          <form className='w-full space-y-3 p-5  rounded  '>
            <div className='sm:flex gap-4 space-y-4 sm:space-y-0'>
              <div className='w-full'>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full h-10 rounded-lg border border-gray-400 p-2  focus:outline-none bg-white focus:bg-gray-50"
                />
              </div>
              <div className='w-full'>
                <input type="text" placeholder='Enter Email' className='w-full h-10 rounded-lg border border-gray-400 p-2 focus:outline-none bg-white focus:bg-gray-50' />
              </div>
            </div>
            <div className='sm:flex gap-4 space-y-4 sm:space-y-0'>
              <div className='w-full'>
                <input type="text" placeholder='Enter Contact' className='w-full h-10 rounded-lg border border-gray-400 p-2 focus:outline-none bg-white focus:bg-gray-50' />
              </div>
              <div className='w-full'>
                <input type="text" placeholder='Enter Address' className='w-full h-10 rounded-lg border border-gray-400 p-2 focus:outline-none bg-white focus:bg-gray-50' />
              </div>
            </div>
            <div className='w-full'>
              <textarea placeholder='Enter Message' rows={5} className='w-full rounded-lg border border-gray-400 p-2 focus:outline-none bg-white focus:bg-gray-50' />
            </div>
            <div className='flex justify-center'>
              <button type='button' className='md:w-1/6 w-1/2 bg-blue-500 h-10 rounded-lg text-white hover:duration-200 hover:bg-blue-600 active:bg-blue-900 active:scale-105'> Submit</button>
            </div>
          </form></div>
      </div>
    </div>
  )
}

export default Contact