import React from "react";
import "./HeaderMobile.scss";
import MenuMobile from "../MenuMobile";
import BtnMenu from "../BtnMenu";

const HeaderMobile = () => {
  return (
    <>
      <header className="containerFull headerMobile">
        <div className="containerCenter">
          <BtnMenu />
          <img src="/logoJussi.png" alt="Logo da Jüssi" className="headerMobile__logo" />
          <div className="headerMobile__contentRight">
            <a href="/"><img src="/searchImg.png" alt="Ícone de busca" className="headerMobile__search" /></a>
            <a href="/"><img src="/cart.png" alt="Ícone do carrinho de compras" className="headerMobile__cart" /></a>
          </div>
        </div>
      </header>
      <MenuMobile />
    </>
  )
};

export default HeaderMobile;