import React from 'react'
import { TbSearch } from 'react-icons/tb'
import { CgShoppingCart } from 'react-icons/cg'
import { AiOutlineHeart } from 'react-icons/ai'


const Header = () => {
    return (
        <>
            <div className="bg-black text-white">
                <div className="max-w-[1240px] mx-auto flex justify-between items-center p-4">
                    <ul className='flex gap-4 cursor-pointer'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Category</li>
                    </ul>
                    <div className="logo text-[30px] font-[700] cursor-pointer">
                        E-shop
                    </div>
                    <div className="flex gap-4 cursor-pointer text-[20px]">
                        <TbSearch />
                        <AiOutlineHeart />
                        <span className='relative'>
                            <CgShoppingCart />
                            <span className='absolute right-[-10px] bg-blue-800 inline-block w-20 rounded-full'>0</span>
                        </span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header