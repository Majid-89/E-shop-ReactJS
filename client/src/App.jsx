import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import SingleProduct from './components/SingleProduct/SingleProduct'
import Header from './components/Header/Header'
import Newsletter from './components/Footer/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'
import Category from './components/Category/Category'
import AppContext from './utils/Context'

const App = () => {
  return (
    <>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </AppContext>

    </>
  )
}

export default App