import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
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
import "./App.css"; 
import RegisterFaceId from "./RegisterFaceId";

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/" || location.pathname === "/login" || location.pathname==='/loginfaceid' || location.pathname=='/registerfaceid';

  return (
    <div className="main-container">
      {!hideNavbar && <Navbar />}
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
          <Route path="/registerfaceid" element={<RegisterFaceId/>}/>
          <Route path="/loginfaceid" element={<LoginFaceId/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
