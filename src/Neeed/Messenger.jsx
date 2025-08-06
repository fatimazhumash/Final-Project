// import React, { useState } from 'react';

// export default function Messenger() {
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState("");
//   const [editIndex, setEditIndex] = useState(null);
//   const [pinnedIndex, setPinnedIndex] = useState(null);

//   const sendMessage = () => {
//     if (!text.trim()) return;

//     if (editIndex !== null) {
//       const updated = [...messages];
//       updated[editIndex] = text;
//       setMessages(updated);
//       setEditIndex(null);
//     } else {
//       setMessages([...messages, text]);
//     }
//     setText("");
//   };

//   const deleteMessage = (index) => {
//     const updated = messages.filter((_, i) => i !== index);
//     setMessages(updated);
//     if (pinnedIndex === index) setPinnedIndex(null);
//   };

//   const pinMessage = (index) => {
//     setPinnedIndex(index === pinnedIndex ? null : index);
//   };

//   return (
//     <div className="p-4 text-white bg-black min-h-screen">
//       <h1 className="text-2xl mb-4 font-bold">Messenger</h1>
//       <div className="mb-4 flex gap-2">
//         <input
//           type="text"
//           value={text}
//           placeholder="Type a message..."
//           onChange={(e) => setText(e.target.value)}
//           className="flex-grow p-2 rounded bg-gray-800 text-white"
//         />
//         <button onClick={sendMessage} className="bg-green-600 px-4 py-2 rounded">
//           {editIndex !== null ? "Update" : "Send"}
//         </button>
//       </div>

//       <ul className="space-y-2">
//         {messages.map((msg, i) => (
//           <li
//             key={i}
//             className={`p-3 rounded bg-gray-900 flex justify-between items-center ${
//               i === pinnedIndex ? "border border-yellow-400" : ""
//             }`}
//           >
//             <span>{msg}</span>
//             <div className="flex gap-2">
//               <button onClick={() => setEditIndex(i)} className="text-blue-400">✏️</button>
//               <button onClick={() => deleteMessage(i)} className="text-red-400">🗑️</button>
//               <button onClick={() => pinMessage(i)} className="text-yellow-400">
//                 {i === pinnedIndex ? "📌 Unpin" : "📌 Pin"}
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }






// import React, { useState } from "react";

// const Messenger = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [editIndex, setEditIndex] = useState(null);

//   const sendMessage = () => {
//     if (!input) return;
//     const newMsg = {
//       user: localStorage.getItem("user"),
//       text: input,
//       pinned: false,
//       image: null,
//     };
//     if (editIndex !== null) {
//       messages[editIndex].text = input;
//       setMessages([...messages]);
//       setEditIndex(null);
//     } else {
//       setMessages([...messages, newMsg]);
//     }
//     setInput("");
//   };

//   const deleteMsg = (i) => setMessages(messages.filter((_, idx) => idx !== i));
//   const pinMsg = (i) => {
//     messages[i].pinned = !messages[i].pinned;
//     setMessages([...messages]);
//   };
//   const editMsg = (i) => {
//     setInput(messages[i].text);
//     setEditIndex(i);
//   };

//   return (
//     <div>
//       <h2>Messenger</h2>
//       <div> </div>
//       <div></div>
//       <div></div>
//       <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Жазу..." />
//       <button onClick={sendMessage}>{editIndex !== null ? "Жаңарту" : "Жіберу"}</button>
//       <ul>
//         {messages.map((msg, i) => (
//           <li key={i} style={{ background: msg.pinned ? "#ffe" : "#fff" }}>
//             <b>{msg.user}</b>: {msg.text}
//             <button onClick={() => pinMsg(i)}>📌</button>
//             <button onClick={() => editMsg(i)}>✏️</button>
//             <button onClick={() => deleteMsg(i)}>🗑</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Messenger;






import React, { useState } from "react";
import "./Messenger.css"; // Стиль бөлек
import Navbar from "./Navbar";

const users = ["Айдана", "Нұржан", "Бексұлтан", "Аружан"];

const Messenger = () => {
  const [currentUser, setCurrentUser] = useState(users[0]);
  const [messages, setMessages] = useState({});
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;
    const newMsg = {
      sender: "Мен",
      text: input,
      time: new Date().toLocaleTimeString(),
    };

    const userMsgs = messages[currentUser] || [];
    setMessages({ ...messages, [currentUser]: [...userMsgs, newMsg] });
    setInput("");
  };

  return (
    <div className="messenger-container">
      <Navbar/>
      <div className="user-list">
        <h3>Чаттар</h3>
        {users.map((user, i) => (
          <div
            key={i}
            className={`user-item ${user === currentUser ? "active" : ""}`}
            onClick={() => setCurrentUser(user)}
          >
            {user}
          </div>
        ))}
      </div>

      <div className="chat-section">
        <h3>{currentUser}:</h3>
        <div className="messages">
          {(messages[currentUser] || []).map((msg, idx) => (
            <div key={idx} className={`message ${msg.sender === "Мен" ? "me" : "other"}`}>
              <div>{msg.text}</div>
              <span>{msg.time}</span>
            </div>
          ))}
        </div>

        <div className="input-section">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Хабарлама жазу..."
          />
          <button onClick={sendMessage}>Жіберу</button>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
