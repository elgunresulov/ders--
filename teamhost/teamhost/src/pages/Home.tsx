import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import homeData from '../data/home.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Event {
  id: number;
  image: string;
  stage: string;
  team1: {
    name: string;
    logo: string;
  };
  team2: {
    name: string;
    logo: string;
  };
}

interface News {
  id: number;
  image: string;
  title: string;
  category: string;
}

interface Community {
  id: number;
  image: string;
  type: string;
  title: string;
  stats: {
    posts: number;
    members: number;
  };
  lastActive: string;
  buttonType: string;
}

const Home: React.FC = () => {
  const events: Event[] = homeData.events;
  const news: News[] = homeData.news;
  const communities: Community[] = homeData.communities;

  return (
    <div className="home-page">
      {/* Öne Çıkan Etkinlikler */}
      <section className="featured-events">
        <h2>Recommended Events</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="events-grid"
        >
          {events.map((event: Event) => (
            <SwiperSlide key={event.id}>
              <div className="event-card">
                <div className="event-image">
                  <img src={event.image} alt="Event" />
                </div>
                <div className="event-info">
                  <div className="event-teams">
                    <div className="team">
                      <img src={event.team1.logo} alt={event.team1.name} />
                      <span>{event.team1.name}</span>
                    </div>
                    <div className="vs">VS</div>
                    <div className="team">
                      <img src={event.team2.logo} alt={event.team2.name} />
                      <span>{event.team2.name}</span>
                    </div>
                  </div>
                  <div className="event-stage">{event.stage}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Haberler */}
      <section className="news-section">
        <h2>News Archive</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView="auto"
          navigation
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20
            }
          }}
          className="news-grid"
        >
          {news.map((item: News) => (
            <SwiperSlide key={item.id}>
              <div className="news-card">
                <div className="news-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="news-info">
                  <span className="news-category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <button className="view-more-button">View More</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Topluluklar */}
      <section className="communities-section">
        <h2>Our Communities</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView="auto"
          navigation
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20
            }
          }}
          className="communities-grid"
        >
          {communities.map((community: Community) => (
            <SwiperSlide key={community.id}>
              <div className="community-card">
                <div className="community-image">
                  <img src={community.image} alt={community.title} />
                </div>
                <div className="community-info">
                  <span className="community-type">{community.type}</span>
                  <h3>{community.title}</h3>
                  <div className="community-stats">
                    <div className="stat">
                      <span className="number">{community.stats.posts}</span>
                      <span className="label">Posts</span>
                    </div>
                    <div className="stat">
                      <span className="number">{community.stats.members}</span>
                      <span className="label">Members</span>
                    </div>
                  </div>
                  <div className="last-active">{community.lastActive}</div>
                  <button 
                    className={
                      community.buttonType === 'join' ? 'join-button' : 
                      community.buttonType === 'request' ? 'request-button' : 
                      'manage-button'
                    }
                  >
                    {community.buttonType === 'join' ? 'JOIN GROUP' : 
                     community.buttonType === 'request' ? 'REQUEST MEMBERSHIP' : 
                     'MANAGE GROUP'}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="our-store">
        <h2>Our Store</h2>
        <div className="container">
          <div className="row">
            {homeData.store.map((item, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="card h-100">
                  <img src={item.image} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">${item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="popular-groups">
        <h2>Popular Groups</h2>
        <div className="container">
          <div className="row">
            {homeData.popularGroups.map((group, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="card h-100">
                  <img src={group.image} className="card-img-top" alt={group.title} />
                  <div className="card-body">
                    <h5 className="card-title">{group.title}</h5>
                    <p className="card-text">{group.description}</p>
                    <p className="card-text">{group.members} Members</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 