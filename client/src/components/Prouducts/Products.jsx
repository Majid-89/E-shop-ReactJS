import React from 'react';
import Product from './Product/Product';

const Products = ({ products, innerPage, heading }) => {
    return (
        <div className="my-[50px]">
            {!innerPage && (
                <div className="mb-5 text-[18px] font-[500] uppercase md:mb-9 md:text-[24px] relative before:content-[''] before:absolute before:bg-blue-500 before:w-[10px] before:h-[5px] before:mt-[35px] before:top-0 before:left-0 before:duration-300 hover:before:w-[80px] cursor-pointer">
                    {heading}
                </div>
            )}
            {!products?.data ? (
                <p className="text-center text-lg">Loading products...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
                    {products.data.map((item) => (
                        <Product key={item.id} id={item.id} data={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
