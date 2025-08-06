

import { Link } from "react-router-dom";
import './GameVideoNav.css';

function GameVideoNav() {
  return (
    <div className="game-video-nav">
      <Link to="/games" className="nav-link">Games</Link>
      <Link to="/videos" className="nav-link">Cartoons</Link>
      <Link to="/musics" className="nav-link">Musics</Link>
    </div>
  );
}

export default GameVideoNav;