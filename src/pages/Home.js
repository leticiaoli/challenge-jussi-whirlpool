import React from "react";
import FullWidthStaticBanner from "../components/FullWidthStaticBanner";
import BrandBar from "../components/BrandBar";
import ProductShelf from "../components/ProductShelf";

const Home = () => {
  return (
    <>
      <FullWidthStaticBanner />
      <BrandBar />
      <ProductShelf />
    </>
  );
};

export default Home;
