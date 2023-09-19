import React, { useState } from "react";
import "./HeaderMobile.scss";
import MenuMobile from "../MenuMobile";
import BtnMenu from "../BtnMenu";

const HeaderMobile = () => {
  const [term, setTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = () => {
    window.location.href = `/s?q=${term}`;
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <>
      <header className="containerFull headerMobile">
        <div className="containerCenter">
          <BtnMenu />
          <a href="/"><img src="/logoJussi.png" alt="Logo da Jüssi" className="headerMobile__logo" /></a>
          <div className="headerMobile__contentRight">
            <button className="headerMobile__contentRight-searchBtn" onClick={(() => setShowSearch(!showSearch))}><img src="/search.svg" alt="Ícone de busca" className="headerMobile__contentRight-searchImg" /></button>
            <a href="/"><img src="/cart.svg" alt="Ícone do carrinho de compras" className="headerMobile__cart" /></a>
          </div>
        </div>
      </header>

      <div className={`containerFull searchMobile ${showSearch && 'show'}`}>
        <div className="containerCenter">
          <input
            type="text"
            className="searchMobile__searchInput"
            placeholder="Buscar"
            onKeyUp={((event) => setTerm(event?.target?.value))}
            onKeyPress={handleKeyPress}
          />
          <button className="searchMobile__searchBtn" onClick={handleSearch}>
            <img
              src="/search.svg"
              className="searchMobile__searchBtnImage"
              alt="Botão de busca"
            />
          </button>
        </div>
      </div>
      <MenuMobile />
    </>
  )
};

export default HeaderMobile;