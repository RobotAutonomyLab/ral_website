import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

import React from 'react';
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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/robots" element={<Robots />} />
          <Route path="/publications" element={<Publications />} />
          <Route path='/publications/:id' element={<IndividualPublication />} />
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