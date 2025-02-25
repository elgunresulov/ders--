import { useState } from 'react';
import { FiSearch, FiMoreHorizontal } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';

interface FriendRequest {
  id: string;
  name: string;
  game: string;
  avatar: string;
}

interface SimpleFriend {
  id: string;
  name: string;
  avatar: string;
}

export default function Friends() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('Active');

  const simpleFriends: SimpleFriend[] = [
    { id: '1', name: 'Fred Emil', avatar: 'https://pro-theme.com/html/teamhost/assets/img/user-1.png' },
    { id: '2', name: 'Leo Maxwell', avatar: 'https://pro-theme.com/html/teamhost/assets/img/user-2.png' },
    { id: '3', name: 'Olivia Mark', avatar: 'https://pro-theme.com/html/teamhost/assets/img/user-3.png' },
  ];

  const friendRequests: FriendRequest[] = [
    { id: '1', name: 'Lester Barry', game: 'Grand Theft Auto V', avatar: 'https://pro-theme.com/html/teamhost/assets/img/user-list-1.png' },
    { id: '2', name: 'Emma Stone', game: 'PUBG: BATTLEGROUNDS', avatar: 'https://pro-theme.com/html/teamhost/assets/img/user-list-2.png' },
    { id: '3', name: 'Guzman Williams', game: 'Rocket League', avatar: 'https://pro-theme.com/html/teamhost/assets/img/user-list-3.png' },
    { id: '4', name: 'Olivia Mark', game: 'Days Gone', avatar: 'https://pro-theme.com/html/teamhost/assets/img/user-list-4.png' },
    { id: '5', name: 'Alfred Anton', game: 'Rocket League', avatar: 'https://pro-theme.com/html/teamhost/assets/img/user-list-5.png' },
    { id: '6', name: 'Bernard Tony', game: 'New World', avatar: 'https://pro-theme.com/html/teamhost/assets/img/user-list-6.png' },
    { id: '7', name: 'Ronnie Win', game: 'Stronghold Kingdoms', avatar: 'https://pro-theme.com/html/teamhost/assets/img/user-list-7.png' },
    { id: '8', name: 'Harry Gabriel', game: 'Omno', avatar: 'https://pro-theme.com/html/teamhost/assets/img/user-list-8.png' },
    { id: '9', name: 'Sophia John', game: 'Eldest Souls', avatar: 'https://pro-theme.com/html/teamhost/assets/img/user-list-9.png' },
    { id: '10', name: 'Isabella Ruke', game: 'The Ascent', avatar: 'https://pro-theme.com/html/teamhost/assets/img/user-list-10.png' },
    { id: '11', name: 'Lily Lukas', game: 'HighFleet', avatar: 'https://pro-theme.com/html/teamhost/assets/img/user-list-11.png' },
    { id: '12', name: 'Adrian Dima', game: 'Smithy Wars', avatar: 'https://pro-theme.com/html/teamhost/assets/img/user-list-12.png' },
  ];

  const filteredFriends = friendRequests.filter(friend =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    friend.game.toLowerCase ().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container-fluid p-4 bg-[#1A1C20]">
      <div className="container-xl mx-auto">
        <div className="row">
          {/* Sol teref -  */}
          <div className="col-lg-8 mb-4 mb-lg-0">
            <div className="row mb-4">
              <div className="col">
                <h1 className="display-6 text-[#1A1C20] fw-bold">Friend Requests</h1>
              </div>
            </div>

            <div className="row mb-4 align-items-center">
              <div className="col position-relative">
                <div className="position-absolute top-50 start-0 translate-middle-y ms-3">
                  <FiSearch className="h-5 w-5 text-[#FF4E50]" />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="form-control bg-[#292B2F] border-0 text-[#1A1C20] ps-5 py-3"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="col-auto d-flex gap-3">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="form-select bg-[#292B2F] border-0 text-[#1A1C20] py-3"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23FF4E50'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  }}
                >
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="All">All</option>
                </select>
                
                <button className="btn bg-[#292B2F] text-[#FF4E50] p-3 d-flex align-items-center justify-content-center">
                  <FiMoreHorizontal className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="row g-4">
              {filteredFriends.map((friend) => (
                <div key={friend.id} className="col-12 col-xl-6">
                  <div className="card bg-[#292B2F] border-0 p-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-3">
                        <div className="position-relative">
                          <img
                            src={friend.avatar}
                            alt={friend.name}
                            className="rounded-circle"
                            style={{ width: '48px', height: '48px', objectFit: 'cover' }}
                          />
                          <div className="position-absolute inset-0 rounded-circle border border-2 border-[#FF4E50]"></div>
                        </div>
                        <div>
                          <h3 className="mb-0 text-[#1A1C20] fw-medium">{friend.name}</h3>
                          <p className="mb-0 text-secondary small">
                            Playing <span className="text-[#FF4E50]">{friend.game}</span>
                          </p>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center gap-2">
                        <button className="btn btn-link text-success p-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </button>
                        <button className="btn btn-link text-[#FF4E50] p-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                        <button className="btn btn-link text-secondary p-2">
                          <FiMoreHorizontal className="w-5 h-5" />
                        </button>
                        
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ teref - Basit arkadaş listesi */}
          <div className="col-lg-4">
            <div className="bg-[#292B2F] rounded-3 p-4">
              <h2 className="h5 text-[#1A1C20] mb-4">Friend Requests</h2>
              <div className="d-flex flex-column gap-4">
                {simpleFriends.map((friend) => (
                  <div key={friend.id} className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={friend.avatar}
                        alt={friend.name}
                        className="rounded-circle"
                        style={{ width: '48px', height: '48px', objectFit: 'cover' }}
                      />
                      <span className="text-[#1A1C20]">{friend.name}</span>
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn btn-success rounded-circle p-2" style={{ width: '40px', height: '40px', padding: '0' }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </button>
                      <button className="btn btn-danger rounded-circle p-2" style={{ width: '40px', height: '40px', padding: '0' }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 







