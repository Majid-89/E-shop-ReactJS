import React, { useContext, useState } from 'react'
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram, FaLinkedinIn, FaCartPlus } from 'react-icons/fa'
import RelatedProducts from './RelatedProducts/RelatedProducts'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { Context } from '../../utils/Context'

const SingleProduct = () => {
    const { addToCart } = useContext(Context)
    const { id } = useParams()
    const [quantity, setQuantity] = useState(1);
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`)
    if (!data) return <p>Loading...</p>
    const product = data?.data?.[0]

    const imageUrl = product?.img?.[0]?.url ? import.meta.env.VITE_DEV_URL + product.img[0].url : "/default-image.jpg";

    const incrementQuantity = () => {
        setQuantity(prevQty => prevQty + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQty => (prevQty > 1 ? prevQty - 1 : 1));
    };

    return (
        <div className='w-[95%] md:max-w-[1200px] mx-auto'>
            <div className="w-[95%] md:max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 my-5 md:my-[75px]">
                <div className="w-full bg-[rgba(0,0,0,0.08)] md:h-[600px] md:w-[600px] rounded-lg">
                    <img src={imageUrl} className='w-full block' alt={product?.title || "Product Image"} />
                </div>
                <div className="flex flex-col pt-5 md:pt-0 md:px-9">
                    <span className='text-[20px] mb-5 md:text-[24px] leading-7 md:leading-8'>{product?.title}</span>
                    <span className='text-[20px] mb-5 md:text-[24px] leading-7 md:leading-8'>${product?.price}</span>
                    <span className='leading-5 text-sm mb-12 text-[#6b6b6b]'>{product?.desc}</span>

                    {/* Increment & Decrement Section */}
                    <div className="flex items-center">
                        <div className="flex justify-center items-center gap-7 border-[2px] border-[rgba(0,0,0,0.2)] select-none">
                            <span
                                className='cursor-pointer border-r-[2px] border-[rgba(0,0,0,0.2)] p-2 px-4 hover:bg-slate-400 hover:border-slate-400'
                                onClick={decrementQuantity}
                            >
                                -
                            </span>
                            <span>{quantity}</span>
                            <span
                                className='cursor-pointer border-l-[2px] border-[rgba(0,0,0,0.2)] p-2 px-4 hover:bg-slate-400 hover:border-slate-400'
                                onClick={incrementQuantity}
                            >
                                +
                            </span>
                        </div>
                        <button className='flex outline-none text-[16px] items-center justify-center bg-[#8e2de2] text-white px-5 py-2 border-b-[3px] border-[#8e2de2] hover:bg-[#6e1de2] ' onClick={() => {
                            addToCart(data?.data?.[0], quantity)
                            setQuantity(1)
                        }}>
                            <FaCartPlus size={20} />
                            ADD TO CART
                        </button>
                    </div>

                    <span className='my-5 h-[1px] w-full bg-[rgba(0,0,0,0.1)]'></span>

                    {/* Category & Social Share */}
                    <div>
                        <span className='block mb-5'>
                            <span className='text-[18px] font-medium'>Category: </span>
                            <span className='leading-5 text-sm mb-12 text-[#6b6b6b]'>
                                {product?.categories?.[0]?.title}
                            </span>
                        </span>
                        <span className='flex text-[18px] font-medium items-center'>Share:
                            <div className="flex gap-3 cursor-pointer ml-2">
                                <FaFacebookF size={16} />
                                <FaTwitter size={16} />
                                <FaPinterest size={16} />
                                <FaInstagram size={16} />
                                <FaLinkedinIn size={16} />
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <RelatedProducts productId={id} categoryId={product.categories[0].id} />
        </div>
    )
}

export default SingleProduct;
