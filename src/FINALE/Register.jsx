import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Барлық өрістерді толтыру қажет.");
      return;
    }

    try {
      const response = await fetch("https://6892e0fdc49d24bce86898c9.mockapi.io/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Тіркелу сәтті өтті! Енді жүйеге кіре аласыз.");
        setError("");
        setName("");
        setEmail("");
        setPassword("");
        navigate("/login");
      } else {
        setError(data.message || "Тіркелу сәтсіз аяқталды.");
        setSuccess("");
      }
    } catch (err) {
      setError("Сервермен байланыс кезінде қателік кетті. Кейінірек қайталап көріңіз.");
      setSuccess("");
    }
  };

  // 🔵 Face ID арқылы тіркелу функциясы
  const handleFaceIdRegister = () => {
    navigate("/faceid"); // Мысалы, Face ID компонентіне бағыттау
  };

  return (
    <div className="auth-container">
      <h2>Тіркелу</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Аты-жөніңіз"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Электронды пошта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Тіркелу</button>
      </form>

      {/* ➕ Face ID батырмасы */}
      <button onClick={handleFaceIdRegister} className="faceid-btn">
        Face ID арқылы тіркелу
      </button>

      {/* 🔁 Логин бетіне өту батырмасы */}
      <p className="login-redirect">
        Аккаунтыңыз бар ма?{" "}
        <button onClick={() => navigate("/login")} className="link-btn">
          Жүйеге кіру
        </button>
      </p>

      {success && <p className="success-message">{success}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Register;
