import React from "react";
import "../../App.css"
import HeroSection from "../HeroSection"
import Products from "../Products"
import Desserts from "../Desserts"
import Drinks from "../Drinks"
import Speciality from '../Speciality'
import Footer from '../Footer'
import { ramenData, dessertData, drinksData } from '../data';

function Home() {
  return (
    <>
      <HeroSection />
      <Products heading={'Choose your Favorite'} data={ramenData}/>
      <Speciality/>
      <Desserts heading={'Sweet Treats for You'} data={dessertData}/>
      <Drinks heading={'Beverages from Heaven'} data={drinksData}/>
      <Footer/>
    </>
  );
}

export default Home;