import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md'; // Optional: For menu toggle icons

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white border-gray-200 py-2.5">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <a href="#" className="flex items-center">
                    <img
                        src="https://imgs.search.brave.com/V_BO95fx3fs2yXPvz1RMjoGW2xCZk1abt-CYy0aWP0I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9vbmxp/bmVwbmd0b29scy5j/b20vaW1hZ2VzL2V4/YW1wbGVzLW9ubGlu/ZXBuZ3Rvb2xzL2dv/b2dsZS1sb2dvLnBu/Zw"
                        className="h-6 mr-3 sm:h-9"
                        alt="Landwind Logo"
                    />
                </a>
                <div className="flex items-center ">
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="mobile-menu-2"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? <MdClose className="w-6 h-6" /> : <MdMenu className="w-6 h-6" />}
                    </button>
                </div>
                <div
                    className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${isOpen ? 'block' : 'hidden'}`}
                    id="mobile-menu-2"
                >
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0"
                            >
                                Company
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0"
                            >
                                Marketplace
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0"
                            >
                                Features
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0"
                            >
                                Team
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
