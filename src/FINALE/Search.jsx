import { useState } from "react";
import "./Search.css";

function Search() {
  const [query, setQuery] = useState(""); // іздеу мәтіні

  const items = [
    "Minecraft",
    "GTA V",
    "Roblox",
    "Fortnite",
    "PUBG",
    "League of Legends",
    "CS:GO",
  ];

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  ); // іздеу фильтрі

  return (
    <div>
      <div className="Search">
        <input
          className="input-type"
          type="text"
          placeholder="Search"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button className="btn-type">🔍</button>
      </div>

      <div className="results">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <p key={index}>{item}</p>)
        ) : (
          <p>Нәтиже табылмады</p>
        )}
      </div>
    </div>
  );
}

export default Search;
