import React from 'react'
import Brand from '../Components/Brands'
import Category from '../Components/Category'
import Carousel from '../../User/Pages/Carousel'
import SmartphonesPage from '../../User/Pages/SmartphonesPage'
import HeaderSection from '../../User/Pages/HeaderSection'
import LaptopPage from '../../User/Pages/LaptopPage'
import Footersection from '../../User/Components/Footersection'

export default function Home() {
    return (
        <div>
            <Carousel/>
            <SmartphonesPage/>
            <HeaderSection/>
            <LaptopPage/>
            <Footersection/>
        </div>
    )
}
