import React, { useState } from "react";

import "./HeaderDesktop.scss";

const Header = () => {
  const [term, setTerm] = useState('');

  const handleSearch = () => {
    window.location.href = `/s?q=${term}`;
  }

  return (
    <header className="containerFull header">
      <div className="containerCenter">
        <div className="header__contentLeft">
          <a href="/">
          <img
            src="/logoJussi.png"
            alt="Logo empresa Jussi"
            className="header__contentLeft-logo"
          />
          </a>
          <nav className="header__contentLeft-nav">
            <ul className="header__contentLeft-list">
              <li className="header__contentLeft-listItem">
                <a href="/" className="header__contentLeft-listLink">
                  Nossas soluções
                </a>
              </li>
              <li className="header__contentLeft-listItem">
                <a href="/" className="header__contentLeft-listLink">
                  Conheça a Jüssi
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__contentRight">
          <div className="header__contentRight-search">
            <input
              type="text"
              className="header__contentRight-searchInput"
              placeholder="Buscar"
              onKeyUp={((event) => setTerm(event?.target?.value))}
            />
            <button className="header__contentRight-searchBtn" onClick={handleSearch}>
              <img
                src="/search.svg"
                className="header__contentRight-searchBtnImage"
                alt="Botão de busca"
              />
            </button>
          </div>
          <a href="/" className="header__contentRight-loginLink">
            Login
          </a>
          <a href="/">
            <img
              src="/cart.svg"
              alt="Botão do carrinho"
              className="header__contentRight-btnCart"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
