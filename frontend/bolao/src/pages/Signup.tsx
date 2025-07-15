import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";

const Signup: React.FC = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome || !telefone || !email || !senha) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    // Aqui pode validar email, senha, telefone...

    alert(`Conta criada com sucesso!\nNome: ${nome}\nTelefone: ${telefone}\nEmail: ${email}`);

    navigate("/");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSignup} className={styles.form} noValidate>
        <h1 className={styles.title}>Criar Conta</h1>

        {error && <div className={styles.error}>{error}</div>}

        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className={styles.input}
          autoComplete="name"
        />
        <input
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          className={styles.input}
          autoComplete="tel"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className={styles.input}
          autoComplete="new-password"
        />

        <button type="submit" className={styles.button}>
          Criar Conta
        </button>

        <p
          className={styles.link}
          onClick={() => navigate("/")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") navigate("/");
          }}
        >
          Voltar para Entrar
        </p>
      </form>
    </div>
  );
};

export default Signup;
