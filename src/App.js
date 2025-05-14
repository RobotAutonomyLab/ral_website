import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import React, { useEffect } from 'react';
import Home from './pages/Home';
import Research from './pages/Research';
import Robots from './pages/Robots';
import Publications from './pages/Publications';
import IndividualPublication from './pages/IndividualPublication';
import News from './pages/News';
import OurTeam from './pages/OurTeam';
import IndividualProfile from './pages/IndividualProfile';
import JoinUs from './pages/JoinUs';
import Teaching from './pages/Teaching';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/robots" element={<Robots />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/publications/:id" element={<IndividualPublication />} />
          <Route path="/news" element={<News />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/team/:id" element={<IndividualProfile />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/teaching" element={<Teaching />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;