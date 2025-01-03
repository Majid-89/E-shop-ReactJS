import React from 'react'
import { MdClose } from 'react-icons/md'
import { BsCartX } from 'react-icons/bs'
import CartItem from './CartItem/CartItem'

const Cart = ({ cartToggle, setCartToggle }) => {
    return (
        <>
            {!cartToggle && <div className="">
                <div className="bg-[rgba(0,0,0,0.5)] w-full h-screen fixed top-0 "></div>
                <div className={`bg-white fixed ${cartToggle ? 'w-0' : 'w-96'} h-full top-0 right-0  z-50 pt-4 duration-300`}>
                    <div className="flex justify-between items-center p-4 border-b-2">
                        <span className='text-[20px] font-bold uppercase'>Shoping Cart</span>
                        <span className="flex gap-1 justify-center items-center hover:opacity-[0.5]" onClick={() => setCartToggle(!cartToggle)}>
                            <MdClose className='cursor-pointer text-[18px] font-medium' />
                            <span className='cursor-pointer text-[14px] font-normal'>Close</span>
                        </span>
                    </div>

                    {/* <div className="flex flex-col items-center gap-5 mt-24">
                        <BsCartX className='text-[120px]  opacity-[0.1]' />
                        <span className='font-medium'>No Products in cart</span>
                        <button className='outline-none border-0 h-10 w-[150px] flex justify-center items-center text-[13px] text-white bg-[#8e2de2] border-b-[3px] border-[#6516aa] duration-300 hover:bg-[#6516aa] '>RETURN TO SHOP</button>
                    </div> */}



                    <>
                        <CartItem />
                        <div className=" border-t-2 ">
                            <div className='flex justify-between p-4 text-[20px] font-bold uppercase'>
                                <p >Subtotal:</p>
                                <p className='text-[#6516aa]'>$1234</p>
                            </div>
                            <div className="py-5 px-4 ">
                                <button className='outline-none border-0 h-10 w-full flex justify-center items-center text-[13px] text-white bg-[#8e2de2] border-b-[3px] border-[#6516aa] duration-300 hover:bg-[#6516aa] '>Checkout</button>
                            </div>
                        </div>
                    </>
                </div>
            </div>
            }
        </>


    )
}

export default Cart