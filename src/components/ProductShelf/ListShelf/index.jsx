import React from "react";
import "./ListShelf.scss";
import productMock from "./../../../mock/productMock.json";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ListShelf = () => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (

    <ul className="listShelf">
      <Slider {...settings}>
        {productMock?.map((product, i) => (
          <li className="listShelf__shelf" key={`product-${i}`}>
            <img src={product.image} className="listShelf__image" alt={`imagem do produto ${product?.name}`}/>
            <div className="listShelf__text">
              <h3 className="listShelf__text-title">{product?.name}</h3>
              <p className="listShelf__text-description">{product?.description}</p>
              <ul className="listShelf__text-list">
                {product?.productSpecifications?.map((productSpecification, index) => (
                  <li key={`specification-${i}-${index}`} className="listShelf__text-listItem">{productSpecification?.specification}</li>
                ))}
              </ul>
            </div>
            <button type="button" className="listShelf__button">Ver solução</button>
          </li>
        ))}
      </Slider>
    </ul>
  );
};

export default ListShelf;
