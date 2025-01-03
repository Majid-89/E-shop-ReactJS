import React, { useEffect, useRef } from 'react';
import { MdClose } from 'react-icons/md';

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
            className={`bg-white w-full fixed top-0 text-black overflow-hidden  duration-300 ${searchToggle ? 'h-0' : 'h-screen'
                }`}
        >
            <div className="flex justify-center py-3 px-12 border-b-2 relative md:py-5 md:px-0">
                <input
                    ref={inputRef}
                    className="h-[50px] w-full text-center text-xl font-semibold text-[#212121] outline-none border-none uppercase md:h-[80px] md:text-[48px]"
                    type="text"
                    placeholder="Search Product Here"
                />
                <MdClose
                    className="cursor-pointer text-5xl"
                    onClick={() => setSearchToggle(!searchToggle)}
                />
            </div>
        </div>
    );
};

export default Search;