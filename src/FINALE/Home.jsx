import { useNavigate } from "react-router-dom";
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h2>Welcome to AllOne </h2>

      {/* GAMES */}
      <section className="home-section">
        <div className="section-header">
          <h3>🎮 Top Games</h3>
          <button onClick={() => navigate('/games')}>See All →</button>
        </div>
        <div className="card-list">
          <div className="card">
            <img
              src="https://avatars.mds.yandex.net/i?id=2ce64b300cd8288fc65e459bcf2e1a7a3975e95d-16412977-images-thumbs&n=13"
              alt="Fireboy & Watergirl 1 in The Forest Temple"
              className="game-image"
              onClick={()=>navigate('/games')}
            />
            <p className="game-title">Fireboy & Watergirl</p>
          </div>
          <div className="card">
            <img
              src="https://avatars.mds.yandex.net/i?id=bcb6c6183e0006bf68803d14a8e94857e654ac1a-12716743-images-thumbs&n=13"
              alt="Westland Survival"
              className="game-image"
              onClick={()=>navigate('/games')}
            />
            <p className="game-title">Westland Survival</p>
          </div>
          <div className="card">
            <img
              src="https://avatars.mds.yandex.net/i?id=fbca50028edf241fcf86a09f90b2235858b6a284-4080206-images-thumbs&n=13"
              alt="Subway Surfers"
              onClick={()=>navigate('/games')}
            />
            <p>Subway Surfers</p>
          </div>
          <div className="card">
            <img
              src="https://avatars.mds.yandex.net/i?id=ccd932f27372eabbf5bc5dcadc14967f0079ab0b-5134183-images-thumbs&n=13"
              alt="Among Us"
              onClick={()=>navigate('/games')}
            />
            <p>Among Us</p>
          </div>
        </div>
      </section>

      {/* CARTOONS */}
      <section className="home-section">
        <div className="section-header">
          <h3>📺 Popular Cartoons</h3>
          <button onClick={() => navigate('/videos')}>See All →</button>
        </div>
        <div className="card-list">
          <div className="card">
            <img src="https://avatars.mds.yandex.net/i?id=1f35f3dcfc5a585f53691e788dbc138d6ce77bcf-16477815-images-thumbs&n=13" alt="Tom & Jerry"  onClick={()=>navigate('/videos')}/>
            <p>Tom & Jerry</p>
           
          </div>
          <div className="card">
            <img src="https://avatars.mds.yandex.net/i?id=576b2052cd777f93d0de19ba1bfae48a34c50a16-5661780-images-thumbs&n=13" alt="Avatar"    onClick={()=>navigate('/videos')} />
            <p>Avatar</p>
           
          </div>
          <div className="card">
            <img src="https://avatars.mds.yandex.net/i?id=de84ccde8feaebaeba388c77c6e3dd0410f490e5-4234358-images-thumbs&n=13" alt="SpongeBob"   onClick={()=>navigate('/videos')}/>
            <p>SpongeBob SquarePants</p>
           
          </div>
          <div className="card">
            <img src="https://avatars.mds.yandex.net/i?id=69fe51987e538a6f8a2845bb86e45c9f53884427-5210240-images-thumbs&n=13" alt="Frozen"   onClick={()=>navigate('/videos')}/>
            <p>Frozen</p>
           
          </div>
        </div>
      </section>

      {/* MUSIC */}
      <section className="home-section">
        <div className="section-header">
          <h3>🎧 Trending Music</h3>
          <button onClick={() => navigate('/musics')}>See All →</button>
        </div>
        <div className="card-list">
          <div className="card">
            <img src="https://avatars.mds.yandex.net/i?id=4777e56ba5413c67933cb1b5eff668db3cb46cb2-5236153-images-thumbs&n=13" alt="Faded" onClick={()=>navigate('/musics')}/>
                
            <p>Alan Walker - Faded</p>
          </div>
          <div className="card">
            <img src="https://avatars.mds.yandex.net/i?id=177a038f01ea8e0eb91c95934b23dc2a6a637e23-9065868-images-thumbs&n=13" alt="Dynamite"onClick={()=>navigate('/musics')} />
             
            <p>BTS - Dynamite</p>
          </div>
          <div className="card">
            <img src="https://avatars.mds.yandex.net/i?id=f5405af62c4527eca0e01b282552ad2c3fd3ea86-10805549-images-thumbs&n=13" alt="Perfect" onClick={()=>navigate('/musics')} />
              
            <p>Ed Sheeran - Perfect</p>
          </div>
          <div className="card">
            <img src="https://avatars.mds.yandex.net/i?id=6828c2d7f69329649c0da3d23d9483c8ddf99e6c-5877309-images-thumbs&n=13" alt="Someone Like You" onClick={()=>navigate('/musics')} />
       
            <p>Adele - Someone Like You</p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
