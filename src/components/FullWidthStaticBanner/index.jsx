import React from "react";
import "./FullWidthStaticBanner.scss";

const FullWidthStaticBanner = () => {
  return (
    <div className="containerFull bannerFull">
      <div className="containerCenter">
        <div className="bannerFull__contentLeft">
          <p className="bannerFull__contentLeft-textOne">
            Criamos lojas que vendem mais.
          </p>
          <p className="bannerFull__contentLeft-textTwo">
            A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
            Precisa criar sua loja ou migrar de plataforma?
          </p>
          <a href="/" className="bannerFull__contentLeft-linkButton">
            <button type="button" className="bannerFull__contentLeft-button">
              Veja nossas soluções
            </button>
          </a>
        </div>
        <div className="bannerFull__contentRight">
          <ul className="bannerFull__contentRight-listProduct">
            <li className="bannerFull__contentRight-listProductItem">
              <a href="/" className="bannerFull__contentRight-listProducLink">
                <img
                  src="/productBanner1.png"
                  alt="imagem de uma geladeira"
                  className="bannerFull__contentRight-listProducImg"
                />
                <button
                  type="button"
                  className="bannerFull__contentRight-listProducButton"
                >
                  Mais Detalhes
                </button>
              </a>
            </li>
            <li className="bannerFull__contentRight-listProductItem">
              <a href="/" className="bannerFull__contentRight-listProducLink">
                <img
                  src="/productBanner2.png"
                  alt="Imagem de uma batedeira"
                  className="bannerFull__contentRight-listProducImg"
                />
                <button
                  type="button"
                  className="bannerFull__contentRight-listProducButton"
                >
                  Comprar em 12x
                </button>
              </a>
            </li>
            <li className="bannerFull__contentRight-listProductItem">
              <a href="/" className="bannerFull__contentRight-listProducLink">
                <img
                  src="/productBanner3.png"
                  alt="imagem de um bebebida alcoolica"
                  className="bannerFull__contentRight-listProducImg"
                />
                <button
                  type="button"
                  className="bannerFull__contentRight-listProducButton"
                >
                  Adicionar à sacola
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FullWidthStaticBanner;
