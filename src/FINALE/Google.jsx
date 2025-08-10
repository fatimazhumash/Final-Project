import React, { useState } from "react";
import "./Google.css";

function Google() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Сұрағыңыз жіберілді! Біз жақын арада жауап береміз.");
    setFormData({ name: "", email: "", question: "" });
  };

  return (
    <div className="google-container">
      <h1>Қолданушыға көмек</h1>
      <p>
        Біздің <strong>Face ID бар ойын-сауық платформасына</strong> қош келдіңіз!
      </p>

      <h2>Қалай кіру керек?</h2>
      <ol>
        <li>Тіркелу немесе аккаунтқа кіру батырмасын басыңыз.</li>
        <li>Face ID арқылы аутентификацияны таңдаңыз.</li>
        <li>Камераны қосып, бетіңізді экранға бағыттаңыз.</li>
        <li>Сәйкестік табылса, жүйе автоматты түрде кіргізеді.</li>
      </ol>

      <h2>Байланыс</h2>
      <p>
        Сұрақтарыңыз болса, төмендегі форма арқылы жазыңыз немесе{" "}
        <a href="#contact-form">осы жерге өтіңіз</a>.
      </p>

      <h2 id="contact-form">Сұрақ жіберу формасы</h2>
      <form onSubmit={handleSubmit} className="help-form">
        <label>
          Атыңыз:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Сұрағыңыз:
          <textarea
            name="question"
            value={formData.question}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button type="submit">Жіберу</button>
      </form>
    </div>
  );
}

export default Google;
