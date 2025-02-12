import React from 'react'
import Products from '../Prouducts/Products'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const Category = () => {
    const { id } = useParams()

    const { data } = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`)
    console.log(data)
    return (
        <div>
            <div className="max-w-[1200px] mx-auto w-[95%] xl:w-full my-[30px]">
                <h2 className='text-[24px] md:text-[34px] font-medium'>
                    {data?.data?.[0]?.categories?.[0]?.title}
                </h2>
                <Products innerPage={true} products={data} />
            </div>
        </div>
    )
}

export default Category