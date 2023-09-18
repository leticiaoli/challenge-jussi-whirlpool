import React from "react";
import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="containerFull newsletter">
      <div className="containerCenter">
        <h2 className="newsletter__title">receba novidades da nossa área<br />de produtos digitais.</h2>
        <div className="newsletter__boxInput">
          <input type="text" className="newsletter__boxInput-input" placeholder="Digite seu e-mail" />
          <button type="button" className="newsletter__boxInput-button">Cadastrar</button>
        </div>
      </div>
    </div>
  )
};

export default Newsletter;