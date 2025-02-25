import React from 'react';
import membersData from '../data/members.json';
import { CiLinkedin,CiInstagram,CiYoutube } from "react-icons/ci";


const Favourites: React.FC = () => {


  return (
    <div className="favourites-page">
      <div className="favourites-header">
        
       
      </div>

      <div className="favourites-content">
        <div className="content-left">
          <div className='hisse'>
            <img className='yuxari' src="https://pro-theme.com/html/teamhost/assets/img/heading8.jpg" alt="" />
            <h1 className='directory'>Members Directory</h1>
            <h3 className='variant'>Search members from all around the world!</h3>
          </div>

          

          {/* Oyun Kartları */}
          <div className="games-grid my-5">
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