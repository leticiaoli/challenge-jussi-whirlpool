import React, { useContext } from "react";
import { MenuContext } from "../../providers/menuProvider";

import "./MenuMobile.scss";

const MenuMobile = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext);

  return (
    <div className={`containerFull navMobile ${isOpen && "show"}`}>
      <div className="containerCenter">
        <img
          src="/cross.png"
          alt="Ícone x de fechar a janela do menu"
          className="navMobile__crossIcon"
          onClick={() => setIsOpen(false)}
        />
        <nav className="navMobile__content">
          <ul className="navMobile__content-list">
            <li className="navMobile__content-listItem">
              <a href="/" className="navMobile__content-listText">
                Nossas soluções
              </a>
            </li>
            <li className="navMobile__content-listItem">
              <a href="/" className="navMobile__content-listText">
                Conheça a Jüssi
              </a>
            </li>
            <li className="navMobile__content-listItem-login">
              <a href="/" className="navMobile__content-listText">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuMobile;
