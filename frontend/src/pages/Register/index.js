import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

import { FiArrowLeft } from "react-icons/fi";
import "./style.css";

import logoImg from "../../assets/logo.svg";

function Register() {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [street, setStreet] = useState("");
  const [numberAddress, setNumberAddress] = useState("");
  const [complement, setComplement] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [uf, setUf] = useState("");
  const [country, setCountry] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const register = {
      name,
      login,
      password,
      email,
      whatsapp,
      street,
      numberAddress,
      complement,
      neighborhood,
      city,
      zip,
      uf,
      country,
    };

    try {
      const response = await api.post("/ongs", register);
      alert(`Seu ID de Acesso ${response.data.id}.`);
      history.push("/");
    } catch (err) {
      alert("Erro no cadastro, tente novamente.");
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />

          <input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="input-group">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              placeholder="WhatsApp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              placeholder="Rua"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <input
              placeholder="Num."
              style={{ width: 150 }}
              value={numberAddress}
              onChange={(e) => setNumberAddress(e.target.value)}
            />
          </div>
          <input
            placeholder="Complemento"
            value={complement}
            onChange={(e) => setComplement(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Bairro"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
            />

            <input
              placeholder="CEP"
              style={{ width: 150 }}
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>

          <input
            placeholder="País"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
