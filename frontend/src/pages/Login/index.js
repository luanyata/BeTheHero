import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import "./style.css";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form>
          <h1>Faça seu login</h1>
          <input placeholder="Sua ID" />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}

export default Login;
