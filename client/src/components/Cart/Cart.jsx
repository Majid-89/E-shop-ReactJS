import React, { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import CartItem from './CartItem/CartItem';
import { Context } from '../../utils/Context';
import { Link } from 'react-router-dom';

const Cart = ({ cartToggle, setCartToggle }) => {
    const { cart, removeFromCart, updateCartQuantity } = useContext(Context);

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className={`duration-300 ${!cartToggle ? 'visible' : 'invisible'}`}>
            {/* Background Overlay */}
            <div
                className={`bg-[rgba(0,0,0,0.5)] w-full h-screen fixed top-0 transition-opacity duration-300 
                ${!cartToggle ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Cart Sidebar */}
            <div
                className={`bg-white fixed w-[85%] md:w-[34.5%] h-full top-0 right-0 z-50 pt-4 duration-300 transform transition-transform flex flex-col justify-between
                    ${cartToggle ? 'translate-x-full' : 'translate-x-0'}`}
            >
                {/* Cart Header */}
                <div className="flex justify-between items-center p-4 border-b-2">
                    <span className="text-[20px] font-bold uppercase">Shopping Cart</span>
                    <span
                        className="flex gap-1 justify-center items-center hover:opacity-[0.5] cursor-pointer"
                        onClick={() => setCartToggle(!cartToggle)}
                    >
                        <MdClose className="text-[18px] font-medium" />
                        <span className="text-[14px] font-normal">Close</span>
                    </span>
                </div>

                {/* Empty Cart State */}
                {cart.length === 0 ? (
                    <div className="flex flex-1 flex-col items-center gap-5 mt-32 text-gray-500">
                        <span className="text-[24px] font-medium">🛒 Your cart is empty</span>
                        <button
                            className="h-10 w-[150px] text-white bg-[#8e2de2] border-b-[3px] border-[#6516aa] duration-300 hover:bg-[#6516aa] text-[13px]"
                            onClick={() => {
                                setCartToggle(!cartToggle);
                            }}
                        >
                            <Link to={'/'}>RETURN TO SHOP</Link>
                        </button>

                    </div>
                ) : (
                    <>
                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto px-4">
                            {cart.map((item) => (
                                <CartItem key={item.id} item={item} removeFromCart={removeFromCart} updateCartQuantity={updateCartQuantity} />
                            ))}
                        </div>

                        {/* Cart Footer */}
                        <div className="border-t-2">
                            <div className="flex justify-between p-4 text-[20px] font-bold uppercase">
                                <p>Subtotal:</p>
                                <p className="text-[#6516aa]">${subtotal.toFixed(2)}</p>
                            </div>
                            <div className="py-5 px-4">
                                <button
                                    className="h-10 w-full text-white bg-[#8e2de2] border-b-[3px] border-[#6516aa] duration-300 hover:bg-[#6516aa] text-[13px]"
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
