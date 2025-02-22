import React from 'react';
import { Link } from 'react-router-dom';
import profileData from '../data/profile.json';

const Profile: React.FC = () => {
  return (
    <div className="profile-page">
      {/* Profil Banner ve Resmi */}
      <div className="profile-banner">
        <div className="profile-banner-image">
          <img src={profileData.user.banner} alt="Profile Banner" />
        </div>
        <div className="profile-avatar">
          <img src={profileData.user.avatar} alt={profileData.user.name} />
        </div>
        <div className="profile-info">
          <h1 >{profileData.user.name}</h1>
        </div>
      </div>

      {/* Profil Navigasyon */}
      <div className="profile-nav">
        {profileData.navigation.map(item => (
          <Link 
            key={item.id}
            to={item.link} 
            className={`profile-nav-item ${item.active ? 'active' : ''}`}
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* Ana İçerik */}
      <div className="profile-content">
        <div className="profile-main">
          {/* Profil Gönderileri */}
          <div className="profile-posts">
            {profileData.posts.map(post => (
              <div key={post.id} className="profile-post">
                <div className="post-author">
                  <img src={post.author.avatar} alt={post.author.name} />
                  <div className="post-info">
                    <h3 >{post.author.name}</h3>
                    <span>{post.timeAgo}</span>
                  </div>
                </div>
                <div className="post-content">
                  <p>{post.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="profile-sidebar">
          <div className="profile-stats">
            <div className="stat-box">
              <span className="stat-number">{profileData.user.stats.followers}</span>
              <span className="stat-label">Takipçi</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">{profileData.user.stats.posts}</span>
              <span className="stat-label">Gönderi</span>
            </div>
          </div>

          <div className="profile-actions">
            <button className="view-profile-btn">Profili Görüntüle</button>
          </div>

          <div className="friends-section">
            <h3>Arkadaşlar</h3>
            <div className="friends-list">
              {profileData.friends.map(friend => (
                <div key={friend.id} className="friend-item">
                  <img src={friend.avatar} alt={friend.name} />
                  <div className="friend-info">
                    <h4>{friend.name}</h4>
                    <span>{friend.joinDate}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="view-all-btn">Tüm Arkadaşları Gör</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Profile; 