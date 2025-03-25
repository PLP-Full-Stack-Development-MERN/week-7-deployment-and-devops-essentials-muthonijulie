import React from 'react'
import Home from "./components/Home"
import Post from "./components/Post"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Sentry from "@sentry/react";



function App() {
  Sentry.init({ dsn: "your_sentry_dsn" });
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
