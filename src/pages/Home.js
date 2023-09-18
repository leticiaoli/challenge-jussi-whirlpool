import React from "react";
import FullWidthStaticBanner from "../components/FullWidthStaticBanner";
import BrandBar from "../components/BrandBar";
import ProductShelf from "../components/ProductShelf";
import AboutUs from "../components/AboutUs";

const Home = () => {
  return (
    <>
      <FullWidthStaticBanner />
      <BrandBar />
      <ProductShelf />
      <AboutUs /> 
    </>
  );
};

export default Home;
