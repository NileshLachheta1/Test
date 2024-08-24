import React from 'react'
import { GiCheckMark } from "react-icons/gi";
import { motion } from 'framer-motion';

const scrollVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const leftHorizontalScroll = {
  hidden: { opacity: 0, x : -50 },
  visible: { opacity: 1, x : 0 },
};

const rightHorizontalScroll = {
  hidden: { opacity: 0, x : 50 },
  visible: { opacity: 1, x : 0 },
};

const Ingredients = () => {
  return (
    <div className='border-b'>
      <motion.div className='py-5'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scrollVariants}
            transition={{ duration: 0.8 }}
            >
        <p className="text-center text-btn-color font-medium">Ingredients</p>
        <p className="text-center text-3xl md:text-4xl lg:text-5xl font-regular font-bold">What Mixtures are Contained</p>

      </motion.div>
      <div className='md:flex items-start lg:px-24 md:p-10 gap-10 space-y-3 '>
        <motion.div className='w-full md:p-4 bg-gray-100 rounded-lg'
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={leftHorizontalScroll}
                  transition={{ duration: 0.8 }}
                  >
          <img src="https://imgs.search.brave.com/1aiApqyWdYTw1OcVoRcNCycz-NpNVNM3BJT90Mm9MJM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucnhsaXN0LmNv/bS9pbWFnZXMvaG9t/ZXBhZ2UvcngtcGls/bHMtYmtnZC5qcGc" className='w-full  hover:scale-105 duration-300 rounded-xl shadow-md shadow-black ' alt="" />
        </motion.div>
        <motion.div className='w-full'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={rightHorizontalScroll}
              transition={{ duration: 0.8 }}>
          <p className='text-xl font-bold py-4 text-center md:text-start'>Nutritions Contains</p>
          <ul className='space-y-2 md:space-y-4 py-2 '>
            <li className='relative text-sm hover:cursor-pointer flex gap-2 items-start md:items-start font-normal px-2'><img src="https://imgs.search.brave.com/3n5JB9dZgP_GJTNJ7-WExPx_L8uW6YlUv28_iIcR5t4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9l/L2U0L0dyZWVuX3Rp/Y2sucG5n" className='h-5 ' alt="" /><span className='font-bold '>Calcium:</span> Essential for strong bones and teeth.</li>
            <li className='relative text-sm hover:cursor-pointer flex gap-2 items-start md:items-start font-normal px-2'><img src="https://imgs.search.brave.com/3n5JB9dZgP_GJTNJ7-WExPx_L8uW6YlUv28_iIcR5t4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9l/L2U0L0dyZWVuX3Rp/Y2sucG5n" className='h-5 ' alt="" /><span className='font-bold '>VitaminD:</span> Helps in calcium absorption, ensuring your bones receive the nutrients they need.</li>
            <li className='relative text-sm hover:cursor-pointer flex gap-2 items-start md:items-start font-normal px-2'><img src="https://imgs.search.brave.com/3n5JB9dZgP_GJTNJ7-WExPx_L8uW6YlUv28_iIcR5t4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9l/L2U0L0dyZWVuX3Rp/Y2sucG5n" className='h-5 ' alt="" /><span className='font-bold '>Zinc:</span> Plays a significant role in cell growth and repair.</li>
            <li className='relative text-sm hover:cursor-pointer flex gap-2 items-start md:items-start font-normal px-2'><img src="https://imgs.search.brave.com/3n5JB9dZgP_GJTNJ7-WExPx_L8uW6YlUv28_iIcR5t4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9l/L2U0L0dyZWVuX3Rp/Y2sucG5n" className='h-5 ' alt="" /><span className='font-bold '>LArginine:</span> An amino acid that stimulates the production of growth hormones.</li>
            <li className='relative text-sm hover:cursor-pointer flex gap-2 items-start md:items-start font-normal px-2'><img src="https://imgs.search.brave.com/3n5JB9dZgP_GJTNJ7-WExPx_L8uW6YlUv28_iIcR5t4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9l/L2U0L0dyZWVuX3Rp/Y2sucG5n" className='h-5 ' alt="" /><span className='font-bold '>Ashwagandha:</span> A powerful adaptogen that supports overall health and vitality.</li>
            <li className='relative text-sm hover:cursor-pointer flex gap-2 items-start md:items-start font-normal px-2'><img src="https://imgs.search.brave.com/3n5JB9dZgP_GJTNJ7-WExPx_L8uW6YlUv28_iIcR5t4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9l/L2U0L0dyZWVuX3Rp/Y2sucG5n" className='h-5 ' alt="" /><span className='font-bold '>Arginine:</span> An amino acid that stimulates the production of growth hormones.</li>
            <li className='relative text-sm hover:cursor-pointer flex gap-2 items-start md:items-start font-normal px-2'><img src="https://imgs.search.brave.com/3n5JB9dZgP_GJTNJ7-WExPx_L8uW6YlUv28_iIcR5t4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9l/L2U0L0dyZWVuX3Rp/Y2sucG5n" className='h-5 ' alt="" /><span className='font-bold '>VitaminA:</span> A powerful adaptogen that supports overall health and vitality.</li>
          </ul>
        </motion.div>
      </div>

    </div>
  )
}

export default Ingredients