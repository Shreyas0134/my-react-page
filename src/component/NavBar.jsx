import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const NavBar = () => {
    const [nav, SetNav] = useState(false)

    const handelNav = () => {
        SetNav(!nav)
    }
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white  '>
            <h1 className=' w-full text-3xl font-bold text-[#00df9a]'>React.</h1>

            <ul className=' hidden md:flex '>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handelNav} className='block md:hidden'>
                {!nav ? <AiOutlineMenu size={20}  /> :  <AiOutlineClose size={20} />}

            </div>
            <div className={!nav ? 'fixed left-[-100%]' :'fixed left-0 top-0  w-[60%] h-full border-r border-r-gray-900  bg-[#000300] ease-in-out duration-500'   }>
                <h1 className=' w-full text-3xl font-bold text-[#00df9a] m-4'>React.</h1>
                <ul className='p-4 uppercase'>
                    <li className='p-4 border-b border-b-gray-600'>Home</li>
                    <li className='p-4 border-b border-b-gray-600'>Company</li>
                    <li className='p-4 border-b border-b-gray-600'>Resources</li>
                    <li className='p-4 border-b border-b-gray-600'>About</li>
                    <li className='p-4 border-b border-b-gray-600'>Contact</li>
                </ul>
            </div>
        </div>

    )
}

export default NavBar