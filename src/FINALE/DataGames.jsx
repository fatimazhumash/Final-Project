import React from "react";

export function DataGames() {
  const games = [
    { id: 1, title: "Car Race", url: "https://example.com/car-race" },
    { id: 2, title: "Space Shooter", url: "https://example.com/space-shooter" },
    { id: 3, title: "Puzzle Mania", url: "https://example.com/puzzle-mania" }
  ];

  return (
    <div>
      <h2>Games List</h2>
      <ul>
        {games.map(game => (
          <li key={game.id}>
            <a href={game.url} target="_blank" rel="noopener noreferrer">
              {game.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
