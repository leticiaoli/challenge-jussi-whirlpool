import React, { useEffect, useState, memo, useCallback } from "react";
import { useLocation } from "react-router-dom";
import serviceSearch from "../services/serviceSearch";

import "./Search.scss";

const Search = () => {
  const [products, setProducts] = useState([]);
  const { search } = useLocation();
  const queryString = new URLSearchParams(search);
  const term = queryString.get("q");

  const getProducts = useCallback(() => {
    serviceSearch(term).then((response) => {
      const { data } = response;
      setProducts(data);
    });
  }, [term]);

  useEffect(() => {
    getProducts();
  }, []);

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="containerFull search">
      <div className="containerCenter">
        <h1 className="search__title">Resultado para a busca: {term}</h1>
        <div className="search__productGrid">
          <ul className="search__productGrid-list">
            {products.map((product, index) => {
              const productImageURL =
                product?.items?.[0]?.images?.[0]?.imageUrl;
              const productImageText =
                product?.items?.[0]?.images?.[0]?.imageText;
              const productListPrice =
                product?.items?.[0]?.sellers?.[0]?.commertialOffer?.ListPrice;
              const productPrice =
                product?.items?.[0]?.sellers?.[0]?.commertialOffer?.Price;
              return (
                <li key={index} className="search__productGrid-listItem">
                  <img src={productImageURL} alt={productImageText} className="search__productGrid-listImg"/>
                  <h2 className="search__productGrid-listName">{product.productName}</h2>
                  <p className="search__productGrid-listPrice">
                    {productListPrice > productPrice && (
                      <span className="search__productGrid-listPrice-of">De: {formatter.format(productListPrice)}</span>
                    )}
                    <span className="search__productGrid-listPrice-for">Por: {formatter.format(productPrice)}</span>
                  </p>
                  <button type="button" className="search__productGrid-listButton">Comprar</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default memo(Search);
