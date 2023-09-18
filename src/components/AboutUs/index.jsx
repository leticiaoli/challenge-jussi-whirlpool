import React from "react";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div className="containerFull aboutUs">
      <div className="containerCenter">
        <div className="aboutUs__contentleft">
          <h2 className="aboutUs__contentleft-title">Olá, somos <br/> a Jüssi</h2>
          <p className="aboutUs__contentleft-text">
            A Jüssi é uma agência integrante do grupo global WPP que vem há 10
            anos consolidando o pensamento voltado para produtos e resolução de
            problemas. Nosso área dedicada exclusivamente para Produtos Digitais
            é organizada em 6 especialidades: Product Managamenet, User
            Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
          </p>
          <button type="button" className="aboutUs__contentleft-button">
            Conheça a Jüssi
          </button>
        </div>
        <div className="aboutUs__contentRight">
          <img src="./officeJussi.png" className="aboutUs__contentRight-image"/>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
