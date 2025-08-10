import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function Messenger() {
  const [userInput, setUserInput] = useState("");
  const [qaList, setQaList] = useState(() => {
    // Браузерден сақталған чатты алу
    const saved = localStorage.getItem("chatHistory");
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [qaList, loading]);

  // qaList өзгерген сайын localStorage-ке сақтау
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(qaList));
  }, [qaList]);

  const ask = async () => {
    if (!userInput.trim()) return;
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAtOX-Yvymqz8ogViLD1EyzdqLPK85W3wQ",
        {
          prompt: {
            text:
              userInput +
              " Я могу только задавать вопросы про AllOne. " +
              "AllOne — развлекательный сайт. " +
              "В AllOne вы можете играть, смотреть кино или мультик, даже слушать музыку.",
          },
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const reply =
        response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Жауап табылмады";

      const now = new Date().toLocaleTimeString();

      setQaList((prev) => [
        ...prev,
        { question: userInput, answer: reply, time: now },
      ]);
      setUserInput("");
    } catch (err) {
      console.error(err);
      setError(
        "Қате шықты. Интернетті тексеріңіз немесе кейінірек қайталап көріңіз."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      ask();
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h4>Welcome User</h4>

      <div
        style={{
          minHeight: "300px",
          border: "1px solid #ccc",
          padding: "10px",
          overflowY: "auto",
        }}
      >
        {qaList.map((item, i) => (
          <div key={i}>
            <div
              style={{
                backgroundColor: "#d1e7dd",
                margin: "10px",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <b>Сұрақ:</b> {item.question} <br />
              <small>{item.time}</small>
            </div>
            <div
              style={{
                backgroundColor: "#f8d7da",
                margin: "10px",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <b>Жауап:</b> {item.answer} <br />
              <small>{item.time}</small>
            </div>
          </div>
        ))}
        {loading && <div>Жүктелуде...</div>}
        <div ref={chatEndRef} />
      </div>

      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Сұрағыңызды жазыңыз..."
        style={{ width: "100%", padding: "10px", marginTop: "10px" }}
        disabled={loading}
      />
      <button
        onClick={ask}
        disabled={loading}
        style={{ padding: "10px", marginTop: "5px" }}
      >
        Жіберу
      </button>

      {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
    </div>
  );
}

export default Messenger;
