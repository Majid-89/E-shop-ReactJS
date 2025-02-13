import React from 'react'
import Products from '../../Prouducts/Products'
import useFetch from '../../../hooks/useFetch'


const RelatedProducts = ({ productId, categoryId }) => {
    const { data } = useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`)
    return (
        <div>
            <Products heading={"Related Products"} products={data} />
        </div>
    )
}

export default RelatedProducts