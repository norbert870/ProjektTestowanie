import { useState } from "react";
import { api, setToken } from "../api";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    try {
      const res = await api.post("/auth/login", { email, password });
      setToken(res.data.token);
      onLogin();
    } catch {
      alert("Nieprawidłowe dane logowania");
    }
  }

  return (
    <div>
      <h2>Logowanie</h2>
      <input
        placeholder="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        placeholder="hasło"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={login}>Zaloguj</button>
    </div>
  );
}