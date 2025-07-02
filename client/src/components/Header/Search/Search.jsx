import React, { useEffect, useRef, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch';

const Search = ({ searchToggle, setSearchToggle }) => {
    const inputRef = useRef(null);
    const [query, setQuery] = useState("")

    let { data } = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`)

    if (!query.length) {
        data = null
    }

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
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <MdClose
                    className="cursor-pointer text-5xl"
                    onClick={() => setSearchToggle(!searchToggle)}
                />
            </div>
            <div className="w-[95%] md:max-w-[800px]  mx-auto my-5 md:my-[30px]">
                {data?.data?.length > 0 ? (
                    data.data.map((item) => (
                        <Link to={`/product/${item.id}`} onClick={() => setSearchToggle(!searchToggle)} className="flex border-b-2 gap-3 pb-3 cursor-pointer mb-6" key={item.id}>
                            <div className="w-[60px] h-[60px] bg-[rgba(0,0,0,0.1)] flex justify-center items-center rounded-lg">
                                <img
                                    src={item?.img?.[0]?.url ? import.meta.env.VITE_DEV_URL + item.img[0].url : "/default-image.jpg"}
                                    className="w-full rounded-md"
                                    alt={item.title}
                                />
                            </div>
                            <div>
                                <span className="text-[16px] font-semibold block pr-6 max-w-[250px] truncate">
                                    {item.title}
                                </span>
                                <span className="text-gray-500">{item.desc?.slice(0, 100)}...</span>
                            </div>
                        </Link>
                    ))
                ) : (
                    query.length > 0 && (
                        <div className="flex flex-col items-center text-center mt-10 text-gray-600">
                            <svg className="w-16 h-16 text-gray-400 mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l4-4m0 0l4 4m-4-4v12M4 4h16M4 8h16M4 12h16M4 16h16" />
                            </svg>
                            <p className="text-lg font-semibold">No results found</p>
                            <p className="text-gray-500">We couldn’t find any matches for <span className="font-semibold">"{query}"</span>. Try searching for something else.</p>
                        </div>
                    )
                )}
            </div>

        </div>
    );
};

export default Search;