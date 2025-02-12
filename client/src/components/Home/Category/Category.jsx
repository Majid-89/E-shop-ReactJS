import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ categories }) => {
    if (!categories || !categories.data) {
        return <p className="text-center text-lg font-semibold">Loading categories...</p>;
    }

    return (
        <div className='flex flex-wrap gap-5 md:gap-6 mx-auto items-center overflow-hidden py-9'>
            {categories.data.length > 0 ? (
                categories.data.map((item) => (
                    <Link to={`/category/${item.id}`} key={item.id} className="group overflow-hidden md:w-[22%] lg:w-[23%] sm:w-[48%]" >
                        <img
                            className='w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-125'
                            src={import.meta.env.VITE_DEV_URL + item.img.url}
                            alt={item.img.alternativeText || "Category Image"}
                        />
                    </Link>
                ))
            ) : (
                <p className="text-center text-lg font-semibold">No categories available</p>
            )}
        </div>
    );
};

export default Category;
