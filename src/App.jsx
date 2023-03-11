
import React from "react";
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Man from './pages/Man/Man'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Man" element={<Man />}/>
      </Routes>
    </Router>
    
  )
}

export default App
