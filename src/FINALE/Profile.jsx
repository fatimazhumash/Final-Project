import React, { useState } from 'react';
import './Profile.css';
import Modal from './Modal';

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
    noPhoto: 'Сурет жоқ',
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
    noPhoto: 'Нет фото',
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
    noPhoto: 'No photo',
  },
};

function Profile() {
  const [name, setName] = useState('Your Name');
  const [photo, setPhoto] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [language, setLanguage] = useState('kk');
  const [location, setLocation] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(null);

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
          alert(language === 'kk' ? "Орналасқан жерді анықтау мүмкін болмады." : language === 'ru' ? "Не удалось определить местоположение." : "Failed to get location.");
          setMenuOpen(false);
        }
      );
    } else {
      alert(language === 'kk' ? "Бұл браузер геолокацияны қолдамайды." : language === 'ru' ? "Этот браузер не поддерживает геолокацию." : "This browser does not support geolocation.");
      setMenuOpen(false);
    }
  };

  const place = {
    name: language === 'kk' ? "Алматы" : language === 'ru' ? "Алматы" : "Almaty",
    region: language === 'kk' ? "Алматы қаласы" : language === 'ru' ? "Город Алматы" : "City of Almaty",
    description: language === 'kk' ? "​Алмалинский район, , Улица Мауленова ,92." : language === 'ru' ? "Алмалинский район, улица Мауленова, 92." : "Almalinsky district, Maulenova street, 92.",
    image: "https://2gis.kz/almaty/geo/9430047375018127",
    coordinates: {
      lat: 43.251588,
      lng: 76.935242,
    },
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
          <img src={photo} alt="avatar" className="avatar" />
        ) : (
          <div className="avatar-placeholder">{t.noPhoto}</div>
        )}

        <label>{t.name}:</label>
        <input
          id="nameInput"
          className="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="settings">
          <label>
            <input type="checkbox" checked={isPrivate} onChange={() => setIsPrivate(!isPrivate)} />
            {t.privateMode}
          </label>

          {location && <p>📍 {t.location}: {location}</p>}

          <div style={{ marginTop: '15px' }}>
            <label>{t.selectLanguage}</label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="kk">Қазақша</option>
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
          </div>

          <div style={{ marginTop: '20px' }}>
            <button className="map-btn" onClick={() => setSelectedPlace(place)}>🗺️ {t.viewMap}</button>
          </div>
        </div>
      </div>

  
      <Modal show={!!selectedPlace} onClose={() => setSelectedPlace(null)} place={selectedPlace} />
    </div>
  );
}

export default Profile;
