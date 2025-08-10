


import ProtectedRoute from "./ProtectedRoute";

function App() {
  const location = useLocation();
  const hideNavbar = ["/", "/login", "/loginfaceid", "/registerfaceid"].includes(location.pathname);

  const [darkMode, setDarkMode] = useState(true);
  const [followed, setFollowed] = useState(false);
  const [isAuth, setIsAuth] = useState(false); // 🔹 логиннен кейін true қыласың

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
        <GameVideoNav darkMode={darkMode} toggleTheme={toggleTheme} />
      )}

      <div className="content-container">
        <Routes>
          {/* Ашық беттер */}
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/messenger" element={<Messenger />} />

          {/* Қорғалған беттер */}
          <Route
            path="/search"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Search />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/games"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Games />
              </ProtectedRoute>
            }
          />
          <Route
            path="/games/:id"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <GamePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/videos"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Videos />
              </ProtectedRoute>
            }
          />
          <Route
            path="/musics"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Musics />
              </ProtectedRoute>
            }
          />

          {/* Face ID беттері */}
          <Route path="/registerfaceid" element={<RegisterFaceId />} />
          <Route path="/loginfaceid" element={<LoginFaceId />} />

          <Route path="/google" element={<Google />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Footer */}
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
              <div className="footer-copy">
                <p>© 2025 <span>AmjiltCuperSchool</span></p>
                <p>Kazakhstan, Almaty</p>
                <a
                  href="https://2gis.kz/almaty/geo/9430047375018127"
                  target="_blank"
                  rel="noreferrer"
                >
                  Maulenova 92
                </a>
              </div>
            </div>

            <div className="footer-right">
              <div className="footer-links">
                <div className="imgl">
                  <h4>
                    <img
                      src="https://avatars.mds.yandex.net/i?id=2b393ffd998e40dd2f511ae24ad4ce10bb472c82-6432328-images-thumbs&n=13"
                      alt="help"
                    />
                    <a href="/help">Help</a>
                  </h4>
                </div>
                <div className="imgl">
                  <h4>
                    <img
                      src="https://avatars.mds.yandex.net/i?id=25bec0d30cd797d3e7240d4fde72333f12280c3c-8275014-images-thumbs&n=13"
                      alt="about"
                    />
                    <a href="/about">About</a>
                  </h4>
                </div>
                <div className="imgl">
                  <h4>
                    <img
                      src="https://avatars.mds.yandex.net/i?id=b7bc9f002b6675f2649bb4f2fb32ae15837c75c2-4555798-images-thumbs&n=13"
                      alt="We.re"
                    />
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
}export default App







