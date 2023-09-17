import React from "react";
import "./HeaderDesktop.scss";

const Header = () => {
  return (
    <header className="containerFull header">
      <div className="containerCenter">
        <div className="header__contentLeft">
          <img src="/logoJussi.png" alt="Logo empresa Jussi" className="header__contentLeft-logo" />
          <nav className="header__contentLeft-nav">
            <ul className="header__contentLeft-list">
              <li className="header__contentLeft-listItem"><a href="/" className="header__contentLeft-listLink">Nossas soluções</a></li>
              <li className="header__contentLeft-listItem"><a href="/" className="header__contentLeft-listLink">Conheça a Jüssi</a></li>
            </ul>
          </nav>
        </div>
        <div className="header__contentRight">
          <div className="header__contentRight-search">
            <input type="text" className="header__contentRight-searchInput" placeholder="Buscar" />
            <img src="/searchImg.png" className="header__contentRight-searchBtn" alt="Botão de busca" />
          </div>
          <a href="/" className="header__contentRight-loginLink">Login</a>
          <a href="/"><img src="/cart.png" alt="Botão do carrinho" className="header__contentRight-btnCart" /></a>
        </div>
      </div>
    </header>
  )
};

export default Header;