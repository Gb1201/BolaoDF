import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";

interface Usuario {
  id: number;
  nome: string;
  vitorias: number;
  empates: number;
  derrotas: number;
}

const usuariosFicticios: Usuario[] = [
  { id: 1, nome: "Gabriel Coelho", vitorias: 5, empates: 2, derrotas: 1 },
  { id: 2, nome: "Mariana Silva", vitorias: 3, empates: 4, derrotas: 2 },
  { id: 3, nome: "Lucas Santos", vitorias: 7, empates: 1, derrotas: 1 },
  { id: 4, nome: "Ana Oliveira", vitorias: 2, empates: 3, derrotas: 4 },
  { id: 5, nome: "Felipe Souza", vitorias: 6, empates: 2, derrotas: 2 },
];

const Dashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredUsuarios = usuariosFicticios
    .filter((user) =>
      user.nome.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (b.vitorias !== a.vitorias) return b.vitorias - a.vitorias;
      return a.nome.localeCompare(b.nome);
    });

  return (
    <>
      {/* Cabeçalho fixo */}
      <header className={styles.header}>
        <div
          className={styles.menuItem}
          onClick={() => navigate("/minha-conta")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") navigate("/minha-conta");
          }}
        >
          Minha Conta
        </div>
        <div
          className={styles.menuItem}
          onClick={() => navigate("/dashboard")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") navigate("/dashboard");
          }}
        >
          Dashboard
        </div>

        <div
          className={styles.menuItem}
          onClick={() => navigate("/login")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") navigate("/login");
          }}
        >
          Sair
        </div>
      </header>

      {/* Conteúdo principal */}
      <div className={styles.container}>
        {/* Título centralizado */}
        <h1 className={styles.title} style={{ textAlign: "center", marginBottom: "30px" }}>
          Painel do Bolão
        </h1>

        {/* Pesquisa e botão */}
        <div className={styles.controls}>
          <input
            type="text"
            placeholder="Pesquisar usuário..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <button
            className={styles.button}
            onClick={() => navigate("/create-user")}
            style={{ width: "auto", padding: "12px 24px" }}
          >
            Criar Novo Usuário
          </button>
        </div>

        {/* Tabela centralizada e ampla */}
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <table className={styles.table} style={{ width: "90%", maxWidth: "1000px" }}>
            <thead>
              <tr>
                <th>Posição</th>
                <th>Nome</th>
                <th>V</th>
                <th>E</th>
                <th>D</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsuarios.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ textAlign: "center", padding: "20px" }}>
                    Nenhum usuário encontrado.
                  </td>
                </tr>
              ) : (
                filteredUsuarios.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.nome}</td>
                    <td>{user.vitorias}</td>
                    <td>{user.empates}</td>
                    <td>{user.derrotas}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;






