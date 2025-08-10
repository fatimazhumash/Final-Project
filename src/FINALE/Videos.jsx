

import React, { useState } from 'react';
import './Videos.css';




const allCartoons = [
  // Қазақша мультфильмдер (kaz)
{ title: 'Ер Төстік', url: 'https://www.youtube.com/embed/ao1LdZoVX3Y', category: 'kaz' },
{ title: 'Қожанасыр туралы аныздар', url: 'https://www.youtube.com/embed/Yvl2dmNj8Ug', category: 'kaz' },
{ title: '"Бибігүл"мақтаншақ қыз ', url: 'https://www.youtube.com/embed/GIlkSA6ouK4', category: 'kaz' },
{ title: 'Мақта қыз бен мысық', url: 'https://www.youtube.com/embed/viy5bT_967Y', category: 'kaz' },
{ title: 'Алдар көсе', url: 'https://www.youtube.com/embed/ZFkrkxLKxg8', category: 'kaz' },
{ title: 'Тазша бала мен хан', url: 'https://www.youtube.com/embed/GYJK5Rn9e8w', category: 'kaz' },
{ title: 'Құйыршық', url: 'https://www.youtube.com/embed/VbiTUjaTnxY', category: 'kaz' },
{ title: 'Жеті лақ', url: 'https://www.youtube.com/embed/qCGr2xLxkwY', category: 'kaz' },
{ title: 'Қарақұлақ пен түлкі', url: 'https://www.youtube.com/embed/17HLkiirHJE', category: 'kaz' },


  // Орысша мультфильмдер (rus)
 { title: 'Маша и Медведь - Первая встреча', url: 'https://www.youtube.com/embed/0ffUxs9pfJI', category: 'rus' },
{ title: 'Смешарики - Начало', url: 'https://www.youtube.com/embed/AlR0fQsm83Y', category: 'rus' },
{ title: 'Фиксики - Электричка', url: 'https://www.youtube.com/embed/Bu-Mmdy6mIo', category: 'rus' },
{ title: 'Лунтик - Первая серия', url: 'https://www.youtube.com/embed/e78CNlRQOzE', category: 'rus' },
{ title: 'Три богатыря (трейлер)', url: 'https://www.youtube.com/embed/p4c43f8qNDk', category: 'rus' },
{ title: 'Ну, погоди! — Выпуск 1', url: 'https://www.youtube.com/embed/dNOlaqXfSYE', category: 'rus' },
{ title: 'Барби', url: 'https://www.youtube.com/embed/LRqsD0HUjCU', category: 'rus' },
{ title: 'Чебурашка', url: 'https://www.youtube.com/embed/iqkXqXen2vE', category: 'rus' },
{ title: 'Простоквашино', url: 'https://www.youtube.com/embed/gS5QSh3zjKE', category: 'rus' },
{ title: 'Кот Леопольд', url: 'https://www.youtube.com/embed/aWUB9qmiK5o', category: 'rus' },
{ title: 'Бременские музыканты', url: 'https://www.youtube.com/embed/oBOVYIkj1Bs', category: 'rus' },


  // Ағылшынша мультфильмдер (eng)
{ title: 'Peppa Pig - Balloon Ride', url: 'https://www.youtube.com/embed/W1INrEEqNdU', category: 'eng' },
{ title: 'The Gruffalo - Full Movie', url: 'https://www.youtube.com/embed/lSU__knzJtk', category: 'eng' },
{ title: 'Pocoyo - Camping', url: 'https://www.youtube.com/embed/nP6Y9k7Zfck', category: 'eng' },
{ title: 'Baby Shark Dance | Pinkfong', url: 'https://www.youtube.com/embed/XqZsoesa55w', category: 'eng' },
{ title: 'Cocomelon - Yes Yes Vegetables Song', url: 'https://www.youtube.com/embed/ohHYABXMqUQ', category: 'eng' },
{ title: 'Tom and Jerry - Compilation', url: 'https://www.youtube.com/embed/PdYuDMdED1E', category: 'eng' },
{ title: 'Peppa Pig - Best Episodes', url: 'https://www.youtube.com/embed/__Wrzgi-baY', category: 'eng' },
{ title: 'Frozen - Let It Go', url: 'https://www.youtube.com/embed/YVVTZgwYwVo', category: 'eng' },
{ title: 'Moana - How Far I’ll Go', url: 'https://www.youtube.com/embed/cPAbx5kgCJo', category: 'eng' },
{ title: 'Zootopia - Try Everything', url: 'https://www.youtube.com/embed/LnSYihRoGA4', category: 'eng' },


  // Қосымша мультфильмдер (аралас)
 { title: 'Көкек пен әтеш', url: 'https://www.youtube.com/embed/M1bLY-hBk4o', category: 'kaz' },
{ title: 'Айдаһардың інінде', url: 'https://www.youtube.com/embed/Jzojfzkfo5o', category: 'kaz' },
{ title: 'Бауырсақ', url: 'https://www.youtube.com/embed/8plWfQNi3cc', category: 'kaz' },
{ title: 'Колобок', url: 'https://www.youtube.com/embed/SBlLW1eKFBk', category: 'rus' },
{ title: 'Маша и Медведь - Каша', url: 'https://www.youtube.com/embed/AqYsbttfgaQ', category: 'rus' },
{ title: 'Frozen - Full Movie Clip', url: 'https://www.youtube.com/embed/ekFm9Y-lsAc', category: 'eng' },
{ title: 'Cocomelon - Bath Song', url: 'https://www.youtube.com/embed/WRVsOCh907o', category: 'eng' },
{ title: 'Smurfs - Episode 1', url: 'https://www.youtube.com/embed/C_M2HNxxSw0', category: 'eng' },
{ title: 'Шрек', url: 'https://www.youtube.com/embed/KTdYMNIm2w4', category: 'rus' },
{ title: 'Toy Story - Official Clip', url: 'https://www.youtube.com/embed/lMKQagPK7UU', category: 'eng' },
{ title: 'Avatar', url: 'https://www.youtube.com/embed/RNj2cH5yjNA', category: 'eng' },
{ title: 'SpongeBob SquarePants', url: 'https://www.youtube.com/embed/olJ3Y3HWmc8', category: 'eng' },
];




function Videos() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filtered = selectedCategory === 'all'
    ? allCartoons
    : allCartoons.filter((item) => item.category === selectedCategory);

  return (
    <div className="cartoon-wrapper">
      <div className="cartoon-sidebar" style={{margin:"10px"}}>
        <h3>Categories</h3>
        <p onClick={() => setSelectedCategory('all')}>All</p>
        <p onClick={() => setSelectedCategory('kaz')}>Kazakh</p>
        <p onClick={() => setSelectedCategory('rus')}>Russia</p>
        <p onClick={() => setSelectedCategory('eng')}>English</p>
      </div>

      <div className="cartoon-main">
        <h4>Recommended :</h4>


        <div className="cartoon-container">
         {filtered.map((item, index) => (
  <div className="cartoon-card" key={index}>
    {item.url.includes("youtube.com") ? (
      <iframe
        width="100%"
        height="200"
        src={item.url}
        title={item.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ) : (
      <video width="100%" height="200" src={item.url} controls />
    )}
    <p className="cartoon-title">{item.title}</p>
  </div>
))}

  
        </div>
      </div>
    </div>
  );
}

export default Videos;


