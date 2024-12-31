import React from 'react'
import Cat1 from "../../../assets/category/cat-1.jpg"
import Cat2 from "../../../assets/category/cat-2.jpg"
import Cat3 from "../../../assets/category/cat-3.jpg"
import Cat4 from "../../../assets/category/cat-4.jpg"

const Category = () => {
    return (

        <>
            <div className='flex flex-wrap gap-5 md:gap-6 mx-auto items-center overflow-hidden py-9 w-[90%] '>
                <div className="group overflow-hidden md:w-[22%] lg:w-[23%] sm:w-[48%]">
                    <img className='w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-125' src={Cat1} alt="" />
                </div>
                <div className="group overflow-hidden md:w-[22%] lg:w-[23%] sm:w-[48%]">
                    <img className='w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-125' src={Cat2} alt="" />
                </div>
                <div className="group overflow-hidden md:w-[22%] lg:w-[23%] sm:w-[48%]">
                    <img className='w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-125' src={Cat3} alt="" />
                </div>
                <div className="group overflow-hidden md:w-[22%] lg:w-[23%] sm:w-[48%]">
                    <img className='w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-125' src={Cat4} alt="" />
                </div>
            </div>
        </>

    )
}

export default Category