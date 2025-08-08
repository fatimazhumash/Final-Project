// // src/MusicPlayer.js

// import React, { useState } from 'react';
// import './Musics.css';
// import music1 from "...../assets/music1"
// import music2 from "...../assets/music2"
// import music3 from "...../assets/music3"
// import GameVideoNav from './GameVideoNav';

// // Музыка тізімі
// const playlist = [
//   {
//     id: 1,
//     title: 'Музыка 1',
//     artist: 'Орындаушы 1',
//     src: music1,
//   },
//   {
//     id: 2,
//     title: 'Музыка 2',
//     artist: 'Орындаушы 2',
//     src: music2,
//   },
//   {
//     id: 3,
//     title: 'Музыка 3',
//     artist: 'Орындаушы 3',
//     src: music3,
//   },
// ];

// function Musics() {
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);

//   // HTML5 audio тегін басқару үшін
//   const audioRef = React.useRef(null);
//   const currentSong = playlist[currentSongIndex];

//   // Келесі әнге өту
//   const handleNext = () => {
//     setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
//     // Жаңа әнге өткенде автоматты түрде ойнату
//     if (audioRef.current) {
//         audioRef.current.play();
//     }
//   };

//   // Алдыңғы әнге оралу
//   const handlePrev = () => {
//     setCurrentSongIndex((prevIndex) =>
//       prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
//     );
//     if (audioRef.current) {
//         audioRef.current.play();
//     }
//   };

//   return (
//     <div className="music-player-container">
//         <GameVideoNav/>
//       <div className="music-card">
//         <h3>{currentSong.title}</h3>
//         <p>{currentSong.artist}</p>
        
//         {/* HTML5 audio тегі */}
//         <audio
//           ref={audioRef}
//           key={currentSong.id} // Ән өзгергенде аудионы жаңарту үшін
//           controls
//           autoPlay
//           onEnded={handleNext} // Ән аяқталғанда келесіге өту
//         >
//           <source src={currentSong.src} type="audio/mpeg" />
//           Браузеріңіз аудионы қолдамайды.
//         </audio>
        
//         <div className="controls">
//           <button onClick={handlePrev}>Алдыңғы</button>
//           <button onClick={handleNext}>Келесі</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Musics;



import React, { useState } from 'react';


function Musics() {
  const [query, setQuery] = useState('');
  const [track, setTrack] = useState(null);

  const searchSong = async () => {
    const res = await fetch(`https://api.deezer.com/search?q=${query}`);
    const data = await res.json();
    setTrack(data.data[0]); // алғашқы ән
  };

  return (
    <div style={{ padding: 20 }}>
     
      <h2>🎶 Музыка іздеу (Deezer API)</h2>
      <input
        type="text"
        placeholder="Ән не орындаушы..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchSong}>Іздеу</button>

      {track && (
        <div style={{ marginTop: 20 }}>
          <h3>{track.title} — {track.artist.name}</h3>
          <img src={track.album.cover_medium} alt="Album Cover" />
          <audio controls src={track.preview}></audio>
        </div>
      )}
    </div>
  );
}

export default Musics;
