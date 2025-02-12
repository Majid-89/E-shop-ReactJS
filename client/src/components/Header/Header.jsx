import React, { useEffect, useState, useContext } from "react";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";
import { Link } from "react-router-dom";
import { Context } from "../../utils/Context";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [cartToggle, setCartToggle] = useState(true);
    const [searchToggle, setSearchToggle] = useState(true);

    const { totalCartItems } = useContext(Context);

    const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 200);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener
    }, []);

    return (
        <>
            <div className={`bg-black text-white ${scrolled && "sticky top-0 z-50 w-full transition-all duration-300"}`}>
                <div className="max-w-[1200px] mx-auto flex justify-between items-center p-4 px-7 md:px-10">
                    <ul className="hidden md:flex gap-4 cursor-pointer">
                        <li className="text-white hover:text-yellow-500 duration-300">
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className="text-white hover:text-yellow-500 duration-300">About</li>
                        <li className="text-white hover:text-yellow-500 duration-300">Category</li>
                    </ul>
                    <div className="logo text-[20px] font-[500] md:text-[30px] md:font-[700] cursor-pointer">
                        <Link to={"/"}>
                            E-<span className="text-yellow-500">shop</span>
                        </Link>
                    </div>
                    <div className="flex gap-4 cursor-pointer text-[20px]">
                        <TbSearch onClick={() => setSearchToggle(!searchToggle)} />
                        <AiOutlineHeart />
                        <span className="relative">
                            <CgShoppingCart onClick={() => setCartToggle(!cartToggle)} />

                            <span className="absolute right-[-10px] bg-blue-800 text-white inline-block px-2 py-[2px] rounded-full top-[-10px] text-xs">
                                {totalCartItems || 0}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <Cart cartToggle={cartToggle} setCartToggle={setCartToggle} />
            <Search searchToggle={searchToggle} setSearchToggle={setSearchToggle} />
        </>
    );
};

export default Header;
