import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import './App.css';
import Profile from './pages/Profile';
import Favourites from './pages/Favourites';
import Friends from './components/Friends';
import Wallet from './components/Wallet/Wallet';
import Report from './components/Report';
import Community from './pages/Community';
import Members from './components/Members';
import Store from './components/Store';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/report" element={<Report />} />
            <Route path="/community" element={<Community />} /> 
            <Route path="/members" element={<Members />} />
            <Route path="/store" element={<Store />} />

            {/* Diğer sayfalar için route'lar buraya eklenecek */}
          </Routes>

        </Layout>

      </div>
    </Router>
  );
}

export default App;
