import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="containerFull footer">
      <div className="containerCenter">
        <img
          src="/wppcompany.png"
          alt="Imagem do logo da empresa wpp company"
          className="footer__logoWppCampany"
        />
        <ul className="footer__listSocial">
          <li className="footer__listSocial-item">
            <a href="https://www.facebook.com/agencia.jussi/?locale=pt_BR" target="_blank" className="footer__listSocial-link">
              <img
                src="/facebook.png"
                alt="Imagem do logo do facebook"
                className="footer__listSocial-img"
              />
            </a>
          </li>
          <li className="footer__listSocial-item">
            <a href="https://www.instagram.com/jussi/" target="_blank" className="footer__listSocial-link">
              <img
                src="/instagram.png"
                alt="Imagem do logo do instagram"
                className="footer__listSocial-img"
              />
            </a>
          </li>
          <li className="footer__listSocial-item">
            <a href="https://www.linkedin.com/company/agencia-jussi/" target="_blank" className="footer__listSocial-link">
              <img
                src="/linkedin.png"
                alt="Imagem do logo do linkedin"
                className="footer__listSocial-img"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
