import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

import React from 'react';
import Home from './pages/Home';
import Research from './pages/Research';
import Robots from './pages/Robots';
import Publications from './pages/Publications';
import News from './pages/News';
import OurTeam from './pages/OurTeam';
import JoinUs from './pages/JoinUs';
import Teaching from './pages/Teaching';

function App() {
  return (
    <div className="App">
      <Router basename='/ral_website'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/robots" element={<Robots />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/news" element={<News />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/teaching" element={<Teaching />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;