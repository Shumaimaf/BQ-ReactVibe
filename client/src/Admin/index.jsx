import React from 'react'
import AdminNav from './components/AdminNav'
import { Route, Routes } from 'react-router-dom'
import AdminHome from './pages/AdminHome'
import Category from './pages/Category/Category'
import Brands from './pages/Brands/Brands'
import Products from './pages/Products/Products'

export default function App() {
    return (
        <>
            <AdminNav />
            <div>
                <Routes>
                    <Route path='/admin/home' element={<AdminHome />} />
                    <Route path='/admin/category' element={<Category />} />
                    <Route path='/admin/brands' element={<Brands />} />
                    <Route path='/admin/products' element={<Products/>} />
                </Routes>

            </div>
        </>
    )
}
