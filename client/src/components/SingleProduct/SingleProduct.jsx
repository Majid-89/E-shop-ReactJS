import React from 'react'
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram, FaLinkedinIn, FaCartPlus } from 'react-icons/fa'
import Prod from "../../assets/products/earbuds-prod-1.webp"
import RelatedProducts from './RelatedProducts/RelatedProducts'

const SingleProduct = () => {
    return (
        <div className='w-[95%] md:max-w-[1200px] mx-auto'>
            <div className="w-[95%] md:max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5  my-5 md:my-[75px]">
                <div className=" w-full bg-[rgba(0,0,0,0.08)] md:h-[600px] md:w-[600px] ">
                    <img src={Prod} className='w-full block' alt="" />
                </div>
                <div className="flex flex-col pt-5 md:pt-0 md:px-9">
                    <span className='text-[20px] mb-5 md:text-[24px] leading-7 md:leading-8'>Product Name</span>
                    <span className='text-[20px] mb-5 md:text-[24px] leading-7 md:leading-8'>Price</span>
                    <span className='leading-5 text-sm mb-12 text-[#6b6b6b]'>Product Description</span>

                    <div className="flex items-center">
                        <div className="flex justify-center items-center gap-7 border-[2px] border-[rgba(0,0,0,0.2)]">
                            <span className='cursor-pointer border-r-[2px] border-[rgba(0,0,0,0.2)] p-2 px-4  hover:bg-slate-400 hover:border-slate-400'>-</span>
                            <span>5</span>
                            <span className='cursor-pointer border-l-[2px] border-[rgba(0,0,0,0.2)] p-2 px-4 hover:bg-slate-400 hover:border-slate-400' >+</span>
                        </div>
                        <button className='flex outline-none text-[16px] items-center justify-center bg-[#8e2de2] text-white px-5 py-2 border-b-[3px] border-[#8e2de2] hover:bg-[#6e1de2] '>
                            <FaCartPlus size={20} />
                            ADD TO CART
                        </button>
                    </div>

                    <span className='my-5 h-[1px] w-full bg-[rgba(0,0,0,0.1)]'></span>

                    <div className="">
                        <span className='block mb-5'> <span className='text-[18px] font-medium'>Category: </span><span className='leading-5 text-sm mb-12 text-[#6b6b6b]'>HeadPhones</span></span>
                        <span className='flex text-[18px] font-medium items-center'>Share: <span>
                            <div className="flex gap-3 cursor-pointer">
                                <FaFacebookF size={16} />
                                <FaTwitter size={16} />
                                <FaPinterest size={16} />
                                <FaInstagram size={16} />
                                <FaLinkedinIn size={16} />
                            </div>
                        </span>
                        </span>
                    </div>
                </div>

            </div>
            <RelatedProducts />
        </div>
    )
}

export default SingleProduct