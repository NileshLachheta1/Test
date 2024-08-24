import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineScience } from 'react-icons/md';
import { TbManFilled } from 'react-icons/tb';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { TfiSupport } from 'react-icons/tfi';

const scrollVariants = {
        hidden: { opacity: 0, y: 100 },
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

const cards = [
        {
                icon: <MdOutlineScience className='mx-auto text-xl hover:text-2xl text-blue-600 duration-300' />,
                title: 'Scientifically Formulated Blend',
                description: 'Our Height Growth Capsules are crafted with a unique combination of vitamins, minerals, and natural ingredients, specifically designed to support and enhance your body\'s natural growth potential.',
        },
        {
                icon: <TbManFilled className='mx-auto text-xl hover:text-2xl text-blue-600 duration-300' />,
                title: 'Suitable for All Ages',
                description: 'Whether you\'re a teenager striving to reach your maximum height or an adult seeking to gain a few extra inches, our capsules are tailored to meet the needs of individuals at any stage of life.',
        },
        {
                icon: <MdOutlineHealthAndSafety className='mx-auto text-xl hover:text-2xl text-blue-600 duration-300' />,
                title: 'Natural and Safe Ingredients',
                description: 'We prioritize your health by using only natural and safe ingredients in our capsules, ensuring that you can pursue your height goals without compromising your well-being.',
        },
        {
                icon: <TfiSupport className='mx-auto text-xl hover:text-2xl text-blue-600 duration-300' />,
                title: 'Supports Overall Growth and Development',
                description: 'In addition to promoting height, our capsules contribute to your overall growth and development, providing essential nutrients that your body needs to thrive.',
        }
]

const WhyChooseUs = () => {
        return (
                <div className='border-b border-gray-300 bg-blue-50 py-10'>
                        <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                                variants={scrollVariants}
                                transition={{ duration: 0.8 }}
                        >
                                <p className="text-center text-btn-color font-medium">Why Choose US</p>
                                <p className="text-center text-3xl md:text-4xl lg:text-5xl font-regular font-bold">Why Customers Like Us</p>
                        </motion.div>
                        <div className='lg:flex justify-between px-4 sm:px-10 md:px-16 xl:px-24'>
                                <div className='w-full'>
                                        <div className="px-2 py-10">
                                                <div id="features" className="mx-auto max-w-6xl">
                                                        <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-2 ">
                                                                {cards.map((feature, index) => (
                                                                        <motion.li
                                                                                key={index}
                                                                                className='rounded-xl bg-white border-2 border-gray-400 px-6 py-8 shadow-sm hover:border-blue-400 hover:cursor-pointer'
                                                                                initial="hidden"
                                                                                whileInView="visible"
                                                                                viewport={{ once: false, amount: 0.2 }}
                                                                                variants={leftHorizontalScroll}
                                                                                transition={{ duration: 0.8 }}
                                                                        >
                                                                                <div className='hover:scale-105 duration-500'>

                                                                                        {feature.icon}
                                                                                        <h3 className="my-3 font-display font-medium">{feature.title}</h3>
                                                                                        <p className="mt-1.5 text-sm leading-6 text-secondary-500 text-justify">
                                                                                                {feature.description}
                                                                                        </p>
                                                                                </div>
                                                                        </motion.li>
                                                                ))}
                                                        </ul>
                                                </div>
                                        </div>
                                </div>
                                <motion.div
                                        className='w-full p-5 hover:scale-105 duration-500 hidden lg:block'
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.2 }}
                                        variants={rightHorizontalScroll}
                                        transition={{ duration: 0.8 }}
                                >
                                        <img
                                                src="https://thefamilydoctor.co.in/wp-content/uploads/2020/01/I2-e1578898118449.png"
                                                className='w-full h-full rounded-md'
                                                alt="Height Growth Capsules"
                                        />
                                </motion.div>
                        </div>
                </div >
        );
}

export default WhyChooseUs;
