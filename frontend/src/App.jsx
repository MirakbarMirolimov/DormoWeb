import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import DataProtection from './components/DataProtection'
import TestComponent from './components/TestComponent'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<DataProtection />} />
          <Route path="/test" element={<TestComponent />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
