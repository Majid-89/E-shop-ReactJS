import React from 'react'
import Banner from './Banner/Banner'
import Category from './Category/Category'
import Products from '../Prouducts/Products'

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="max-w-[1200px] mx-auto w-[95 %] xl:w-full">
                <Category />
                <Products heading={"Popular Products"} />
            </div>
        </div>
    )
}

export default Home