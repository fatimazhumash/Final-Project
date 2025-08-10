
import { Link } from "react-router-dom";
import './GameVideoNav.css';

function GameVideoNav({ darkMode, toggleTheme }) {
  return (
    <div className="game-video-nav">




    
      <div className="nav-section-center">
        <Link to="/home" className="nav-link">AllOne</Link>
        <Link to="/games" className="nav-link">Games</Link>
        <Link to="/videos" className="nav-link">Cartoons</Link>
        <Link to="/musics" className="nav-link">Musics</Link>
      </div>      


      
     
      <div className="nav-section-left">
        <Link to="/profile" className="nav-link">Profile</Link>
        <Link to="/search" className="nav-link">Search</Link>
        <div className="theme-toggle">
          <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
            <span className="slider"></span>
          </label>
        </div>
      </div>

     
    </div>
  );
}

export default GameVideoNav;
