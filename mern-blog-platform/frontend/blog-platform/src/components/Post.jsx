import { useState } from "react";
import axios from "axios";
import "../App.css";

const API_URL = "http://localhost:3000";

function Post() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("Title and content cannot be empty.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);
    formData.append("authorName", "Admin");
    formData.append("authorRole", "Editor");
    formData.append("authorImageUrl", "https://example.com/default-profile.jpg");

    try {
      await axios.post(`${API_URL}/blogs/create`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      window.location.href = "/";
    } catch (err) {
      console.error("Error:", err);
    }
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
        <input
          type="file"
          accept="image/*"
          className="input-field"
          onChange={handleImageUpload}
          required
        />
        <button type="submit" className="submit-btn">
          Publish Post
        </button>
      </form>
    </div>
  );
}

export default Post;

