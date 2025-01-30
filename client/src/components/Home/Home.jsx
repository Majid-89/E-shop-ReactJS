import React, { useEffect } from 'react'
import Banner from './Banner/Banner'
import Category from './Category/Category';
import Products from '../Prouducts/Products'
import { fetchDataFromApi } from '../../utils/api';


const Home = () => {

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = () => {
        fetchDataFromApi('/api/categories?populate=*').then((res) => console.log(res))
    }
    return (
        <div>
            <Banner />
            <div className="max-w-[1200px] mx-auto w-[95%] xl:w-full">
                <Category />
                <Products heading={"Popular Products"} />
            </div>
        </div>
    )
}

export default Home