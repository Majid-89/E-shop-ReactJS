import React, { useContext, useEffect } from 'react'
import Banner from './Banner/Banner'
import Category from './Category/Category';
import Products from '../Prouducts/Products'
import { Context } from '../../utils/Context';
import { fetchDataFromApi } from '../../utils/api';



const Home = () => {
    const { categories, setCategories, products, setProducts } = useContext(Context)

    useEffect(() => {
        getCategories()
        getProducts()
    }, [])

    const getProducts = () => {
        fetchDataFromApi('/api/products?populate=*').then((res) => {

            setProducts(res)
        })
    }
    const getCategories = () => {
        fetchDataFromApi('/api/categories?populate=*').then((res) => {

            setCategories(res)
        })
    }
    return (
        <div>
            <Banner />
            <div className="max-w-[1200px] mx-auto w-[95%] xl:w-full">
                <Category categories={categories} />
                <Products products={products} heading={"Popular Products"} />
            </div>
        </div>
    )
}

export default Home