import React from 'react';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
  return (
    <div className="profile-page">
      <div className="profile-banner">
        <div className="profile-banner-image">
          <img src="/banner.jpg" alt="Profile Banner" />
        </div>
        <div className="profile-avatar">
          <img src="/avatar.jpg" alt="User Avatar" />
        </div>
      </div>

      <div className="profile-info">
        <h1>John Doe</h1>
        <span className="profile-username">@johndoe</span>
        <span className="profile-time">Üye olalı 2 yıl oldu</span>
      </div>

      <nav className="profile-nav">
        <Link to="#" className="profile-nav-item active">Genel Bakış</Link>
        <Link to="#" className="profile-nav-item">Bilgiler</Link>
        <Link to="#" className="profile-nav-item">Aktivite</Link>
        <Link to="#" className="profile-nav-item">Arkadaşlar</Link>
        <Link to="#" className="profile-nav-item">Gruplar</Link>
      </nav>

      <div className="profile-content">
        <main className="profile-main">
          <div className="profile-posts">
            <article className="profile-post">
              <div className="post-author">
                <img src="/avatar.jpg" alt="John Doe" />
                <div className="post-info">
                  <h3>John Doe</h3>
                  <span>2 saat önce</span>
                </div>
              </div>
              <div className="post-content">
                <p>Bugün harika bir CS:GO maçı oynadım! Takımımla birlikte muhteşem bir geri dönüş yaptık. 💪🎮</p>
              </div>
            </article>

            <article className="profile-post">
              <div className="post-author">
                <img src="/avatar.jpg" alt="John Doe" />
                <div className="post-info">
                  <h3>John Doe</h3>
                  <span>1 gün önce</span>
                </div>
              </div>
              <div className="post-content">
                <p>Yeni bir turnuvaya katılmak için hazırlanıyoruz. Takım arkadaşlarımla birlikte çok çalışıyoruz! 🏆</p>
              </div>
            </article>
          </div>
        </main>

        <aside className="profile-sidebar">
          <div className="profile-stats">
            <div className="stat-box">
              <span className="stat-number">1.2K</span>
              <span className="stat-label">Takipçi</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">450</span>
              <span className="stat-label">Gönderi</span>
            </div>
          </div>

          <div className="profile-actions">
            <button className="view-profile-btn">Profili Görüntüle</button>
          </div>

          <div className="friends-section">
            <h3>Arkadaşlar</h3>
            <div className="friends-list">
              <div className="friend-item">
                <img src="/friend1.jpg" alt="Friend 1" />
                <div className="friend-info">
                  <h4>Jane Smith</h4>
                  <span>3 ay önce katıldı</span>
                </div>
              </div>
              <div className="friend-item">
                <img src="/friend2.jpg" alt="Friend 2" />
                <div className="friend-info">
                  <h4>Mike Johnson</h4>
                  <span>6 ay önce katıldı</span>
                </div>
              </div>
              <div className="friend-item">
                <img src="/friend3.jpg" alt="Friend 3" />
                <div className="friend-info">
                  <h4>Sarah Wilson</h4>
                  <span>1 yıl önce katıldı</span>
                </div>
              </div>
            </div>
            <button className="view-all-btn">Tüm Arkadaşları Gör</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Profile; 