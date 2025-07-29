import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Contact from './Contact'
import './App.css'

function Home() {
  return (
    <div className="container">
      <div className="hero">
        <div className="grid-bg"></div>
        <div className="hero-content">
          <h1 className="logo" data-text="LarATECH LABS">LarATECH LABS</h1>
          <p className="tagline">Building the future, one innovation at a time</p>
          <Link to="/contact" className="cta">Contact Us</Link>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2025 Laratechlabs. All rights reserved.</p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
