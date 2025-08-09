

import React, { useState } from 'react';
import './Musics.css';

const allMusic = [
  // Қазақша
  {
    title: 'Plecto - QalQalay?',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://avatars.mds.yandex.net/i?id=0c26a853735a5b5475273d512924aded33478be8-3308358-images-thumbs&n=13',
    category: 'kaz',
  },
  {
    title: 'Ayau-Sybyrlain',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: 'https://avatars.mds.yandex.net/i?id=0bbc0cce71e591375bcc8a03464bd19469408cf3-9293412-images-thumbs&n=13',
    category: 'kaz',
  },

  // Орысша
  {
    title: 'Miyagi & Andy Panda - Minor',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://avatars.mds.yandex.net/i?id=1c98d2a9fbeb6243037209ac528205113601d2a2-9264009-images-thumbs&n=13',
    category: 'rus',
  },
  {
    title: 'Timati - Welcome to St. Tropez',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    image: 'https://avatars.mds.yandex.net/i?id=7fdd6150bfbff04c71f41f575c5af39a802925dc-10161278-images-thumbs&n=13',
    category: 'rus',
  },

  // Ағылшынша
  {
    title: 'Ed Sheeran - Perfect',
    url: '',
    image: 'https://avatars.mds.yandex.net/i?id=2db166e0987d2a06c5ed7a1f58d7e58dd81b0133-12630875-images-thumbs&n=13',
    category: 'eng',
  },
  {
    title: 'Adele - Someone Like You',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    image: 'https://avatars.mds.yandex.net/i?id=988657ddbf4b9d79e3e018b9c40e4d59f4e250d2-5331326-images-thumbs&n=13',
    category: 'eng',
  },

  // Корейше
  {
    title: 'BTS - Dynamite',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    image: 'https://avatars.mds.yandex.net/i?id=177a038f01ea8e0eb91c95934b23dc2a6a637e23-9065868-images-thumbs&n=13',
    category: 'kor',
  },
  {
    title: 'BLACKPINK - How You Like That',
    url: 'https://127.0.0.1/mp3/blackpink-how-you-like-that/36455',
    image: 'https://avatars.mds.yandex.net/i?id=3ded8312cd8c0e61d3e14d25af1cddcd32f2281a-4012442-images-thumbs&n=13',
    category: 'kor',
  },
];


function Musics() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredMusic =
    selectedCategory === 'all'
      ? allMusic
      : allMusic.filter((song) => song.category === selectedCategory);

  return (
    <div className="music-wrapper">
      <div className="music-sidebar">
        <h3>Categories</h3>
        <p onClick={() => setSelectedCategory('all')}>All</p>
        <p onClick={() => setSelectedCategory('kaz ')}>Kaz </p>
        <p onClick={() => setSelectedCategory('rus')}>Rus</p>
        <p onClick={() => setSelectedCategory('eng')}>Eng</p>
        <p onClick={() => setSelectedCategory('kor')}>Kor</p>
      </div>

      <div className="music-main">
        <h4>Музыкалар:</h4>
        <div className="music-container">
          {filteredMusic.map((song, index) => (
            <div className="music-card" key={index}>
              <img src={song.image} alt={song.title} className="music-image" />
              <p className="music-title">{song.title}</p>
              <audio controls className="music-player">
                <source src={song.url} type="audio/mp3" />
                Сіздің браузеріңіз аудионы қолдамайды.
              </audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Musics;












