import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import './App.css';
import Profile from './pages/Profile';
import Favourites from './pages/Favourites';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/favourites" element={<Favourites />} />

            {/* Diğer sayfalar için route'lar buraya eklenecek */}
          </Routes>

        </Layout>

      </div>
    </Router>
  );
}

export default App;
