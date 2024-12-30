import React from 'react'
import Newsletter from './Newsletter/Newsletter'
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa'
import Payment from "../../assets/payments.png"

const Footer = () => {
    return (
        <div>
            < Newsletter />

            {/* main footer */}

            <footer className='w-full'>
                <div className="max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-10 py-10 px-3 md:px-12">
                    <div className="col-span-2">
                        <h2 className='text-[20px] font-medium text-black mb-5'>About</h2>
                        <p className='text-[rgba(0,0,0,0.5)] text-[14px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor doloribus ipsum dicta unde? Eos fugit maiores magnam quia, eligendi amet earum, perspiciatis rerum ex animi iure, officia sit sint! Laudantium?</p>
                    </div>
                    <div className="text-[rgba(0,0,0,0.5)] text-[16px]  flex flex-col gap-2 col-span-2">
                        <h2 className='text-[20px] font-medium text-black mb-3'>Contact</h2>
                        <div className="flex gap-3  items-center">
                            <FaLocationArrow className='inline-block' />
                            <p>Deans Teade Center , Peshawar</p>
                        </div>
                        <div className="flex gap-3  items-center">
                            <FaMobileAlt className='inline-block' />
                            <p>Phone: +93 3219010703</p>
                        </div>
                        <div className="flex gap-3  items-center">
                            <FaEnvelope className='inline-block' />
                            <p>Email: info@softech.com</p>
                        </div>
                    </div>
                    <div className="">
                        <h2 className='text-[20px] font-medium text-black mb-3'>Categories</h2>
                        <ul className='text-[rgba(0,0,0,0.5)] text-[16px]  flex flex-col gap-2 cursor-pointer'>
                            <li>Head Phones</li>
                            <li>Smart Watches</li>
                            <li>Bluetooth Speakers</li>
                            <li>Wireless Earbuds</li>
                            <li>Home Theatre </li>
                            <li>Projectors</li>
                        </ul>
                    </div>
                    <div className="">
                        <h2 className='text-[20px] font-medium text-black mb-3'>Pages</h2>
                        <ul className='text-[rgba(0,0,0,0.5)] text-[16px]  flex flex-col gap-2 cursor-pointer'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Privacy Policy</li>
                            <li>Returns</li>
                            <li>Terms & Conditions</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t-2 border-[rgba(0,0,0,0.1)] py-5 px-3 md:px-12">
                    <div className="p-5 flex flex-col gap-5 md:flex-row justify-between items-center">
                        <p className='text-[12px] text-[rgba(0,0,0,0.5)]'>&copy; 2024 YourCompanyName. All rights reserved. Designed with care by Softech</p>
                        <img src={Payment} alt="" />
                    </div>
                </div>
            </footer >
        </div >
    )
}

export default Footer