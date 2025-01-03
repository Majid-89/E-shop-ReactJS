import React from 'react'
import prod1 from "../../../assets/products/earbuds-prod-1.webp"
import { MdClose } from 'react-icons/md'
import { FaCartPlus } from 'react-icons/fa'

const CartItem = () => {
    return (
        <div>
            <div className='flex'>
                <div className="img">
                    <img src={prod1} className='w-16 h-16' alt="" />
                </div>
                <div className="relative">
                    <span className='text-[16px]  font-semibold block pr-6 max-w-[250px] truncate'>Product </span>
                    <MdClose className=' absolute top-0 right-0 cursor-pointer' />
                    <div className="flex justify-center items-center gap-5 border-[2px] border-[rgba(0,0,0,0.2)] my-3 w-[132px]">
                        <span className='cursor-pointer border-r-[2px] border-[rgba(0,0,0,0.2)] p-2 px-4  hover:bg-slate-400 hover:border-slate-400'>-</span>
                        <span>5</span>
                        <span className='cursor-pointer border-l-[2px] border-[rgba(0,0,0,0.2)] p-2 px-4 hover:bg-slate-400 hover:border-slate-400' >+</span>
                    </div>
                    <div className="flex items-center  gap-1 text-xs font-semibold">
                        <span>3</span><span>X</span><span className='text-[#8e2de2]'>$1234</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem