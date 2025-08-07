import { Link } from "react-router-dom"

import GameVideoNav from './GameVideoNav';
function Home (){
    return(
        <div>
      <GameVideoNav/>
         
      <div className="top-nav">
        <Link to="/games" className="top-nav-link">Games</Link>
        <Link to="/videos" className="top-nav-link">Cartoons</Link>
        <Link to="/musics" className="top-nav-link">Musics</Link>
      </div>
        </div>
    )
}export default Home