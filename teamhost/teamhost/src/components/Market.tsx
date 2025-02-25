import React, { useState } from 'react';
import { FaSearch, FaChevronDown } from 'react-icons/fa';

const Market: React.FC = () => {
  const [selectedSort, setSelectedSort] = useState('Popular');
  const [selectedGame, setSelectedGame] = useState('All');

  const marketItems = [
    {
      id: 1,
      name: "Halloween Chest",
      game: "Hero Siege",
      price: "0.04",
      quantity: "25,341",
      image: "https://pro-theme.com/html/teamhost/assets/img/game-1.jpg"
    },
    {
      id: 2,
      name: "High Quality Crate",
      game: "Rust",
      price: "5.55",
      quantity: "1,271",
      image: "https://pro-theme.com/html/teamhost/assets/img/game-2.jpg"
    },
    {
      id: 3,
      name: "Trifecta - SCAR-L",
      game: "BATTLEGROUNDS",
      price: "0.95",
      quantity: "2,878",
      image: "https://pro-theme.com/html/teamhost/assets/img/market-item-1.jpg"
    },
    {
      id: 4,
      name: "Operation Broken Fang Case",
      game: "Counter-Strike: Global Offensive",
      price: "0.55",
      quantity: "401,244",
      image: "https://pro-theme.com/html/teamhost/assets/img/game-3.jpg"
    }
  ];

  return (
    <div className="market-container">
      <div className="market-header">
        <h1>Market</h1>
        
        <div className="market-filters">
          <div className="filter-group">
            <label>Sort By:</label>
            <div className="select-wrapper">
              <select 
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
              >
                <option value="Popular">Popular</option>
                <option value="Popular1">Popular Items 1</option>
                <option value="Popular2">Popular Items 2</option>
                <option value="Popular3">Popular Items 3</option>
              </select>
              <FaChevronDown className="select-icon" />
            </div>
          </div>

          <div className="filter-group">
            <label>Game:</label>
            <div className="select-wrapper">
              <select
                value={selectedGame}
                onChange={(e) => setSelectedGame(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Game1">Game 1</option>
                <option value="Game2">Game 2</option>
                <option value="Game3">Game 3</option>
              </select>
              <FaChevronDown className="select-icon" />
            </div>
          </div>

          <div className="items-count">15 items</div>
        </div>
      </div>

      <div className="market-grid">
        {marketItems.map(item => (
          <div key={item.id} className="market-item">
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item-info">
              <h3>{item.name}</h3>
              <p className="game-name">{item.game}</p>
              <div className="item-details">
                <div className="price">
                  <span>Starting at:</span>
                  <strong>${item.price}</strong>
                </div>
                <div className="quantity">
                  <span>Quantity:</span>
                  <strong>{item.quantity}</strong>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Market; 