

import React, { useState } from 'react';
import './Videos.css';







const allCartoons = [


{
  title: 'Ер Төстік (QazaqMultfilm)',
  url: 'https://www.youtube.com/embed/G_lwHoJybV4',
  category: 'kaz',
},
{
  title: 'Қанбақ шал',
  url: 'https://www.youtube.com/embed/I61KiBS5LrE',
  category: 'kaz',
},
{
  title: 'Қожанасыр мен Тазша бала',
  url: 'https://www.youtube.com/embed/xokLQulqvTw',
  category: 'kaz',
},
{
  title: 'Күлдіргі ертегілер – Аңқау бала',
  url: 'https://www.youtube.com/embed/GN_hAApg-7E',
  category: 'kaz',
},
{
  title: 'Мақта қыз бен мысық',
  url: 'https://www.youtube.com/embed/E8nDQvhLQhY',
  category: 'kaz',
},
{
  title: 'Маша и Медведь - Первая встреча',
  url: 'https://www.youtube.com/embed/K0ThYUgQ7To',
  category: 'rus',
},
{
  title: 'Смешарики - Начало',
  url: 'https://www.youtube.com/embed/cFNEk-rzU6Y',
  category: 'rus',
},
{
  title: 'Фиксики - Электричка',
  url: 'https://www.youtube.com/embed/xvFZjo5PgG0',
  category: 'rus',
},
{
  title: 'Лунтик и его друзья - Первая серия',
  url: 'https://www.youtube.com/embed/3L38QMY1xlM',
  category: 'rus',
},
{
  title: 'Три богатыря и Шамаханская царица (трейлер)',
  url: 'https://www.youtube.com/embed/AoY3bGzZBqY',
  category: 'rus',
},
{
  title: 'Peppa Pig - Balloon Ride',
  url: 'https://www.youtube.com/embed/6B4IV2bU1Q8',
  category: 'eng',
},
{
  title: 'The Gruffalo - Full Movie',
  url: 'https://www.youtube.com/embed/M1Vv1DKs3JY',
  category: 'eng',
},
{
  title: 'Pocoyo - Camping',
  url: 'https://www.youtube.com/embed/nLWJ5nc_w3w',
  category: 'eng',
},
{
  title: 'Baby Shark Dance | Pinkfong',
  url: 'https://www.youtube.com/embed/XqZsoesa55w',
  category: 'eng',
},
{
  title: 'Cocomelon - Yes Yes Vegetables Song',
  url: 'https://www.youtube.com/embed/8I9nXboURdk',
  category: 'eng',
},
{
  title: 'Tom and Jerry - Classic Cartoon Compilation',
  url: 'https://www.youtube.com/embed/R1Zz4gmIgrg',
  category: 'eng',
},
{
  title: 'Ну, погоди! — Выпуск 1',
  url: 'https://www.youtube.com/embed/BfWe-BUKyXQ',
  category: 'rus',
},
{
  title: 'Qaz мультфильм: Алдар көсе',
  url: 'https://www.youtube.com/embed/KQFML5oNH2Q',
  category: 'kaz',
},
{
  title: 'Peppa Pig - Best Episodes',
  url: 'https://www.youtube.com/embed/m4fF8s25Oq0',
  category: 'eng',
},
{
  title: 'Легенда о Кожанасыре (қазақ тілінде)',
  url: 'https://www.youtube.com/embed/WNnq6lyOTlE',
  category: 'kaz',
},
]

function Videos() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filtered = selectedCategory === 'all'
    ? allCartoons
    : allCartoons.filter((item) => item.category === selectedCategory);

  return (
    <div className="cartoon-wrapper">
      <div className="cartoon-sidebar" style={{margin:"10px"}}>
        <h3>Категориялар</h3>
        <p onClick={() => setSelectedCategory('all')}>Барлығы</p>
        <p onClick={() => setSelectedCategory('kaz')}>Қазақша</p>
        <p onClick={() => setSelectedCategory('rus')}>Орысша</p>
        <p onClick={() => setSelectedCategory('eng')}>Ағылшынша</p>
      </div>

      <div className="cartoon-main">
        <h4>Ұсынылған мультфильмдер:</h4>
        <div className="cartoon-container">
          {filtered.map((item, index) => (
            <div className="cartoon-card" key={index}>
              <iframe
                width="100%"
                height="200"
                src={item.url}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="cartoon-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Videos;


