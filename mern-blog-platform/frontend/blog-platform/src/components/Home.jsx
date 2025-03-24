import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../App.css"

const API_URL = "http://localhost:3000";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/blogs`)
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className="blog-container">
      <h1 className="blog-title">From the Blog</h1>
      <p className="blog-subtitle">Learn how to grow your business with our expert advice.</p>
      <div className="blog-grid">
        {posts.length > 0 ? (
          posts.map((post) => (
            <article key={post.id} className="blog-post">
              <img src={`${API_URL}/images/${post.image}`} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <h3 className="post-title">
                  <a href={post.href}>{post.title}</a>
                </h3>
                <p className="post-description">{post.description}</p>
              </div>
              <div className="blog-footer">
                <img src={`${API_URL}/authors/${post.author.imageUrl}`} alt={post.author.name} className="author-image" />
                <div className="author-info">
                  <p className="author-name">{post.author.name}</p>
                  <p className="author-role">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))
        ) : (
          <p className="no-posts">No blog posts available.</p>
        )}
      </div>
  </div>
  );
}


export default Home
