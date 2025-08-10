import React, { useState } from 'react';
import './Games.css';

const allGames = [
   // 1 — .io Games
  { id: 1, title: 'Krunker.io', url: 'https://krunker.io/', category: 'io' },
  { id: 2, title: 'Slither.io', url: 'https://slither.io/', category: 'io' },
  { id: 3, title: 'Diep.io', url: 'https://diep.io/', category: 'io' },
  { id: 4, title: 'Agar.io', url: 'https://agar.io/', category: 'io' },
  { id: 5, title: 'Paper.io 2', url: 'https://paper-io.com/', category: 'io' },
  { id: 6, title: 'Zombs.io', url: 'https://zombs.io/', category: 'io' },
  { id: 7, title: 'Hole.io', url: 'https://hole-io.com/', category: 'io' },
  { id: 8, title: 'Wormax.io', url: 'https://wormax.io/', category: 'io' },
  { id: 9, title: 'Bonk.io', url: 'https://bonk.io/', category: 'io' },
  { id: 10, title: 'Warbot.io', url: 'https://warbot.io/', category: 'io' },

  // 2 — Action
  { id: 11, title: 'Bullet Force', url: 'https://www.crazygames.com/game/bullet-force-multiplayer', category: 'action' },
  { id: 12, title: 'Venge.io', url: 'https://venge.io/', category: 'action' },
  { id: 13, title: 'Forward Assault', url: 'https://www.crazygames.com/game/forward-assault', category: 'action' },
  { id: 14, title: 'Stickman Fighter', url: 'https://www.crazygames.com/game/stickman-fighter-epic-battle', category: 'action' },
  { id: 15, title: 'Combat Reloaded', url: 'https://www.crazygames.com/game/combat-reloaded', category: 'action' },
  { id: 16, title: 'Masked Forces', url: 'https://www.crazygames.com/game/masked-forces', category: 'action' },
  { id: 17, title: 'Temple of Boom', url: 'https://www.crazygames.com/game/temple-of-boom', category: 'action' },
  { id: 18, title: 'Superhot', url: 'https://superhotgame.com/play-prototype', category: 'action' },
  { id: 19, title: 'Stick War', url: 'https://www.crazygames.com/game/stick-war', category: 'action' },
  { id: 20, title: 'Mini Royale: Nations', url: 'https://miniroyale.io/', category: 'action' },

  // 3 — Adventure
  { id: 21, title: 'Fireboy and Watergirl 1', url: 'https://www.crazygames.com/game/fireboy-and-watergirl-1-forest-temple', category: 'adventure' },
  { id: 22, title: 'Fireboy and Watergirl 2', url: 'https://www.crazygames.com/game/fireboy-and-watergirl-2-light-temple', category: 'adventure' },
  { id: 23, title: 'Fireboy and Watergirl 3', url: 'https://www.crazygames.com/game/fireboy-and-watergirl-3-ice-temple', category: 'adventure' },
  { id: 24, title: 'Vex 6', url: 'https://www.crazygames.com/game/vex-6', category: 'adventure' },
  { id: 25, title: 'Bob the Robber', url: 'https://www.crazygames.com/game/bob-the-robber', category: 'adventure' },
  { id: 26, title: 'Red Ball 4', url: 'https://www.crazygames.com/game/red-ball-4', category: 'adventure' },
  { id: 27, title: 'Adam and Eve', url: 'https://www.crazygames.com/game/adam-and-eve', category: 'adventure' },
  { id: 28, title: 'Fancy Pants Adventure', url: 'https://fancypantsadventures.com/', category: 'adventure' },
  { id: 29, title: 'Papa Louie 2', url: 'https://www.crazygames.com/game/papa-louie-2', category: 'adventure' },
  { id: 30, title: 'Jungle Run', url: 'https://www.crazygames.com/game/jungle-run', category: 'adventure' },

  // 4 — Arcade
  { id: 31, title: 'Slope', url: 'https://www.crazygames.com/game/slope', category: 'arcade' },
  { id: 32, title: 'Subway Surfers', url: 'https://subwaysurfersgame.io/', category: 'arcade' },
  { id: 33, title: 'Temple Run 2', url: 'https://templerun2.io/', category: 'arcade' },
  { id: 34, title: 'Pac-Man', url: 'https://pacman.live/', category: 'arcade' },
  { id: 35, title: 'Helix Jump', url: 'https://helixjump.io/', category: 'arcade' },
  { id: 36, title: 'Stack Ball', url: 'https://stackball.io/', category: 'arcade' },
  { id: 37, title: 'Flappy Bird', url: 'https://flappybird.io/', category: 'arcade' },
  { id: 38, title: 'Jetpack Joyride', url: 'https://jetpackjoyride.io/', category: 'arcade' },
  { id: 39, title: 'Crossy Road', url: 'https://crossyroad.io/', category: 'arcade' },
  { id: 40, title: 'Doodle Jump', url: 'https://doodlejump.io/', category: 'arcade' },

  // 5 — Board
  { id: 41, title: 'Chess', url: 'https://www.chess.com/play/computer', category: 'board' },
  { id: 42, title: 'Checkers', url: 'https://cardgames.io/checkers/', category: 'board' },
  { id: 43, title: 'Backgammon', url: 'https://cardgames.io/backgammon/', category: 'board' },
  { id: 44, title: 'Ludo', url: 'https://ludo-king.com/', category: 'board' },
  { id: 45, title: 'Dominoes', url: 'https://cardgames.io/dominoes/', category: 'board' },
  { id: 46, title: 'Go Game', url: 'https://online-go.com/', category: 'board' },
  { id: 47, title: 'Mahjong', url: 'https://mahjong.com/', category: 'board' },
  { id: 48, title: 'Scrabble', url: 'https://playscrabble.com/', category: 'board' },
  { id: 49, title: 'Carrom', url: 'https://carrom-club.com/', category: 'board' },
  { id: 50, title: 'Reversi', url: 'https://cardgames.io/reversi/', category: 'board' },

  // 6 — Card
  { id: 51, title: 'Solitaire', url: 'https://www.solitr.com/', category: 'card' },
  { id: 52, title: 'Uno Online', url: 'https://www.crazygames.com/game/uno-online', category: 'card' },
  { id: 53, title: 'Spider Solitaire', url: 'https://spidersolitaire.pro/', category: 'card' },
  { id: 54, title: 'FreeCell', url: 'https://freecell.io/', category: 'card' },
  { id: 55, title: 'Hearts', url: 'https://cardgames.io/hearts/', category: 'card' },
  { id: 56, title: 'Gin Rummy', url: 'https://cardgames.io/ginrummy/', category: 'card' },
  { id: 57, title: 'Poker', url: 'https://www.pokerstars.net/', category: 'card' },
  { id: 58, title: 'Blackjack', url: 'https://cardgames.io/blackjack/', category: 'card' },
  { id: 59, title: 'Bridge', url: 'https://cardgames.io/bridge/', category: 'card' },
  { id: 60, title: 'Crazy Eights', url: 'https://cardgames.io/crazyeights/', category: 'card' },

  // 7 — Racing
  { id: 61, title: 'Drift Hunters', url: 'https://www.crazygames.com/game/drift-hunters', category: 'racing' },
  { id: 62, title: 'Madalin Stunt Cars 2', url: 'https://www.crazygames.com/game/madalin-stunt-cars-2', category: 'racing' },
  { id: 63, title: 'City Car Driving Simulator', url: 'https://www.crazygames.com/game/city-car-driving-simulator', category: 'racing' },
  { id: 64, title: 'Moto X3M', url: 'https://www.crazygames.com/game/moto-x3m', category: 'racing' },
  { id: 65, title: 'Burnout Drift', url: 'https://www.crazygames.com/game/burnout-drift', category: 'racing' },
  { id: 66, title: 'Highway Racer', url: 'https://www.crazygames.com/game/highway-racer', category: 'racing' },
  { id: 67, title: 'Formula Fever', url: 'https://www.crazygames.com/game/formula-fever', category: 'racing' },
  { id: 68, title: 'Extreme Drift', url: 'https://www.crazygames.com/game/extreme-drift', category: 'racing' },
  { id: 69, title: 'Offroader V6', url: 'https://www.crazygames.com/game/offroader-v6', category: 'racing' },
  { id: 70, title: 'Traffic Racer', url: 'https://www.crazygames.com/game/traffic-racer', category: 'racing' },

  // 8 — Sports
  { id: 71, title: 'Basketball Stars', url: 'https://www.crazygames.com/game/basketball-stars', category: 'sports' },
  { id: 72, title: 'Soccer Legends', url: 'https://www.crazygames.com/game/soccer-legends-2021', category: 'sports' },
  { id: 73, title: '8 Ball Pool', url: 'https://www.miniclip.com/games/8-ball-pool-multiplayer/en/', category: 'sports' },
  { id: 74, title: 'Tennis Masters', url: 'https://www.crazygames.com/game/tennis-masters', category: 'sports' },
  { id: 75, title: 'Hockey Legends', url: 'https://www.crazygames.com/game/hockey-legends', category: 'sports' },
  { id: 76, title: 'Mini Golf Club', url: 'https://www.crazygames.com/game/mini-golf-club', category: 'sports' },
  { id: 77, title: 'Penalty Shooters 2', url: 'https://www.crazygames.com/game/penalty-shooters-2', category: 'sports' },
  { id: 78, title: 'Golf Battle', url: 'https://www.crazygames.com/game/golf-battle', category: 'sports' },
  { id: 79, title: 'Table Tennis World Tour', url: 'https://www.crazygames.com/game/table-tennis-world-tour', category: 'sports' },
  { id: 80, title: 'Dunkers', url: 'https://www.crazygames.com/game/dunkers', category: 'sports' },

  // 9 — Strategy
  { id: 81, title: 'Clash of Armour', url: 'https://www.crazygames.com/game/clash-of-armour', category: 'strategy' },
  { id: 82, title: 'Tower Defense', url: 'https://www.crazygames.com/game/cursed-treasure', category: 'strategy' },
  { id: 83, title: 'Stick War Legacy', url: 'https://www.crazygames.com/game/stick-war', category: 'strategy' },
  { id: 84, title: 'Bloons Tower Defense', url: 'https://bloonsworld.com/', category: 'strategy' },
  { id: 85, title: 'Kingdom Rush', url: 'https://www.crazygames.com/game/kingdom-rush', category: 'strategy' },
  { id: 86, title: 'Age of War', url: 'https://www.crazygames.com/game/age-of-war', category: 'strategy' },
  { id: 87, title: 'Battle for the Galaxy', url: 'https://www.crazygames.com/game/battle-for-the-galaxy', category: 'strategy' },
  { id: 88, title: 'Goodgame Empire', url: 'https://empire.goodgamestudios.com/', category: 'strategy' },
  { id: 89, title: 'Plants vs Zombies', url: 'https://www.crazygames.com/game/plants-vs-zombies', category: 'strategy' },
  { id: 90, title: 'War Simulator', url: 'https://www.crazygames.com/game/war-simulator', category: 'strategy' },

  // 10 — Puzzle
  { id: 91, title: 'Cut the Rope', url: 'https://www.crazygames.com/game/cut-the-rope', category: 'puzzle' },
  { id: 92, title: '2048', url: 'https://play2048.co/', category: 'puzzle' },
  { id: 93, title: 'Sudoku', url: 'https://sudoku.com/', category: 'puzzle' },
  { id: 94, title: 'Candy Crush', url: 'https://candycrushsaga.com/', category: 'puzzle' },
  { id: 95, title: 'Jigsaw Puzzle', url: 'https://www.crazygames.com/game/jigsaw-puzzle', category: 'puzzle' },
  { id: 96, title: 'Logic Master', url: 'https://www.crazygames.com/game/logic-master', category: 'puzzle' },
  { id: 97, title: 'Escape Room', url: 'https://www.crazygames.com/game/escape-room', category: 'puzzle' },
  { id: 98, title: 'Tetris', url: 'https://tetris.com/play-tetris', category: 'puzzle' },
  { id: 99, title: 'Unblock Me', url: 'https://www.crazygames.com/game/unblock-me', category: 'puzzle' },
  { id: 100, title: 'Word Search', url: 'https://thewordsearch.com/', category: 'puzzle' },

];

function Games() {
const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGame, setSelectedGame] = useState(null);

  // Бірегей категориялар тізімі
  const categories = ['all', ...new Set(allGames.map(g => g.category))];

  const filteredGames =
    selectedCategory === 'all'
      ? allGames
      : allGames.filter(g => g.category === selectedCategory);

  return (
   <div className="games-container">
      {/* Сол жақтағы категориялар */}
      <div className="sidebar">
        {categories.map(cat => (
          <button
            key={cat}
            className={cat === selectedCategory ? 'active' : ''}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Оң жақтағы ойындар */}
      <div className="games-list">
        {filteredGames.map((game, index) => (
          <iframe
            key={index}
            src={game.url}
            title={game.title}
            style={{ width: '600px', height: '400px', border: 'none' }}
          />
        ))}
      </div>
    </div>
  );
}

export default Games;





