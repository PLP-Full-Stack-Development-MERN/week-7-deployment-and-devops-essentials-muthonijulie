import { useState } from  "react";
import axios from "axios";
import "../App.css"

const API_URL = "http://localhost:3000";
function Post() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("Title and content cannot be empty.");
      return;
    }
    axios
      .post(`${API_URL}/blogs`, { title, content, author: "Admin" })
      .then(() => (window.location.href = "/"))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Create a New Blog Post</h2>
      <form onSubmit={handleSubmit} className="blog-form">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="textarea-field"
          placeholder="Enter Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="submit-btn">
          Publish Post
        </button>
      </form>
    </div>
  );
}


 
export default Post
