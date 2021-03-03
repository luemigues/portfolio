import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Topbar from '../header/topbar/topbar.js';
import AboutMe from '../sections/aboutme/aboutme.js';
import Develop from '../sections/development/develpment.js';
import Contact from '../sections/contact/contact';

function App() {
  return (
    <div className="App">
      <Topbar />
      <main>
        <Routes>
          <Route path="/" element={<AboutMe/>} exact/>
          <Route path="/development" element={<Develop/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
