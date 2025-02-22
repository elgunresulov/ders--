import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaSearch, 
  FaBell, 
  FaEnvelope, 
  FaHome,
  FaUser,
  FaHeart,
  FaComments,
  FaUserFriends,
  FaWallet,
  FaNewspaper,
  FaUsers,
  FaUserCircle,
  FaStore,
  FaShoppingCart,
  FaVideo,
  FaFlag,
  FaQuestionCircle,
  FaBars
} from 'react-icons/fa';
import layoutData from '../data/layout.json';

interface LayoutProps {
  children: React.ReactNode;
}

interface SidebarItem {
  id: number;
  icon: string;
  text: string;
  link: string;
  active?: boolean;
  badge?: string;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="layout-container">
      <header className="header">
        <div className="header-left">
          <div className="mobile-menu-button" onClick={toggleMobileMenu}>
            <FaBars />
          </div>
          <Link to="/" className="logo-link">
            <img src={layoutData.header.logo.image} alt="TeamHost" className="logo-image" />
            <span className="logo-text">{layoutData.header.logo.text}</span>
          </Link>
          <div className="search-container">
            <input type="text" placeholder="Ara" className="search-input" />
            <FaSearch className="search-icon" />
            <div className="voice-search-icon" />
          </div>
        </div>
        
        <div className="header-right">
          <div className="language-selector">
            <span>English</span>
            <div className="language-options">
              <div className="language-option">Germany</div>
              <div className="language-option">Italy</div>
            </div>
          </div>
          <div className="notification-icon">
            <FaBell path='/Friends'/>
          </div>
          <div className="message-icon">
            <FaEnvelope path='/Chats'/>
          </div>
          <div className="profile-container ">
            <img  
              src={layoutData.header.profile.image} 
              alt={layoutData.header.profile.name} 
              className="profile-image" 
            />
            <span>Merhaba, {layoutData.header.profile.name}</span>
          </div>
        </div>
      </header>

      <div className="main-container">
        <aside className={`sidebar ${isMobileMenuOpen ? 'active' : ''}`}>
          {layoutData.sidebar.sections.map(section => (
            <div key={section.id} className="sidebar-section">
              {section.title && <h3 className="sidebar-title">{section.title}</h3>}
              {section.items.map((item: SidebarItem) => (
                <Link 
                  key={item.id} 
                  to={item.link} 
                  className={`sidebar-link ${item.active ? 'active' : ''}`}
                >
                  {getIcon(item.icon)}
                  <span>{item.text}</span>
                  {item.badge && <span className="badge">{item.badge}</span>}
                </Link>
              ))}
            </div>
          ))}
        </aside>

        <div className={`overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu} />

        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

const getIcon = (iconName: string) => {
  const icons: { [key: string]: React.ReactElement } = {
    FaHome: <FaHome />,
    FaUser: <FaUser />,
    FaHeart: <FaHeart />,
    FaComments: <FaComments />,
    FaUserFriends: <FaUserFriends />,
    FaWallet: <FaWallet />,
    FaNewspaper: <FaNewspaper />,
    FaUsers: <FaUsers />,
    FaUserCircle: <FaUserCircle />,
    FaStore: <FaStore />,
    FaShoppingCart: <FaShoppingCart />,
    FaVideo: <FaVideo />,
    FaFlag: <FaFlag />,
    FaQuestionCircle: <FaQuestionCircle />
  };

  return icons[iconName] || null;
};

export default Layout;