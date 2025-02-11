import React from 'react';

const Product = ({ data, id }) => {
    if (!data) {
        console.error("Product data is missing for ID:", id);
        return <div>Error: Product data is missing.</div>;
    }

    // Ensure img array exists before accessing
    const imageUrl = data.img?.[0]?.url ? import.meta.env.VITE_DEV_URL + data.img[0].url : "/default-image.jpg";

    return (
        <div className='' id={id}>
            <div className="bg-[rgba(0,0,0,0.09)] p-1 h-72 group">
                <img src={imageUrl} className='w-full group-hover:scale-110 duration-300' alt="Product Image" />
            </div>
            <div className="">
                <span className='block text-[14px] whitespace-nowrap md:text-[16px] my-[10px]  font-[400] truncate'>{data.title || "No Title"}</span>
                <span className='block text-[18px] whitespace-nowrap md:text-[24px] my-[10px] font-[500]'>${data.price || "No Price"}</span>
            </div>
        </div>
    );
}

export default Product;
