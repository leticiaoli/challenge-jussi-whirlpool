import React from "react";
import FullWidthStaticBanner from "../components/FullWidthStaticBanner";
import BrandBar from "../components/BrandBar";
import ProductShelf from "../components/ProductShelf";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <FullWidthStaticBanner />
      <BrandBar />
      <ProductShelf />
      <AboutUs />
      <Contact />
      <Newsletter />
    </>
  );
};

export default Home;
