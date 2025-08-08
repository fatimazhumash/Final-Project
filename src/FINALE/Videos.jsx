// src/Videos.js

import React from 'react';
import './Videos.css'; // Стиль файлын импорттау


// Видеолардың тізімі
const videoList = [
  'https://www.w3schools.com/html/mov_bbb.mp4', // Мысалға арналған видео
  // Мұнда басқа видеолардың URL-дарын қоса аласыз
  // 'https://example.com/your-video1.mp4',
  // 'https://example.com/your-video2.mp4',
];

function Videos() {
  return (
    <div className="videos-container">
      
      <h4></h4>
      {videoList.map((videoUrl, index) => (
        <div key={index} className="video-card">
          <video className="video-player" controls muted>
            <source src={videoUrl} type="video/mp4" />
            Браузеріңіз видеоны қолдамайды.
          </video>
        </div>
      ))}
    </div>
  );
}

export default Videos;