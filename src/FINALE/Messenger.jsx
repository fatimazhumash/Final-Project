// // Messenger.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Messenger.css';

// function Messenger() {
//   const [userInput, setUserInput] = useState('');
//   const [answer, setAnswer] = useState([]);

//   function ask() {
//     if (!userInput.trim()) return;

//     axios.post(
//       `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAtOX-Yvymqz8ogViLD1EyzdqLPK85W3wQ`,
//       {
//         contents: [{ parts: [{ text: userInput + "" }] }]
//       },
//       {
//         headers: { 'Content-Type': 'application/json' }
//       }
//     )
//     .then(response => {
//       const reply = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
//       setAnswer([...answer, { question: userInput, answer: reply }]);
//       setUserInput('');
//     })
//     .catch(error => console.error(error));
//   }

//   return (
//     <div className="chat-container">
//       <div className="chat-box">
//         {answer.map((item, index) => (
//           <div key={index}>
//             <div className="chat-bubble user">
//               <b>Сұрақ:</b> {item.question}
//             </div>
//             <div className="chat-bubble bot">
//               <b>Жауап:</b> {item.answer}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="input-area">
//         <input
//           type="text"
//           value={userInput}
//           onChange={(e) => setUserInput(e.target.value)}
//           placeholder="Сұрағыңызды жазыңыз..."
//         />
//         <button onClick={ask}>Жіберу</button>
//       </div>
//     </div>
//   );
// }

// export default Messenger;








import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Messenger.css';

function Messenger() {
  const [userInput, setUserInput] = useState('');
  const [qaList, setQaList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [qaList, loading]);

  const ask = async () => {
    if (!userInput.trim()) return;
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAtOX-Yvymqz8ogViLD1EyzdqLPK85W3wQ`,
        {
          contents: [{ parts: [{ text: userInput +   "" + "Я могу только задавать вопросы про AllOne"+"AllOne это развликательный сайт"+" В AllOne вы можете играть, смотреть кино или мультик даже можете послушать свою любимую музыку "
    }] }]
        },
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );

      const reply = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
      const now = new Date().toLocaleTimeString();

      setQaList(prev => [...prev, {
        question: userInput,
        answer: reply,
        time: now
      }]);
      setUserInput('');
    } catch (err) {
      console.error(err);
      setError('Қате шықты. Интернетті тексеріңіз немесе кейінірек қайталап көріңіз.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      ask();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {qaList.map((item, index) => (
          <div key={index}>
            <div className="chat-bubble user">
              <b>Сұрақ:</b> {item.question}
              <div className="time">{item.time}</div>
            </div>
            <div className="chat-bubble bot">
              <b>Жауап:</b> {item.answer}
              <div className="time">{item.time}</div>
            </div>
          </div>
        ))}
        {loading && <div className="loading">Жүктелуде...</div>}
        <div ref={chatEndRef} />
      </div>

      <div className="input-area">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Сұрағыңызды жазыңыз..."
        />
        <button onClick={ask}>Жіберу</button>
      </div>

      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default Messenger;
