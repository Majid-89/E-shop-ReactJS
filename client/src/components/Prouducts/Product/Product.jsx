import React from 'react'
import img_1 from "../../../assets/products/earbuds-prod-1.webp"

const Product = () => {
    return (
        <div className=''>
            <div className="bg-[rgba(0,0,0,0.09)] p-1 h-72 group">
                <img src={img_1} className='w-full group-hover:scale-110 duration-300' alt="" />
            </div>
            <div className="">
                <span className='block text-[14px] whitespace-nowrap md:text-[16px] my-[10px] font-[400]'>Product Name</span>
                <span className='block text-[18px] whitespace-nowrap md:text-[24px] my-[10px] font-[500]'>$ 8899</span>
            </div>
        </div>
    )
}

export default Product