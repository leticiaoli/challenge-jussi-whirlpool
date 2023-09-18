import React from "react";
import "./ListShelf.scss";
import productMook from "./../../../mook/productMook.json";

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
        {productMook?.map((product) => (
          <li className="listShelf__shelf">
            <img src={product.image} className="listShelf__image" />
            <div className="listShelf__text">
              <h2 className="listShelf__text-title">{product?.name}</h2>
              <p className="listShelf__text-description">{product?.description}</p>
              <ul className="listShelf__text-list">
                {product?.productSpecifications?.map((productSpecification) => (

                  <li className="listShelf__text-listItem">{productSpecification?.specification}</li>
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
