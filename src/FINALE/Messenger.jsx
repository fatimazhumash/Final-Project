// src/Messenger.js

import React, { useState } from 'react';
import './Messenger.css';

function Messenger() {
    // Хабарламалар тізімін сақтайтын күй (state)
    const [messages, setMessages] = useState([]);
    // Жаңа хабарламаның мәтінін сақтайтын күй
    const [newMessage, setNewMessage] = useState('');

    // Хабарлама жіберу функциясы
    const sendMessage = (e) => {
        // Беттің қайта жүктелмеуі үшін
        e.preventDefault();

        // Егер хабарлама бос болса, ештеңе істемейміз
        if (newMessage.trim() === '') return;

        // Жаңа хабарламаны хабарламалар тізіміне қосу
        const newMsg = {
            id: Date.now(), // Әр хабарламаға бірегей ID беру
            text: newMessage,
            username: 'Мен', // Мысалға арналған қолданушы аты
        };

        setMessages(prevMessages => [...prevMessages, newMsg]);

        // Хабарлама жіберілгеннен кейін, енгізу өрісін тазарту
        setNewMessage('');
    };

    return (
        <div className="messenger-container">
            <div className="messages-list">
                {messages.map(msg => (
                    <div key={msg.id} className="message">
                        <strong>{msg.username}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <form onSubmit={sendMessage} className="message-form">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Хабарлама жіберіңіз..."
                />
                <button type="submit">Жіберу</button>
            </form>
        </div>
    );
}

export default Messenger;