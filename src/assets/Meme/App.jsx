import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Search from "./Search";
import Messenger from "./Messenger";
import Profile from "./Profile";
import Games from "./Games";
import  Movies from "./Movies";
import Musics from "./Musics";
import Register from "./Register";
import Login from "./Login";
import LoginFaceId from "./LoginFaceId";
import RegisterFaceId from "./RegisterFaceId";
import NotFound from "./NotFound";
import "./App.css";

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/" || location.pathname === "/login" || location.pathname === '/loginfaceid' || location.pathname === '/registerfaceid';

  const [darkMode, setDarkMode] = useState(true);

  // Body class жаңарту
  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="main-container">
      {!hideNavbar && <Navbar />}
      <div className="theme-toggle">
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
          <span className="slider"></span>
        </label>
        <span>{darkMode ? "🌙 Dark" : "☀️ Light"}</span>
      </div>
<header>  <h1>AllOne</h1> < Games/> <Movies/> <Musics/> <Profile/> <Search/></header>
     
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/messenger" element={<Messenger />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/games" element={<Games />} />
          <Route path="/movies" element={<Movieseos />} />
          <Route path="/musics" element={<Musics />} />
          <Route path="/registerfaceid" element={<RegisterFaceId />} />
          <Route path="/loginfaceid" element={<LoginFaceId />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <footer><h1>AllOne</h1> 
      <button>Follow</button>
    <h4>  <img src="" alt="help" />Help </h4>  
     <h4> <img src="" alt="about" /> About</h4> 
     <h4> <img src="" alt="We.re" />We.re</h4>
     
     
     <p> © 2025 AmjiltCuperSchool <br></br> 
     Kazakhstan Almaty<br></br>
     <a src="https://2gis.kz/almaty/geo/9430047375018127"></a>Maulenova 92</p>  
     </footer>
    </div>
  );
}

export default App;
