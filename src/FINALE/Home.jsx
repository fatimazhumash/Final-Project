import { useNavigate } from "react-router-dom";
import './Home.css'; // стиль бөлек болсын

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h2>Welcome to AllOne 👋</h2>

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
            alt="Fireboy & Watergirl 1 in The Forest Temple
"
            className="game-image"
          />
        <p className="game-title">Fireboy & Watergirl 1 in The Forest Temple
</p>
          </div>
          <div className="card">
             <img
            src="https://avatars.mds.yandex.net/i?id=bcb6c6183e0006bf68803d14a8e94857e654ac1a-12716743-images-thumbs&n=13"
            alt="Westland Survival"
            className="game-image"
          />
        <p className="game-title">Westland Survival</p>
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
            <img src="https://avatars.mds.yandex.net/i?id=1f35f3dcfc5a585f53691e788dbc138d6ce77bcf-16477815-images-thumbs&n=13" alt="Tom & Jerry" />
            <p>Tom & Jerry</p>
          </div>
          <div className="card">
            <img src="https://avatars.mds.yandex.net/i?id=576b2052cd777f93d0de19ba1bfae48a34c50a16-5661780-images-thumbs&n=13" alt="Avatar" />
            <p>Avatar</p>
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
            <img src="https://avatars.mds.yandex.net/i?id=4777e56ba5413c67933cb1b5eff668db3cb46cb2-5236153-images-thumbs&n=13" alt="Faded" />
            <p>Alan Walker - Faded</p>
          </div>
          <div className="card">
            <img src="https://avatars.mds.yandex.net/i?id=177a038f01ea8e0eb91c95934b23dc2a6a637e23-9065868-images-thumbs&n=13" alt="Dynamite" />
            <p>BTS - Dynamite</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
