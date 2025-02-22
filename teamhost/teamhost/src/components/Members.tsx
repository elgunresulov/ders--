import React, { useState } from 'react';
import { FaSearch, FaMicrophone, FaEllipsisH } from 'react-icons/fa';
import membersData from '../data/members.json';
import { CiLinkedin,CiInstagram,CiYoutube } from "react-icons/ci";


const Favourites: React.FC = () => {
  const [sortBy, setSortBy] = useState('');
  const [category, setCategory] = useState('');
  const [platform, setPlatform] = useState('');

  return (
    <div className="favourites-page">
      {/* Başlık ve Arama Bölümü */}
      <div className="favourites-header">
        <div className="header-left">
          <h1>Community</h1>
        </div>
       
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
                {membersData.filters.sortOptions.map(option => (
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
                {membersData.filters.categories.map(option => (
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
                {membersData.filters.platforms.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="items-count">{membersData.gameCards.length} öğe</div>
          </div>

          {/* Oyun Kartları */}
          <div className="games-grid ">
            {membersData.gameCards.map(game => (
              <div key={game.id} className="game-card">
                <img src={game.image}  />
                <div className="game-info">
                  <div className="game-type"><CiLinkedin className='CiLinkedin ' />
                  {game.type}</div>
                  <div className="game-type"><CiInstagram className='CiLinkedin' />
                  {game.type}</div>
                  <div className="game-type"><CiYoutube className='CiLinkedin ' />
                  {game.type}</div>
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