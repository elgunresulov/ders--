import React, { useState } from 'react';
import { FaSearch, FaMicrophone,  } from 'react-icons/fa';
import favouritesData from '../data/store.json';
import { IoMdStar } from "react-icons/io";
import { FiDollarSign } from "react-icons/fi";


const Favourites: React.FC = () => {
  const [sortBy, setSortBy] = useState('');
  const [category, setCategory] = useState('');
  const [platform, setPlatform] = useState('');

  return (
    <div className="favourites-page">
      <div className="favourites-header">
       
       
      </div>

      <div className="favourites-content">
        <div className="content-left">
          {/* Arama ve Filtreleme */}
          <div className="search-container">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Ara" />
              <FaMicrophone className="mic-icon" />
            </div>
          </div>

          {/* Filtreleme Seçenekleri */}
          <div className="filter-options">
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
                      <span className="number x">{game.stats.posts} <IoMdStar /></span>
                      
                    </div>
                    <div className="stat deyer">
                      <span className="number x">{game.stats.members} <FiDollarSign /></span>
                      
                    </div>
                  </div>
                  
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