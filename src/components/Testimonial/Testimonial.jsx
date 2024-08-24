import React, { useEffect, useState, useRef } from 'react';
import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';

function Testimonial() {

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




  const sliderRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const prevDesktopRef = useRef(null);
  const nextDesktopRef = useRef(null);

  useEffect(() => {
    const slider = new KeenSlider(sliderRef.current, {
      loop: true,
      slides: {
        origin: 'center',
        perView: 1.25,
        spacing: 45,
      },
      breakpoints: {
        '(min-width: 1024px)': {
          slides: {
            origin: 'auto',
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });

    const handlePrev = () => slider.prev();
    const handleNext = () => slider.next();

    prevRef.current.addEventListener('click', handlePrev);
    nextRef.current.addEventListener('click', handleNext);
    prevDesktopRef.current.addEventListener('click', handlePrev);
    nextDesktopRef.current.addEventListener('click', handleNext);

    return () => {
      slider.destroy();
      prevRef.current.removeEventListener('click', handlePrev);
      nextRef.current.removeEventListener('click', handleNext);
      prevDesktopRef.current.removeEventListener('click', handlePrev);
      nextDesktopRef.current.removeEventListener('click', handleNext);
    };
  }, []);
  return (
    <>

      {/* Testimonial Section */}
      <section className=" border-b border-slate-300">
        <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Satisify Clients
              </h2>
              <p className="mt-4 text-gray-700">
              Don’t just take our word for it – see what our customers have to say:
              </p>
              <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                <button
                  aria-label="Previous slide"
                  ref={prevDesktopRef}
                  className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button
                  aria-label="Next slide"
                  ref={nextDesktopRef}
                  className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                >
                  <svg
                    className="size-5 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="-mx-4 sm:-mx-6 lg:col-span-2 lg:mx-0 ">
              <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide">
                  <blockquote className="flex h-full flex-col justify-between bg-white  shadow-sm sm:p-8 lg:p-12 hover:bg-gray-100 hover:rotate-1 hover:scale-105 duration-500">
                    <div>
                      <div className="flex gap-0.5 text-green-500">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <svg
                            key={starIndex}
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>
                        ))}
                      </div>

                      <div className="mt-4 w-full">
                        <p className="text-2xl font-bold text-rose-600 sm:text-3xl">David, 32</p>
                        <p className="mt-4 leading-relaxed text-gray-700 text-justify w-full">
                          I was skeptical at first, but after three months, I can honestly say these capsules work. My posture is better, and I feel taller and more energetic.                        </p>
                      </div>
                    </div>

                  </blockquote>
                </div>
                <div className="keen-slider__slide">
                  <blockquote className="flex h-full flex-col justify-between bg-white  shadow-sm sm:p-8 lg:p-12 hover:bg-gray-100 hover:rotate-1 hover:scale-105 duration-500">
                    <div>
                      <div className="flex gap-0.5 text-green-500">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <svg
                            key={starIndex}
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>
                        ))}
                      </div>

                      <div className="mt-4 w-full">
                        <p className="text-2xl font-bold text-rose-600 sm:text-3xl">John, 25</p>
                        <p className="mt-4 leading-relaxed text-gray-700 text-justify w-full">
                          I've been using Height Growth Capsules for six months, and I've already noticed a 2-inch increase in my height! I feel more confident and happier with my appearance.
                        </p>
                      </div>
                    </div>
                  </blockquote>
                </div>

                <div className="keen-slider__slide">
                  <blockquote className="flex h-full flex-col justify-between bg-white  shadow-sm sm:p-8 lg:p-12 hover:bg-gray-100 hover:rotate-1 hover:scale-105 duration-500">
                    <div>
                      <div className="flex gap-0.5 text-green-500">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <svg
                            key={starIndex}
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>
                        ))}
                      </div>

                      <div className="mt-4 w-full">
                        <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Sarah, 18</p>
                        <p className="mt-4 leading-relaxed text-gray-700 text-justify w-full">
                          These capsules have been a game-changer for me. My posture has improved, and I've grown taller than I ever thought possible.                        </p>
                      </div>
                    </div>

                  </blockquote>
                </div>
              </div>
              <div className="mt-8 flex justify-center gap-4 lg:hidden">
                <button
                  aria-label="Previous slide"
                  ref={prevRef}
                  className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button
                  aria-label="Next slide"
                  ref={nextRef}
                  className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                >
                  <svg
                    className="size-5 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}

export default Testimonial;