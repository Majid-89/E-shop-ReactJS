import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import NewsletterBg from "../../../assets/newsletter-bg.jpeg"

const Newsletter = () => {
    return (
        <>
            <div className="bg-center bg-no-repeat bg-cover flex justify-center items-center" style={{ backgroundImage: `url(${NewsletterBg})` }} >
                <div className="py-10 flex flex-col items-center">
                    <p className='uppercase mb-4 text-[rgba(0,0,0,0.5)]'>NewsLetter</p>
                    <h2 className='mb-5 text-[16px] md:text-[22px] font-[500] uppercase px-[30px] text-center'>Sign up for latest updates and offers</h2>
                    <div className="mb-3 flex justify-center items-center">
                        <form action="" className='mb-3 flex justify-center items-center'>
                            <input className='w-[200px] h-[40px] border border-[rgba(0,0,0,0.2)] outline-none md:w-[300px] px-4 inline-block' type="email" placeholder='Email Address' />
                            <button className='outline-none border-none h-[40px] w-[100px] cursor-pointer text-[16px] bg-[#8e2de2] inline-block  text-white border-b-4 border-[#8e2de2] md:w-[120px]'>Subscribe</button>
                        </form>
                    </div>
                    <p className='mb-5 text-[14px]  text-[rgba(0,0,0,0.5)]'>Will be used in accordance with our privacy policy</p>
                    <div className="flex text-white ">
                        <div className="bg-[rgba(0,0,0,0.8)] p-2 rounded-full mr-2 cursor-pointer">
                            <FaFacebookF size={14} className=' cursor-pointer  duration-300' />
                        </div>
                        <div className="bg-[rgba(0,0,0,0.8)] p-2 rounded-full mr-2 cursor-pointer">
                            <FaTwitter size={14} className='  cursor-pointer  duration-300' />
                        </div>
                        <div className="bg-[rgba(0,0,0,0.8)] p-2 rounded-full mr-2 cursor-pointer">
                            <FaInstagram size={14} className='   cursor-pointer  duration-300' />
                        </div>
                        <div className="bg-[rgba(0,0,0,0.8)] p-2 rounded-full mr-2 cursor-pointer">
                            <FaYoutube size={14} className='  cursor-pointer  duration-300' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter