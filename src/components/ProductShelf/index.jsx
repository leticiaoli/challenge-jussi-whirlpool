import React from "react";
import "./ProductShelf.scss";
import ListShelf from "./ListShelf";

const ProductShelf = () => {
  return (
    <div className="containerFull productShelf">
      <div className="containerCenter">
        <div className="productShelf__title">
          <span className="productShelf__title-bars">//</span>
          <h1 className="productShelf__title-text">Nossas soluções</h1>
        </div>
        <ListShelf />
      </div>
    </div>
  )
};

export default ProductShelf;