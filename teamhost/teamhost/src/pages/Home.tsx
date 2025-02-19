import React from 'react';
import homeData from '../data/home.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';


interface Event {
  id: number;
  image: string;
  title: string;
  date: string;
  time: string;
  teams: {
    team1: {
      name: string;
      logo: string;
    };
    team2: {
      name: string;
      logo: string;
    };
  };
}

interface News {
  id: number;
  image: string;
  title: string;
  date: string;
  category: string;
}

interface Community {
  id: number;
  image: string;
  name: string;
  stats: {
    posts: number;
    members: number;
  };
  status: 'join' | 'manage';
}

interface HomeData {
  events: Event[];
  news: News[];
  communities: Community[];
}

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Öne Çıkan Etkinlikler */}
      <section className="featured-events">
        <h2>Öne Çıkan Etkinlikler</h2>
        <div className="events-grid">
          {homeData.events.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-image">
                
              </div>
              <div className="event-info">
                <h3>{event.team1?.name} vs {event.team2?.name}</h3>
                <div className="event-teams">
                  <div className="team">
                    <img src={event.team1?.logo} alt={event.team1?.name} />
                    <span>{event.team1?.name}</span>
                  </div>
                  <span className="vs">VS</span>
                  <div className="team">
                    <img src={event.team2?.logo} alt={event.team2?.name} />
                    <span>{event.team2?.name}</span>
                  </div>
                </div>
                <div className="event-stage">{event.stage}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Haberler */}
      <section className="news-section">
        <h2>Son Haberler</h2>
        <div className="news-grid">
          {homeData.news.map(item => (
            <div key={item.id} className="news-card">
              <div className="news-image">
                <img src={item.image} alt={item.title} />
                <span className="news-category">{item.category}</span>
              </div>
              <div className="news-info">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Topluluklar */}
      <section className="communities-section">
        <h2>Popüler Topluluklar</h2>
        <div className="communities-grid">
          {homeData.communities.map(community => (
            <div key={community.id} className="community-card">
              <div className="community-image">
                <img src={community.image} alt={community.title} />
              </div>
              <div className="community-info">
                <span className="community-type">{community.type}</span>
                <h3>{community.title}</h3>
                <div className="community-stats">
                  <div className="stat">
                    <span className="number">{community.stats.posts}</span>
                    <span className="label">Gönderi</span>
                  </div>
                  <div className="stat">
                    <span className="number">{community.stats.members}</span>
                    <span className="label">Üye</span>
                  </div>
                </div>
                <div className="last-active">{community.lastActive}</div>
                <button className={community.buttonType === 'join' ? 'join-button' : community.buttonType === 'request' ? 'request-button' : 'manage-button'}>
                  {community.buttonType === 'join' ? 'GRUBA KATIL' : 
                   community.buttonType === 'request' ? 'ÜYELİK İSTE' : 'GRUBU YÖNET'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home; 