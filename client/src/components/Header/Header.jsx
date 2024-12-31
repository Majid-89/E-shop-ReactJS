import React, { useEffect, useState } from 'react'
import { TbSearch } from 'react-icons/tb'
import { CgShoppingCart } from 'react-icons/cg'
import { AiOutlineHeart } from 'react-icons/ai'


const Header = () => {
    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        const offset = window.scrollY
        if (offset > 200) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <div className={`bg-black text-white ${scrolled && 'sticky top-0 z-50 w-full  transition-all duration-300'}`}>
                <div className="max-w-[1200px] mx-auto flex justify-between items-center p-4 px-7 md:px-10">
                    <ul className='hidden md:flex gap-4 cursor-pointer  '>
                        <li className='text-white hover:text-yellow-500 duration-300'>Home</li>
                        <li className='text-white hover:text-yellow-500 duration-300 '>About</li>
                        <li className='text-white hover:text-yellow-500 duration-300'>Category</li>
                    </ul>
                    <div className="logo text-[20px] font-[500] md:text-[30px] md:font-[700] cursor-pointer">
                        E-<span className='text-yellow-500'>shop</span>
                    </div>
                    <div className="flex gap-4 cursor-pointer text-[20px]">
                        <TbSearch />
                        <AiOutlineHeart />
                        <span className='relative'>
                            <CgShoppingCart />
                            <span className='absolute right-[-20px] bg-blue-800 inline-block px-2 py-[2px]  rounded-full top-[-10px] text-xs'>0</span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header