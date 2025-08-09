

import React, { useState } from 'react';
import './Musics.css';


 const allMusic = [
  // Қазақша
  {
    title: 'Plecto - QalQalay?',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://avatars.mds.yandex.net/i?id=0c26a853735a5b5475273d512924aded33478be8-3308358-images-thumbs&n=13',
    category: 'kaz',
    musik:'/models/music/music1.mp3'
  },
  {
    title: 'Ayau - Sybyrlain',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: 'https://avatars.mds.yandex.net/i?id=0bbc0cce71e591375bcc8a03464bd19469408cf3-9293412-images-thumbs&n=13',
    category: 'kaz',
  },
  {
    title: 'Dimash - Adagio',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    image: 'https://avatars.mds.yandex.net/i?id=5c8b6e0a1e5d3a84107b8c6116a0d72e9b75dc1d-9854202-images-thumbs&n=13',
    category: 'kaz',
  },
  {
    title: 'Kairat Nurtas - Seni Suyemin',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    image: 'https://avatars.mds.yandex.net/i?id=9857e0b0da8f96ab74816dc609f2d7bdf0f72892-9231121-images-thumbs&n=13',
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
  {
    title: 'Zivert - Life',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    image: 'https://avatars.mds.yandex.net/i?id=b567bb8d3a7c61ac3b09b0b7c4abf3a6c71fdc7c-10392775-images-thumbs&n=13',
    category: 'rus',
  },
  {
    title: 'MORGENSHTERN - Cadillac',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    image: 'https://avatars.mds.yandex.net/i?id=f0d0ffb8a65e9aab6eb77d6a0b71b8d780b1a5a8-8491138-images-thumbs&n=13',
    category: 'rus',
  },

  // Ағылшынша
  {
    title: 'Ed Sheeran - Perfect',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    image: 'https://avatars.mds.yandex.net/i?id=2db166e0987d2a06c5ed7a1f58d7e58dd81b0133-12630875-images-thumbs&n=13',
    category: 'eng',
  },
  {
    title: 'Adele - Someone Like You',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    image: 'https://avatars.mds.yandex.net/i?id=988657ddbf4b9d79e3e018b9c40e4d59f4e250d2-5331326-images-thumbs&n=13',
    category: 'eng',
  },
  {
    title: 'The Weeknd - Blinding Lights',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    image: 'https://avatars.mds.yandex.net/i?id=35613a17f13e9d3acb4b6cb89b10d74093a05ee1-12485926-images-thumbs&n=13',
    category: 'eng',
  },
  {
    title: 'Imagine Dragons - Believer',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    image: 'https://avatars.mds.yandex.net/i?id=46251240346a645dfda7a99fdcc144c3b0dc5158-9224985-images-thumbs&n=13',
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
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    image: 'https://avatars.mds.yandex.net/i?id=3ded8312cd8c0e61d3e14d25af1cddcd32f2281a-4012442-images-thumbs&n=13',
    category: 'kor',
  },
  {
    title: 'PSY - Gangnam Style',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
    image: 'https://avatars.mds.yandex.net/i?id=01f3828238dcd64d8fc154d3ccfb7279a65a1f6e-9064065-images-thumbs&n=13',
    category: 'kor',
  },
  {
    title: 'TWICE - Fancy',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3',
    image: 'https://avatars.mds.yandex.net/i?id=91a9942361c32a038bdf9e89bbed9c40b7656a4a-5234028-images-thumbs&n=13',
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
      <div className="music-sidebar" style={{margin:"10px"}}>
        <h3>Categories</h3>
        <p onClick={() => setSelectedCategory('all')}>All</p>
        <p onClick={() => setSelectedCategory('kaz')}>Kaz </p>
        <p onClick={() => setSelectedCategory('rus')}>Rus</p>
        <p onClick={() => setSelectedCategory('eng')}>Eng</p>
        <p onClick={() => setSelectedCategory('kor')}>Kor</p>
      </div>

      <div className="music-main">
        <h4>Музыкалар:</h4>
        <div className="music-container">
          {filteredMusic.map((song, index) => (
            <div className="music-card" key={index}>
              <img src={song.image} alt={song.title} className="music-image" style={{width:"100px",height:"100px"}} />
             <iframe src={song.musik} frameborder="0"></iframe>
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












