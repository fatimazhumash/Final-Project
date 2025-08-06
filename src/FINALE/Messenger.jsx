// Messenger.js
import React, { useState } from 'react';
import axios from 'axios';
import './Messenger.css';

function Messenger() {
  const [userInput, setUserInput] = useState('');
  const [answer, setAnswer] = useState([]);

  function ask() {
    if (!userInput.trim()) return;

    axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAtOX-Yvymqz8ogViLD1EyzdqLPK85W3wQ`,
      {
        contents: [{ parts: [{ text: userInput + "Берілген сұрақтарға жауап беру" }] }]
      },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
    .then(response => {
      const reply = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
      setAnswer([...answer, { question: userInput, answer: reply }]);
      setUserInput('');
    })
    .catch(error => console.error(error));
  }

  return (
    <div className="chat-container">
      <div className="chat-box">
        {answer.map((item, index) => (
          <div key={index}>
            <div className="chat-bubble user">
              <b>Сұрақ:</b> {item.question}
            </div>
            <div className="chat-bubble bot">
              <b>Жауап:</b> {item.answer}
            </div>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Сұрағыңызды жазыңыз..."
        />
        <button onClick={ask}>Жіберу</button>
      </div>
    </div>
  );
}

export default Messenger;
