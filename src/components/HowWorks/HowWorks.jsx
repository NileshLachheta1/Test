import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

const scrollVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const HowWorks = () => {
  const [focusClass, setFocusClass] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const elements = document.querySelectorAll('.each-event, .title');
      elements.forEach((element) => {
        const elementHeight = element.offsetHeight;
        const elementOffset = element.getBoundingClientRect().top;
        const space = windowHeight - (elementHeight + elementOffset);
        setFocusClass((prev) => ({
          ...prev,
          [element.dataset.id]: space < 60,
        }));
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Trigger the scroll check on initial render

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const timeline = [
    {
      title: "Stimulating Growth Hormones",
      description: "The capsules encourage the production of human growth hormones (HGH), which play a critical role in bone growth and overall development.",
      image: "https://i.ytimg.com/vi/xU-DLsyAscI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCA-GO4ArglPoShryDLpcBAnAsl2g"
    },
    {
      title: "Enhancing Bone Density",
      description: " Our formula strengthens bones, making them more robust and capable of growing longer.",
      image: "https://www.jiomart.com/images/product/original/rviuhn8wfy/growth-up-height-increasing-and-height-growth-capsules-height-enhancer-medicine-enhance-your-bone-density-pack-of-3-chocolate-flavour-product-images-orviuhn8wfy-p601948171-5-202305291259.png?im=Resize=(420,420)"
    },
    {
      title: "Improving Posture",
      description: " Height Growth Capsules also help in correcting posture, giving you an instant height boost by aligning your spine properly.",
      image: "https://images.squarespace-cdn.com/content/v1/599d753a6a496355394da746/1599807620199-12PLFRHH3MFCMHM69N9K/Kyphosis-Normal-vs-Hyper.jpg"
    },
    {
      title: "Supporting Overall Health",
      description: " With a combination of essential nutrients, these capsules not only promote height growth but also support overall health and wellness.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/432385252/AQ/XE/VM/13578026/bonescie-inc-height-growth-maximizer-bone-density-health-support-500x500.png"
    },

  ];

  return (
    <div className="w-full  min-h-screen py-12 box-border text-gray-800">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={scrollVariants}
        transition={{ duration: 0.8 }}
      >
        <p className="text-center text-btn-color font-medium">How It Works</p>
        <p className="text-center text-3xl md:text-4xl lg:text-5xl font-regular font-bold">How it helps to grow</p>
      </motion.div>
      <section className="relative block bg-work-process bg-cover bg-no-repeat ">
        <div className="absolute h-[calc(90%-40px)] bg-gray-400 w-[1px] left-1/2 mt-[80px] hidden md:block"></div>
        <div className="relative my-10 px-2 sm:px-5">
          <div className="space-y-5 md:space-y-0 ">
            {timeline.map((data, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row justify-between each-event italic text-gray-700 md:p-5 my-10 w-full mx-auto md:w-[48%] lg:w-[calc(40%-20px)] rounded-lg relative box-border transition-all duration-300 hover:scale-105 ${focusClass[`event-2016-${index}`] ? 'text-gray-300 mt-20 transform rotate-3 p-2 md:p-0 md:rotate-12' : ''
                  } ${index % 2 === 0 ? 'md:ml-[calc(48%+10px)]' : 'md:ml-[calc(50%-calc(48%-20px)-10px)] lg:ml-[calc(60%-calc(48%-20px)-10px)]'
                  }`}
                data-id={`event-2016-${index}`}
              >
                <div className={`flex border-2 w-full bg-white/40 p-5 rounded-lg shadow-lg ${index % 2 === 0 ? 'order-last flex-row-reverse' : ''} box-border transition-all duration-300 ${focusClass[`event-2016-${index}`] ? 'bg-gray-400 text-gray-300 mt-20 transform' : ''
                  }`}>
                  <div>
                    <p className='text-2xl font-bold font-serif mb-2 border-b-2 border-gray-700'>{data?.title}</p>
                    <p className='text-md text-gray-700 text-justify'>{data?.description}</p>
                  </div>
                  <div className='w-full flex justify-center lg:w-32 rounded-full'>
                    <img src={data?.image} className='h-16 rounded-full' alt="" />
                  </div>
                </div>
                <div className={`hidden md:flex justify-start items-center  ${index % 2 === 0 ? 'rotate-180' : ''}`}>
                  <img src="https://cdn3.iconfinder.com/data/icons/neutro-interface/32/forward-64.png" className='h-8 w-full' alt="" />
                  {/* <IoMdArrowDropright className='text-gray-700 text-5xl'/> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWorks;
