import React from 'react'
import { motion } from 'framer-motion';

const scrollVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const leftHorizontalScroll = {
  hidden: { opacity: 0,  y: -50 },
  visible: { opacity: 1, y: 0 },
};


const rightHorizontalScroll = {
  hidden: { opacity: 0,  y: 50 },
  visible: { opacity: 1, y: 0 },
};



const FAQ = () => {
  return (
    <>
      <div className=" w-full pt-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={scrollVariants}
          transition={{ duration: 0.8 }}
        >

          <p className="text-center text-btn-color font-medium">FAQ</p>
          <p className="text-center text-3xl md:text-4xl lg:text-5xl font-regular font-bold">
            What our customers say
          </p>
        </motion.div>
      </div>

      <div className=" w-full md:flex gap-8 py-5 px-2 xl:px-32 space-y-4 md:space-y-0 border-b border-gray-200">
        <motion.div className="w-full md:py-2 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={leftHorizontalScroll}
          transition={{ duration: 0.8 }}
        >
          <img src="https://img.freepik.com/premium-vector/frequently-asked-questions-faq-label-flat-style-characters_123447-3933.jpg?w=1060" className='w-full rounded-xl' alt="" />
        </motion.div>
        <motion.div className="w-full md:py-2 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={rightHorizontalScroll}
          transition={{ duration: 0.8 }}>
          <div className="p-5 w-full bg-gray-200 rounded-md hover:bg-gray-300 duration-300">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>1. Can adults benefit from Height Growth Capsules?</span>
                <span className="transition-transform duration-300 group-open:rotate-180 active:bg-gray-100 active:ring ring-offset-1 ring-gray-100 active:rounded-full">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision"
                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="overflow-hidden max-h-0 transition-all group-open:max-h-96 duration-500 group-open:py-2">
                <p className="mt-3 text-neutral-600">
                  Yes, Height Growth Capsules are designed for both teenagers and adults. While growth plates typically close after puberty, our capsules focus on improving bone density, posture, and overall health, which can lead to a slight increase in height even in adults.
                </p>
              </div>
            </details>
          </div>

          <div className="p-5 w-full bg-gray-200 rounded-md hover:bg-gray-300 duration-300">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>2. How long does it take to see results?</span>
                <span className="transition-transform duration-300 group-open:rotate-180 active:bg-gray-100 active:ring ring-offset-1 ring-gray-100 active:rounded-full">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision"
                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="overflow-hidden max-h-0 duration-500 transition-all group-open:max-h-96 group-open:py-2">
                <p className="mt-3 text-neutral-600">
                  Results can vary depending on the individual. Most users start noticing improvements in their posture and overall well-being within the first month. Significant height changes may take 3-6 months of consistent use.
                </p>
              </div>
            </details>
          </div>
          {/* </div>

        <div className="w-full md:py-2 space-y-4"> */}
          <div className="p-5 w-full bg-gray-200 rounded-md hover:bg-gray-300 duration-300">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>3. Are there any side effects?</span>
                <span className="transition-transform duration-300 group-open:rotate-180 active:bg-gray-100 active:ring ring-offset-1 ring-gray-100 active:rounded-full">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision"
                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="overflow-hidden max-h-0 duration-500 transition-all group-open:max-h-96 group-open:py-2">
                <p className="mt-3 text-neutral-600">
                  Height Growth Capsules are made with natural ingredients and are generally safe for use. However, we recommend consulting your healthcare provider before starting any new supplement, especially if you have any pre-existing health conditions.
                </p>
              </div>
            </details>
          </div>

          <div className="p-5 w-full bg-gray-200 rounded-md hover:bg-gray-300 duration-300">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>4. Do I need to follow a specific diet while taking the capsules?</span>
                <span className="transition-transform duration-300 group-open:rotate-180 active:bg-gray-100 active:ring ring-offset-1 ring-gray-100 active:rounded-full">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision"
                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="overflow-hidden max-h-0 duration-500 transition-all group-open:max-h-96 group-open:py-2">
                <p className="mt-3 text-neutral-600">
                  For optimal results, we recommend maintaining a balanced diet rich in calcium, vitamin D, and protein. Regular exercise and adequate sleep also play a crucial role in supporting your body’s growth processes.
                </p>
              </div>
            </details>
          </div>
        </motion.div>
      </div>

    </>
  )
}

export default FAQ
