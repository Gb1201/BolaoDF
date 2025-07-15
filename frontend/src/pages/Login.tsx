import { useState } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // Aqui só exibimos no console por enquanto
    console.log("Email:", email);
    console.log("Senha:", senha);
  }

  return (
    <div style={{ maxWidth: 320, margin: "2rem auto", padding: "1rem", border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="email">Email:</label><br />
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="senha">Senha:</label><br />
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            required
            style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
          />
        </div>
        <button type="submit" style={{ padding: "8px 16px" }}>Entrar</button>
      </form>
    </div>
  );
}
