import React from 'react'
import Home from "./components/Home"
import Post from "./components/Post"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/create" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App
