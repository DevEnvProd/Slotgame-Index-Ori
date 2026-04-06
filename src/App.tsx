import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Games from './pages/Games';
import GameDetail from './pages/GameDetail';
import VolatilityGuide from './pages/VolatilityGuide';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="games" element={<Games />} />
          <Route path="games/:slug" element={<GameDetail />} />
          <Route path="volatility-guide" element={<VolatilityGuide />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}
