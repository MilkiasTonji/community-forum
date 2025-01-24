import React, { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io';
import { useAuth } from '../hooks/useAuth';
import { GiHamburgerMenu } from "react-icons/gi";
import LeftSideBar from './sidebars/LeftSideBar';


const Navbar: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [openMobileNav, setOpenMobileNav] = useState<boolean>(false)
    const { user } = useAuth();

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const toggleMobileNav = () => {
        setOpenMobileNav(!openMobileNav);
    }

    return (
        <div className='w-full flex flex-col'>
            <div className='w-full flex items-center justify-between px-4 py-2 bg-white rounded-md'>
                {/* logo section */}
                <div className='h-full'>
                    <h1 className='text-2xl font-bold leading-none'><span className='text-[#324eec]'>Community</span> <span className='text-orange-500'>Page</span></h1>
                    <span className='text-xs -mt-5 font-semibold font-serif'><span className='text-orange-600'>Level Up Your</span> <span className='text-[#324eec]'>Discussions</span></span>
                </div>

                {/* profile/auth section */}
                {
                    !user &&
                    <div className='hidden md:block'>
                        <button
                            onClick={handleOpenModal}
                            className="border-[1px] bg-[#3E5AF0] hover:bg-white hover:border-[#324eec] text-white hover:text-black font-bold py-2 px-4 rounded inline-flex items-center">
                            <FaSignInAlt className="w-4 h-4 " />
                            <span className="font-bold px-2">Login</span>
                        </button>
                    </div>
                }

                {
                    isModalOpen && (
                        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
                    )
                }

                <div className='block md:hidden px-2 py-1 cursor-pointer' onClick={toggleMobileNav}>
                    <GiHamburgerMenu className='w-5 h-5' />
                </div>
            </div>
            {
                openMobileNav &&
                <div className='w-full flex flex-col rounded-2xl md:rounded-md'>
                    <LeftSideBar handleOpenModal={handleOpenModal} />
                </div>
            }
        </div>
    )
}


const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {

    const { login } = useAuth();
    const [fullName, setFullName] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = () => {
        login(fullName, userName, password);
        onClose();
    }

    if (!isOpen) return null;

    return (
        <div className="fixed w-full inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-[90%] md:w-[100%] md:max-w-2xl max-w-xl rounded-lg shadow-lg p-6 relative">
                <IoMdClose className="w-6 h-6 text-black cursor-pointer absolute right-5 top-3" onClick={onClose} />
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Login</h2>

                {/* login form here */}

                <div className='flex flex-col gap-5 py-5'>

                    <label htmlFor="input-group-2"
                        className="block -mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Full Name
                    </label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </span>
                        <input
                            type="text"
                            id="input-group-2"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block 
                            flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Full Name" />
                    </div>

                    <label htmlFor="input-group-1"
                        className="block -mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Username
                    </label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </span>
                        <input
                            type="text"
                            id="input-group-1"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="username" />
                    </div>

                    <label htmlFor="input-group-3"
                        className="block -mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Password</label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" fill="currentColor">
                                <g id="SVGRepo_iconCarrier"> <g id="XMLID_509_"> <path id="XMLID_510_" d="M65,330h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85 S80,38.131,80,85v45H65c-8.284,0-15,6.716-15,15v170C50,323.284,56.716,330,65,330z M180,234.986V255c0,8.284-6.716,15-15,15 s-15-6.716-15-15v-20.014c-6.068-4.565-10-11.824-10-19.986c0-13.785,11.215-25,25-25s25,11.215,25,25 C190,223.162,186.068,230.421,180,234.986z M110,85c0-30.327,24.673-55,55-55s55,24.673,55,55v45H110V85z"></path> </g> </g></svg>
                        </span>
                        <input
                            type="password"
                            id="input-group-3"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500
                             focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600
                              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="password" />
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        onClick={handleLogin}
                        className="border-[1px] border-[#3E5AF0] hover:bg-[#324eec] hover:text-white text-black font-bold py-2 px-4 rounded inline-flex items-center"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};


export default Navbar