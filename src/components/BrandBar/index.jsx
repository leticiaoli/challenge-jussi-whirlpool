import React from "react";
import "./BrandBar.scss";

const BrandBar = () => {
  return (
    <div className="containerFull brandBar">
      <div className="containerCenter">
        <p className="brandBar__text">Nossas principais lojas VTEX</p>
        <img
          src="/arrow.png"
          alt="Imagem de uma flecha"
          className="brandBar__arrow"
        />
        <ul className="brandBar__list">
          <li className="brandBar__list-item">
            <a href="/" className="brandBar__list-itemLink">
              <img
                src="/logoBrastemp.png"
                alt="Imagem do logo marca Brastemp"
                className="brandBar__list-itemImg"
              />
            </a>
          </li>
          <li className="brandBar__list-Item">
            <a href="/" className="brandBar__list-itemLink">
              <img
                src="/logoCompraCerta.png"
                alt="Imagem do logo marca Compra certa"
                className="brandBar__list-itemImg"
              />
            </a>
          </li>
          <li className="brandBar__list-Item">
            <a href="/" className="brandBar__list-itemLink">
              <img
                src="/logoConsul.png"
                alt="Imagem do logo marca Consul"
                className="brandBar__list-itemImg"
              />
            </a>
          </li>
          <li className="brandBar__list-item">
            <a href="/" className="brandBar__list-itemLink">
              <img
                src="/logoTheBar.png"
                alt="Imagem do logo marca The bar"
                className="brandBar__list-itemImg fourImg"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BrandBar;
