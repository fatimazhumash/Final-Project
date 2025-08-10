import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./Home";
import Search from "./Search";
import Messenger from "./Messenger";
import Profile from "./Profile";
import Games from "./Games";
import GamePage from "./GamePage";
import Videos from "./Videos";
import Musics from "./Musics";
import Register from "./Register";
import Login from "./Login";
import LoginFaceId from "./LoginFaceId";
import RegisterFaceId from "./RegisterFaceId";
import NotFound from "./NotFound";
import GameVideoNav from "./GameVideoNav";
import About from "./About";
import Help from "./Help";
import Google from "./Google";
import "./App.css";




function App() {
  const location = useLocation();
  const hideNavbar = ["/", "/login", "/loginfaceid", "/registerfaceid"].includes(location.pathname);

  const [darkMode, setDarkMode] = useState(true);
  const [followed, setFollowed] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const toggleFollow = () => {
    setFollowed((prev) => {
      const newFollow = !prev;
      alert(newFollow ? "✅ Успешно подписались" : "❌ Успешно отписались");
      return newFollow;
    });
  };

  return (
    <div className="main-container">
      {!hideNavbar && (
        <>
          <GameVideoNav darkMode={darkMode} toggleTheme={toggleTheme} />
        </>
      )}

      <div className="content-container">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/messenger" element={<Messenger />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:id" element={<GamePage/>} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/musics" element={<Musics />} />
          <Route path="/registerfaceid" element={<RegisterFaceId />} />
          <Route path="/loginfaceid" element={<LoginFaceId />} />
          <Route path="*" element={<NotFound />} />
           <Route path="about" element={<About />} />
            <Route path="help" element={<Help/>} />
            <Route path="google" element={<Google/>}/>
          
        </Routes>
      </div>

<div className="footer">
  {!hideNavbar && (
    <footer className="app-footer">
   
      <div className="footer-left">
        <h1>AllOne</h1>
        <button
          className="follow-btn"
          style={{
            backgroundColor: followed ? "white" : "#ff3b3b",
            color: followed ? "#ff3b3b" : "white",
          }}
          onClick={toggleFollow}
        >
          {followed ? "Unfollow" : "Follow"}
        </button>

     
        <div className="footer-copy" >
          <p>© 2025 <span>AmjiltCuperSchool</span></p>
          <p>Kazakhstan, Almaty</p>
          <a href="https://2gis.kz/almaty/geo/9430047375018127" target="_blank" rel="noreferrer">
            Maulenova 92
          </a>
        </div>
      </div><div className="footer-right">
        <div className="footer-links">
          <div className="imgl">
            <h4>
              <img src="https://avatars.mds.yandex.net/i?id=2b393ffd998e40dd2f511ae24ad4ce10bb472c82-6432328-images-thumbs&n=13" alt="help" />
              <a href="/help">Help</a>
            </h4>
          </div>
          <div className="imgl">
            <h4>
              <img src="https://avatars.mds.yandex.net/i?id=25bec0d30cd797d3e7240d4fde72333f12280c3c-8275014-images-thumbs&n=13" alt="about" />
              <a href="/about">About</a>
            </h4>
          </div>
          <div className="imgl">
            <h4>
              <img src="https://avatars.mds.yandex.net/i?id=b7bc9f002b6675f2649bb4f2fb32ae15837c75c2-4555798-images-thumbs&n=13" alt="We.re" />
              <a href="/messenger">We.re</a>
            </h4>
          </div>
        </div>
      </div>
    </footer>
  )}
</div>


    
    </div>
  );
} export default App;