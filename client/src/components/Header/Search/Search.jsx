import React, { useEffect, useRef } from 'react';
import { MdClose } from 'react-icons/md';
import prod1 from "../../../assets/products/earbuds-prod-1.webp"

const Search = ({ searchToggle, setSearchToggle }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (!searchToggle && inputRef.current) {
            setTimeout(() => {
                inputRef.current.focus();
            }, 100);
        }
    }, [searchToggle]);

    return (
        <div
            className={`bg-white w-full fixed top-0 text-black overflow-hidden  duration-300 z-50 ${searchToggle ? 'h-0' : 'h-screen'
                }`}
        >
            <div className="flex justify-center py-3 px-12 border-b-2 relative md:py-5 md:px-0">
                <input
                    ref={inputRef}
                    className="h-[50px] w-full text-center text-xl font-semibold text-[#3f3c3c]  placeholder:text-[#3f3c3c] outline-none border-none uppercase md:h-[80px] md:text-[48px]"
                    type="text"
                    placeholder="Search Product Here"
                />
                <MdClose
                    className="cursor-pointer text-5xl"
                    onClick={() => setSearchToggle(!searchToggle)}
                />
            </div>

            <div className="w-[95%] md:max-w-[800px] mx-auto  my-5 md:my-[30px]">
                <div className="flex border-b-2  gap-3 pb-3 cursor-pointer">
                    <div className="w-[60px] h-[60px] bg-[rgba(0,0,0,0.1)] flex justify-center items-center">
                        <img src={prod1} className='w-full' alt="" />
                    </div>
                    <div className="">
                        <span className='text-[16px]  font-semibold block pr-6 max-w-[250px] truncate'>Product </span>
                        <span>Product Description</span>
                    </div>
                </div>
            </div>
            <div className="w-[95%] md:max-w-[800px] mx-auto  my-5 md:my-[30px]">
                <div className="flex border-b-2  gap-3 pb-3 cursor-pointer">
                    <div className="w-[60px] h-[60px] bg-[rgba(0,0,0,0.1)] flex justify-center items-center">
                        <img src={prod1} className='w-full' alt="" />
                    </div>
                    <div className="">
                        <span className='text-[16px]  font-semibold block pr-6 max-w-[250px] truncate'>Product </span>
                        <span>Product Description</span>
                    </div>
                </div>
            </div>
            <div className="w-[95%] md:max-w-[800px] mx-auto  my-5 md:my-[30px]">
                <div className="flex border-b-2  gap-3 pb-3 cursor-pointer">
                    <div className="w-[60px] h-[60px] bg-[rgba(0,0,0,0.1)] flex justify-center items-center">
                        <img src={prod1} className='w-full' alt="" />
                    </div>
                    <div className="">
                        <span className='text-[16px]  font-semibold block pr-6 max-w-[250px] truncate'>Product </span>
                        <span>Product Description</span>
                    </div>
                </div>
            </div>
            <div className="w-[95%] md:max-w-[800px] mx-auto  my-5 md:my-[30px]">
                <div className="flex border-b-2  gap-3 pb-3 cursor-pointer">
                    <div className="w-[60px] h-[60px] bg-[rgba(0,0,0,0.1)] flex justify-center items-center">
                        <img src={prod1} className='w-full' alt="" />
                    </div>
                    <div className="">
                        <span className='text-[16px]  font-semibold block pr-6 max-w-[250px] truncate'>Product </span>
                        <span>Product Description</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;