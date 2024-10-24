import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Routes, Route, Link }  from 'react-router-dom'
import Contact from './pages/Contact';
import About from './pages/About';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Welcome message='Wena wena mi gente' name='Jose Perez'></Welcome>*/}
        <Router>
          <div>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/contact'>Contactos</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/profile'>Profile</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path='/profile/:name' element={<Profile />} /> {/*RUTA DINAMICA*/}
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
