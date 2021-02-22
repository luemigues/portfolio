import './App.css';
import Topbar from '../header/topbar/topbar.js';
import AboutMe from '../aboutme/aboutme.js';
import Develop from '../development/develpment.js';

function App() {
  return (
    <div className="App">
      <Topbar />
      <AboutMe id='AboutMe'/>
      <Develop id='Development'/>
    </div>
  );
}

export default App;
