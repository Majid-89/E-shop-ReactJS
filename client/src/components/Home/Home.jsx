import React from 'react'
import Banner from './Banner/Banner'
import Category from './Category/Category'

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="max-w-[1200px] mx-auto">
                <Category />
            </div>
        </div>
    )
}

export default Home