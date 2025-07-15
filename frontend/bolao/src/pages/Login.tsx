import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";

const Login: React.FC = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!usuario || !senha) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    if (usuario === "admin" && senha === "1234") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      setError("Usuário ou senha inválidos");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin} className={styles.form} noValidate>
        <h1 className={styles.title}>Entrar</h1>

        {error && <div className={styles.error}>{error}</div>}

        <input
          type="text"
          placeholder="Email ou número de telefone"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className={styles.input}
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className={styles.input}
          autoComplete="current-password"
        />
        <button type="submit" className={styles.button}>
          Entrar
        </button>

        <p
          className={styles.link}
          onClick={() => navigate("/signup")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") navigate("/signup");
          }}
        >
          Cadastre-se
        </p>
      </form>
    </div>
  );
};

export default Login;





