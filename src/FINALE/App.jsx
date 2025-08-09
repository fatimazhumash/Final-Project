// import { Routes, Route, useLocation } from "react-router-dom";

// import Navbar from "./Navbar";
// import Home from "./Home";
// import Search from "./Search";
// import Messenger from "./Messenger";
// import Profile from "./Profile";
// import Games from "./Games";
// import Videos from "./Videos";
// import Musics from "./Musics";
// import Register from "./Register";
// import Login from "./Login";
// import LoginFaceId from "./LoginFaceId";
// import "./App.css"; 
// import RegisterFaceId from "./RegisterFaceId";
// import NotFound from "./NotFound";

// function App() {
//   const location = useLocation();
//   const hideNavbar = location.pathname === "/" || location.pathname === "/login" || location.pathname==='/loginfaceid' || location.pathname=='/registerfaceid';

//   return (
//     <div className="main-container">
//       {!hideNavbar && <Navbar />}
//       <h1>AllOne</h1>
//       <div className="content-container">
//         <Routes>
//           <Route path="/" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/search" element={<Search />} />
//           <Route path="/messenger" element={<Messenger />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/games" element={<Games />} />
//           <Route path="/videos" element={<Videos />} />
//           <Route path="/musics" element={<Musics />} />
//           <Route path="/registerfaceid" element={<RegisterFaceId/>}/>
//           <Route path="/loginfaceid" element={<LoginFaceId/>}/>
//           <Route Route="/." element={<NotFound/>}/>
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;




// import { Routes, Route, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Home from "./Home";
// import Search from "./Search";
// import Messenger from "./Messenger";
// import Profile from "./Profile";
// import Games from "./Games";
//  import Videos from "./Videos";
// import Musics from "./Musics";
// import Register from "./Register";
// import Login from "./Login";
// import LoginFaceId from "./LoginFaceId";
// import RegisterFaceId from "./RegisterFaceId";
// import NotFound from "./NotFound";
// import "./App.css";
// import GameVideoNav from "./GameVideoNav";

// function App() {
//   const location = useLocation();
//   const hideNavbar = location.pathname === "/" || location.pathname === "/login" || location.pathname === "/loginfaceid" || location.pathname === "/registerfaceid";

//   const [darkMode, setDarkMode] = useState(true);

//   // Body class жаңарту
//   useEffect(() => {
//     document.body.className = darkMode ? "dark-mode" : "light-mode";
//   }, [darkMode]);

//   const toggleTheme = () => setDarkMode(!darkMode);

//   return (
//     <div className="main-container">
//       <div>   {!hideNavbar && <GameVideoNav />}


//     <Search/>
//     <Home/>
      
//       {!hideNavbar && (
//         <div className="theme-toggle">
//           <label className="switch">
//             <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
//             <span className="slider"></span>
//           </label>
//           <span>{darkMode ? "🌙 Dark" : "☀️ Light"}</span>
//         </div>
//       )}
//  </div>
     
//       <div className="content-container">
//         <Routes>
//           <Route path="/" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/search" element={<Search />} />
//           <Route path="/messenger" element={<Messenger />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/games" element={<Games />} />
//          <Route path="/videos" element={<Videos />} />
//           <Route path="/musics" element={<Musics />} />
//           <Route path="/registerfaceid" element={<RegisterFaceId />} />
//           <Route path="/loginfaceid" element={<LoginFaceId />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </div>

//       {!hideNavbar && (
//         <footer>
//           <h1>AllOne</h1>
//           <button>Follow</button>
//           <h4><img src="" alt="help" /> Help</h4>
//           <h4><img src="" alt="about" /> About</h4>
//           <h4><img src="" alt="We.re" /> We.re</h4>
//           <p>© 2025 AmjiltCuperSchool <br />
//             Kazakhstan, Almaty <br />
//             <a href="https://2gis.kz/almaty/geo/9430047375018127" target="_blank" rel="noreferrer">Maulenova 92</a>
//           </p>
//         </footer>
//       )}
//     </div>
//   );
// }

// export default App;



// App.jsx
// import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Home from "./Home";
// import Search from "./Search";
// import Messenger from "./Messenger";
// import Profile from "./Profile";
// import Games from "./Games";
// import Videos from "./Videos";
// import Musics from "./Musics";
// import Register from "./Register";
// import Login from "./Login";
// import LoginFaceId from "./LoginFaceId";
// import RegisterFaceId from "./RegisterFaceId";
// import NotFound from "./NotFound";
// import GameVideoNav from "./GameVideoNav";
// import "./App.css";

// function App() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const hideNavbar = ["/", "/login", "/loginfaceid", "/registerfaceid"].includes(location.pathname);

