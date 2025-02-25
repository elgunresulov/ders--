import React, { useState } from 'react';
import { FaSearch, FaMicrophone,  } from 'react-icons/fa';
import favouritesData from '../data/favourites.json';

const Favourites: React.FC = () => {
  const [sortBy, setSortBy] = useState('');
  const [category, setCategory] = useState('');
  const [platform, setPlatform] = useState('');

  return (
    <div className="favourites-page">
      <div className="favourites-header">
        <div className="header-left">
          <h1>Community</h1>
        </div>
       
      </div>

      <div className="favourites-content">
        <div className="content-left">
          {/*  Filtreleme */}
          <div className="search-container">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Ara" />
              <FaMicrophone className="mic-icon" />
            </div>
          </div>

          {/* Filtreleme secimi */}
          <div className=
          "filter-options">
            <div className="filter-group">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="">Sıralama</option>
                {favouritesData.filters.sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
                className="filter-select"
              >
                <option value="">Kategori</option>
                {favouritesData.filters.categories.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <select 
                value={platform} 
                onChange={(e) => setPlatform(e.target.value)}
                className="filter-select"
              >
                <option value="">Platform</option>
                {favouritesData.filters.platforms.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="items-count">{favouritesData.gameCards.length} öğe</div>
          </div>

          {/* Oyun Kartları */}
          <div className="games-grid">
            {favouritesData.gameCards.map(game => (
              <div key={game.id} className="game-card">
                <img src={game.image} alt={game.title} />
                <div className="game-info">
                  <div className="game-type">{game.type}</div>
                  <h3>{game.title}</h3>
                  <div className="game-stats">
                    <div className="stat">
                      <span className="number">{game.stats.posts}</span>
                      <span className="label">Gönderi</span>
                    </div>
                    <div className="stat">
                      <span className="number">{game.stats.members}</span>
                      <span className="label">Üye</span>
                    </div>
                  </div>
                  <button className={game.status === 'join' ? 'join-button' : 'manage-button'}>
                    {game.status === 'join' ? 'GRUBA KATIL' : 'GRUBU YÖNET'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Favourites;