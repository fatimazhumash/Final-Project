import React, { useState } from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()
 const handleLogin = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    setError("Email немесе пароль бос болмауы керек.");
    return;
  }

  try {
    // 1. Получаем всех пользователей
    const response = await fetch('https://6892e0fdc49d24bce86898c9.mockapi.io/users');
    const users = await response.json();

    // 2. Проверяем, есть ли пользователь с такими данными
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      // 3. Успешный логин
      localStorage.setItem("userToken", matchedUser.id); // В MockAPI нет token, можно сохранить id
      localStorage.setItem("userEmail", matchedUser.email);
      setError("");
      alert("Логин сәтті өтті!");
      navigate('/home')
      // window.location.href = "/dashboard";
    } else {
      setError("Қате email немесе пароль.");
    }
  } catch (err) {
    setError("Сервермен байланыс кезінде қателік кетті. Кейінірек қайталап көріңіз.");
  }
};


  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email"
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password"
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Login</button>
        <button onClick={() => navigate("/loginfaceid")}>
  Face ID арқылы кіру
</button>

      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Login;