

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import Navbar from './Navbar';

function Profile() {
  const [name, setName] = useState('Your Name');
  const [photo, setPhoto] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [language, setLanguage] = useState("kk");


  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="profile-container">
      <Navbar />
      
      <div className="profile-header">
        <h2>My Profile</h2>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>⋮</div>
        
        {menuOpen && (
          <div className="dropdown-menu">
            <button onClick={() => document.getElementById('uploadPhoto').click()}>
              📸 Загрузить фото
            </button>
            <button onClick={() => document.getElementById('nameInput').focus()}>
              ✏️ Изменить имя
            </button>
            <button onClick={handleLogout}>🚪 Выйти</button>
          </div>
        )}
      </div>

      <div className="profile-content">
        <input
          type="file"
          id="uploadPhoto"
          style={{ display: 'none' }}
          onChange={handlePhotoChange}
        />
        {photo ? (
          <img src={photo} alt="avatar" className="avatar" />
        ) : (
          <div className="avatar-placeholder">Нет фото</div>
        )}

        <input
          id="nameInput"
          className="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="settings">
          <label>
            <input
              type="checkbox"
              checked={isPrivate}
              onChange={() => setIsPrivate(!isPrivate)}
            />
            Приватты режим
          </label>

          <div>
            <label>Тілді таңдау:</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="kk">Қазақша</option>
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
