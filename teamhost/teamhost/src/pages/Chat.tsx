import React, { useState } from 'react';


interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: string;
}

interface ChatUser {
  id: number;
  name: string;
  status: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  isOnline: boolean;
}

const Chat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [activeChat, setActiveChat] = useState('Sofia Dior');

  const users: ChatUser[] = [
    {
      id: 1,
      name: "Lester Barry",
      status: "Let's play now!",
      avatar: "https://pro-theme.com/html/teamhost/assets/img/user-list-1.png",
      lastMessage: "Let's play now!",
      time: "4m",
      unreadCount: 1,
      isOnline: true
    },
    {
      id: 2,
      name: "Emma Stone",
      status: "Are you here?",
      avatar: "https://pro-theme.com/html/teamhost/assets/img/user-list-2.png",
      lastMessage: "Are you here?",
      time: "10m",
      unreadCount: 2,
      isOnline: true
    },
    {
      id: 1,
      name: "Lester Barry",
      status: "Let's play now!",
      avatar: "https://pro-theme.com/html/teamhost/assets/img/user-list-1.png",
      lastMessage: "Let's play now!",
      time: "4m",
      unreadCount: 1,
      isOnline: true
    },
    {
      id: 2,
      name: "Emma Stone",
      status: "Are you here?",
      avatar: "https://pro-theme.com/html/teamhost/assets/img/user-list-2.png",
      lastMessage: "Are you here?",
      time: "10m",
      unreadCount: 2,
      isOnline: true
    },
    {
      id: 1,
      name: "Lester Barry",
      status: "Let's play now!",
      avatar: "https://pro-theme.com/html/teamhost/assets/img/user-list-1.png",
      lastMessage: "Let's play now!",
      time: "4m",
      unreadCount: 1,
      isOnline: true
    },
    {
      id: 2,
      name: "Emma Stone",
      status: "Are you here?",
      avatar: "https://pro-theme.com/html/teamhost/assets/img/user-list-2.png",
      lastMessage: "Are you here?",
      time: "10m",
      unreadCount: 2,
      isOnline: true
    },
    // Diğer kullanıcılar buraya eklenebilir
  ];

  const messages: Message[] = [
    {
      id: 1,
      text: "Which game you play now?",
      sender: "Sofia Dior",
      timestamp: "10:00"
    },
    {
      id: 2,
      text: "I play Stronghold Kingdoms",
      sender: "user",
      timestamp: "10:01"
    },
    {
      id: 3,
      text: "What type of game is this? is it a strategy game?",
      sender: "Sofia Dior",
      timestamp: "10:02"
    },
    {
      id: 4,
      text: "Yes",
      sender: "user",
      timestamp: "10:03"
    }
  ];

  return (
    <div className="chat-container">
      <div className="chat-sidebar">
        <div className="user-profile">
          <img src="https://pro-theme.com/html/teamhost/assets/img/profile.png" alt="Your avatar" className="avatar" />
          <div className="profile-actions">
            <button className="icon-button">✏️</button>
            <button className="icon-button">⋮</button>
          </div>
        </div>

        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input"
          />
        </div>

        <div className="chat-list">
          {users.map(user => (
            <div 
              key={user.id} 
              className={`chat-item ${activeChat === user.name ? 'active' : ''}`}
              onClick={() => setActiveChat(user.name)}
            >
              <div className="chat-item-avatar">
                <img src={user.avatar} alt={user.name} />
                {user.isOnline && <span className="online-indicator"></span>}
              </div>
              <div className="chat-item-content">
                <div className="chat-item-header">
                  <h4>{user.name}</h4>
                  <span className="time">{user.time}</span>
                </div>
                <p className="last-message">{user.lastMessage}</p>
              </div>
              {user.unreadCount && (
                <span className="unread-count">{user.unreadCount}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="chat-main">
        <div className="chat-header">
          <div className="chat-header-user">
            <img src="https://pro-theme.com/html/teamhost/assets/img/user-list-4.png" alt="Sofia Dior" className="avatar" />
            <h3>Sofia Dior</h3>
          </div>
          <div className="chat-header-actions">
            <button className="icon-button">📞</button>
            <button className="icon-button">ℹ️</button>
          </div>
        </div>

        <div className="messages-container">
          {messages.map(msg => (
            <div 
              key={msg.id} 
              className={`message ${msg.sender === 'user' ? 'sent' : 'received'}`}
            >
              <div className="message-content">
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="chat-input-container">
          <button className="icon-button">😊</button>
          <button className="icon-button">🖼️</button>
          <input
            type="text"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="icon-button">🎤</button>
        </div>
      </div>
    </div>
  );
};

export default Chat; 
