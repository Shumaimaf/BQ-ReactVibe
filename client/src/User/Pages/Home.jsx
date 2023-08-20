import React from 'react';
import SmartphonesPage from './SmartphonesPage';
import LaptopPage from './LaptopPage';
import HeaderSection from './HeaderSection';
import Carousel from './Carousel';
import './Home.css';

export default function Home() {

  return (
    <>
      <Carousel />
      <SmartphonesPage />
       <HeaderSection />
      <LaptopPage /> 
    </>
  );
}
