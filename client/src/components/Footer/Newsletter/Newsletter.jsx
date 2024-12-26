import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import NewsletterBg from "../../../assets/newsletter-bg.jpeg"

const Newsletter = () => {
    return (
        <>
            <div className="bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${NewsletterBg})` }} >
                <div className="py-32">
                    <p>NewsLetter</p>
                    <h2>Sign up for latest updates and offers</h2>
                    <div className="">
                        <form action="">
                            <input type="email" placeholder='Email Address' />
                            <button>Subscribe</button>
                            <p>Will be used in accordance with our privacy policy</p>
                        </form>
                    </div>
                    <div className="">
                        <FaFacebookF size={14} className='  cursor-pointer  duration-300' />
                        <FaTwitter size={14} className='  cursor-pointer  duration-300' />
                        <FaInstagram size={14} className='   cursor-pointer  duration-300' />
                        <FaYoutube size={14} className='  cursor-pointer  duration-300' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter