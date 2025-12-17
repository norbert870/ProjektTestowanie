import { useState } from "react";
import { api } from "../api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function register() {
    try {
      await api.post("/auth/register", { email, password });
      alert("Zarejestrowano!");
    } catch (err) {
      alert("Błąd rejestracji: email może już istnieć");
    }
  }

  return (
    <div>
      <h2>Rejestracja</h2>
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
      <button onClick={register}>Zarejestruj</button>
    </div>
  );
}