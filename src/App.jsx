import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './pages/Home'
import { Photos } from './pages/Photos'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  )
}

export default App
