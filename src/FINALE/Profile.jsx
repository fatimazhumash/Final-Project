// src/Profile.js

import React, { useState } from 'react';
import './Profile.css';
import Modal from './Modal'; // Modal компонентін импорттаймыз

// Тілдік сөздік
const translations = {
  kk: {
    title: 'Менің профилім',
    name: 'Аты-жөні',
    bio: 'Өзім туралы',
    location: 'Орналасқан жер',
    privateMode: 'Приватты режим',
    changeName: 'Атын өзгерту',
    uploadPhoto: 'Фото жүктеу',
    logout: 'Шығу',
    getCurrentLocation: 'Орналасқан жерді анықтау',
    publicMode: 'Қоғамдық режим',
    selectLanguage: 'Тілді таңдау:',
    viewMap: 'Картаны көру',
  },
  ru: {
    title: 'Мой профиль',
    name: 'Имя',
    bio: 'О себе',
    location: 'Местоположение',
    privateMode: 'Приватный режим',
    changeName: 'Изменить имя',
    uploadPhoto: 'Загрузить фото',
    logout: 'Выйти',
    getCurrentLocation: 'Определить местоположение',
    publicMode: 'Публичный режим',
    selectLanguage: 'Выбрать язык:',
    viewMap: 'Посмотреть карту',
  },
  en: {
    title: 'My Profile',
    name: 'Name',
    bio: 'About me',
    location: 'Location',
    privateMode: 'Private mode',
    changeName: 'Change name',
    uploadPhoto: 'Upload photo',
    logout: 'Log out',
    getCurrentLocation: 'Get current location',
    publicMode: 'Public mode',
    selectLanguage: 'Select language:',
    viewMap: 'View Map',
  },
};

function Profile() {
  const [name, setName] = useState('Your Name');
  const [photo, setPhoto] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [language, setLanguage] = useState("kk");
  const [location, setLocation] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(null); // модал үшін

  const t = translations[language];

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
      setMenuOpen(false);
    }
  };

  const handleLogout = () => {
    alert(t.logout);
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setLocation(`Lat: ${lat.toFixed(4)}, Lon: ${lon.toFixed(4)}`);
          alert(`${t.location}: ${lat.toFixed(4)}, ${lon.toFixed(4)}`);
          setMenuOpen(false);
        },
        () => {
          alert("Орналасқан жерді анықтау мүмкін болмады.");
          setMenuOpen(false);
        }
      );
    } else {
      alert("Бұл браузер геолокацияны қолдамайды.");
      setMenuOpen(false);
    }
  };

  // Картада көрсетілетін орын
  const place = {
    name: "Астана",
    region: "Астана қаласы",
    description: "Қазақстан астанасы. Саяси, мәдени және іскерлік орталық.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Astana_day.jpg/800px-Astana_day.jpg",
    coordinates: {
      lat: 51.1605,
      lng: 71.4704
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>{t.title}</h2>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>⋮</div>

        {menuOpen && (
          <div className="dropdown-menu">
            <label htmlFor="uploadPhoto">📸 {t.uploadPhoto}</label>
            <input type="file" id="uploadPhoto" style={{ display: 'none' }} onChange={handlePhotoChange} accept="image/*" />
            <button onClick={() => { document.getElementById('nameInput').focus(); setMenuOpen(false); }}>
              ✏️ {t.changeName}
            </button>
            <button onClick={handleLocation}>📍 {t.getCurrentLocation}</button>
            <button onClick={() => setIsPrivate(!isPrivate)}>
              {isPrivate ? `🔓 ${t.publicMode}` : `🔒 ${t.privateMode}`}
            </button>
            <button onClick={handleLogout}>🚪 {t.logout}</button>
          </div>
        )}
      </div>

      <div className="profile-content">
        {photo ? (
          <img src={photo} alt="аватар" className="avatar" />
        ) : (
          <div className="avatar-placeholder">Нет фото</div>
        )}

        <label>{t.name}:</label>
        <input id="nameInput" className="name-input" value={name} onChange={(e) => setName(e.target.value)} />

        <div className="settings">
          <label>
            <input type="checkbox" checked={isPrivate} onChange={() => setIsPrivate(!isPrivate)} />
            {t.privateMode}
          </label>
          {location && <p>📍 {t.location}: {location}</p>}

          <div>
            <label>{t.selectLanguage}</label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="kk">Қазақша</option>
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
          </div>

          <div style={{ marginTop: "20px" }}>
            <button className="map-btn" onClick={() => setSelectedPlace(place)}>🗺️ {t.viewMap}</button>
          </div>
        </div>
      </div>

      {/* Модал компонент */}
      <Modal show={!!selectedPlace} onClose={() => setSelectedPlace(null)} place={selectedPlace} />
    </div>
  );
}

export default Profile;
