import React from 'react';
import { BrowserRouter as Router , Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Aboutus from './Aboutus';
import Contactus from './Contactus';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ol>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/AboutUs">About Us</Link></li>
            <li><Link to="/ContactUs">Contact Us</Link></li>
          </ol>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<Aboutus />} />
          <Route path="/ContactUs" element={<Contactus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;