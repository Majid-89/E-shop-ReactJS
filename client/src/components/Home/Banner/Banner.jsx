import React from 'react'
import BannerImg from '../../../assets/banner-img.png'

const Banner = () => {
    return (
        <>
            <div className=" bg-gradient-to-r from-[#8e3de2] to-[#4a00e0]  md:h-[85%] w-full">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-[1200px] mx-auto py-10 px-7 md:px-10">
                    <div className="text-white text-center">
                        <h2 className='text-[80px] font-[700] line-clamp-3 mb-2 lg:text-[180px]'>SALES</h2>
                        <p className='max-w-[300px] text-[14px] mb-5 md:max-w-[500px] md:mb-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatum eos natus assumenda similique aspernatur sapiente ea nesciunt totam doloremque!</p>
                        <div className="flex justify-center items-center gap-5">
                            <button className='text-[13px] font-[500] border-2 border-white px-4 py-2 cursor-pointer hover:bg-white hover:border-opacity-0 hover:text-black duration-300 uppercase'>Read More</button>
                            <button className='text-[13px] font-[500] border-2  text-black  border-white bg-white  px-4 py-2 cursor-pointer hover:bg-[#4a00e0] hover:text-white hover:border-opacity-0 duration-300 uppercase'>Shop Now</button>
                        </div>
                    </div>
                    <div className="">
                        <img className='w-[200px] mr-[60px] mt-[20px] md:w-[400px] lg:w-[450px] xl:w-[500px]' src={BannerImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner