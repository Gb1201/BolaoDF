import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";

const CreateUser: React.FC = () => {
  const [nome, setNome] = useState("");
  const [vitorias, setVitorias] = useState("");
  const [empates, setEmpates] = useState("");
  const [derrotas, setDerrotas] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome || !vitorias || !empates || !derrotas) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    if (
      isNaN(Number(vitorias)) ||
      isNaN(Number(empates)) ||
      isNaN(Number(derrotas))
    ) {
      setError("Vitórias, Empates e Derrotas devem ser números válidos");
      return;
    }

    // Aqui você pode fazer chamada para o backend ou adicionar lógica para salvar

    alert(
      `Usuário criado com sucesso!\nNome: ${nome}\nVitórias: ${vitorias}\nEmpates: ${empates}\nDerrotas: ${derrotas}`
    );

    // Redireciona para o Dashboard após criar usuário
    navigate("/dashboard");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        <h1 className={styles.title}>Criar Usuário</h1>

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
          type="number"
          placeholder="Vitórias"
          value={vitorias}
          onChange={(e) => setVitorias(e.target.value)}
          className={styles.input}
          min="0"
        />
        <input
          type="number"
          placeholder="Empates"
          value={empates}
          onChange={(e) => setEmpates(e.target.value)}
          className={styles.input}
          min="0"
        />
        <input
          type="number"
          placeholder="Derrotas"
          value={derrotas}
          onChange={(e) => setDerrotas(e.target.value)}
          className={styles.input}
          min="0"
        />

        <button type="submit" className={styles.button}>
          Criar Usuário
        </button>

        <p
          className={styles.link}
          onClick={() => navigate("/dashboard")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") navigate("/dashboard");
          }}
        >
          Voltar para o Painel
        </p>
      </form>
    </div>
  );
};

export default CreateUser;

