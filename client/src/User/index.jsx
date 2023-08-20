import React, { useContext } from 'react'
import UserNav from './Components/UserNav'
import Home from './Pages/Home'
import Products from './Pages/Products'
import ProductPage from './Pages/ProductPage'
import { Route, Routes } from "react-router-dom";
import CategoriesSection from './Pages/CategoriesSection'
import ProductCategoryPage from './Pages/ProductCategorypage'
import Page404 from './Pages/Page404'
import Footersection from './Components/Footersection'
import { Navigate } from 'react-router-dom'


import Cart from './Components/Cart'


export default function User() {

    return (

        <>
            <UserNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/categories" element={<CategoriesSection />} />
                <Route path="/products/categories/:categoryName" element={<ProductCategoryPage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:productID" element={<ProductPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Navigate to='/' replace={true} />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
            <Footersection/>

        </>
    )
}
