import React from "react";

import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";

import "./style.css";
import { FiPower, FiTrash2 } from "react-icons/fi";

function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the Hero" />
        <span>Bem Vinda, APAD</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button>
          <FiPower sizr={18} color="#E02041" />
        </button>
      </header>
      <h1>Casos Cadastrados</h1>
      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>Descricao:</strong>
          <p>Descricao teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>
          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>Descricao:</strong>
          <p>Descricao teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>
          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>Descricao:</strong>
          <p>Descricao teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>
          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>Descricao:</strong>
          <p>Descricao teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>
          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