//   const [darkMode, setDarkMode] = useState(true);
//   const [followed, setFollowed] = useState(false);

//   useEffect(() => {
//     document.body.className = darkMode ? "dark-mode" : "light-mode";
//   }, [darkMode]);

//   const toggleTheme = () => setDarkMode(!darkMode);
//   const toggleFollow = () => {
//     setFollowed((prev) => {
//       const newFollow = !prev;
//       alert(newFollow ? "✅ Успешно подписались" : "❌ Успешно отписались");
//       return newFollow;
//     });
//   };

//   return (
//     <div className="main-container">
//       {!hideNavbar && (
//         <>
//           <GameVideoNav />
//           <div className="theme-toggle">
//             <label className="switch">
//               <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
//               <span className="slider"></span>
//             </label>
//             <span>{darkMode ? "🌙 Dark" : "☀️ Light"}</span>
//           </div>
//         </>
//       )}

//       <div className="content-container">
//         <Routes>
//           <Route path="/" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/search" element={<Search />} />
//           <Route path="/messenger" element={<Messenger />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/games" element={<Games />} />
//           <Route path="/videos" element={<Videos />} />
//           <Route path="/musics" element={<Musics />} />
//           <Route path="/registerfaceid" element={<RegisterFaceId />} />
//           <Route path="/loginfaceid" element={<LoginFaceId />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </div>

//       {!hideNavbar && (
//         <footer>
//           <h1>AllOne</h1>
//           <button
//             style={{ backgroundColor: followed ? "white" : "#ff3b3b", color: followed ? "#ff3b3b" : "white" }}
//             onClick={toggleFollow}
//           >
//             {followed ? "Unfollow" : "Follow"}
//           </button>
//           <h4><img src="" alt="help" /> Help</h4>
//           <h4><img src="" alt="about" /> About</h4>
//           <h4><img src="" alt="We.re" /><a href="/messenger">We.re</a></h4>
//           <p>
//             © 2025 AmjiltCuperSchool <br />
//             Kazakhstan, Almaty <br />
//             <a href="https://2gis.kz/almaty/geo/9430047375018127" target="_blank" rel="noreferrer">Maulenova 92</a>
//           </p>
//         </footer>
//       )}
//     </div>
//   );
// }

// export default App;














import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./Home";
import Search from "./Search";
import Messenger from "./Messenger";
import Profile from "./Profile";
import Games from "./Games";
import Videos from "./Videos";
import Musics from "./Musics";
import Register from "./Register";
import Login from "./Login";
import LoginFaceId from "./LoginFaceId";
import RegisterFaceId from "./RegisterFaceId";
import NotFound from "./NotFound";
import GameVideoNav from "./GameVideoNav";

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
          <Route path="/videos" element={<Videos />} />
          <Route path="/musics" element={<Musics />} />
          <Route path="/registerfaceid" element={<RegisterFaceId />} />
          <Route path="/loginfaceid" element={<LoginFaceId />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

<div className="footer" style={{borderWidth:"400px",borderColor:"white"}} >
 {!hideNavbar && (
        <footer className="app-footer">
          <div className="Ao-fot"><h1>AllOne</h1>
          <button
            className="follow-btn"
            style={{
              backgroundColor: followed ? "white" : "#ff3b3b",
              color: followed ? "#ff3b3b" : "white",
            }}
            onClick={toggleFollow}
          >
            {followed ? "Unfollow" : "Follow"}
          </button> </div>
          <div className="link-fot"> <h4><img src="https://avatars.mds.yandex.net/i?id=2b393ffd998e40dd2f511ae24ad4ce10bb472c82-6432328-images-thumbs&n=13" alt="help" style={{width:"50px",borderRadius:"20px"}}/> <a href="/help">Help</a></h4>
          <h4><img src="https://avatars.mds.yandex.net/i?id=25bec0d30cd797d3e7240d4fde72333f12280c3c-8275014-images-thumbs&n=13" alt="about"  style={{width:"50px",borderRadius:"20px"}}/><a href="/about"> About</a></h4>
          <h4><img src="https://avatars.mds.yandex.net/i?id=b7bc9f002b6675f2649bb4f2fb32ae15837c75c2-4555798-images-thumbs&n=13" alt="We.re"  style={{width:"50px",borderRadius:"20px"}}/><a href="/messenger">We.re</a></h4> </div>
         <div>  <p>
            © 2025 <p style={{color:"purple"}}>AmjiltCuperSchool</p> 
            Kazakhstan, Almaty <br />
            <a href="https://2gis.kz/almaty/geo/9430047375018127" target="_blank" rel="noreferrer">Maulenova 92</a>
          </p></div>
         
        </footer>
      )}
</div >
    
    </div>
  );
}

export default App;
