import React from 'react'
import Products from '../Prouducts/Products'

const Category = () => {
    return (
        <div>
            <div className="max-w-[1200px] mx-auto w-[95%] xl:w-full my-[30px]">
                <h2 className='text-[24px] md:text-[34px] font-medium'>Category Title</h2>
                <Products innerPage={true} />
            </div>
        </div>
    )
}

export default Category