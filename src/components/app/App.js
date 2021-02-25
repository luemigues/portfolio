import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Topbar from '../header/topbar/topbar.js';
import AboutMe from '../aboutme/aboutme.js';
import Develop from '../development/develpment.js';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Routes>
        <Route path="/" element={<AboutMe/>} exact/>
        <Route path="/development" element={<Develop/>} />
      </Routes>
    </div>
  );
}

export default App;
