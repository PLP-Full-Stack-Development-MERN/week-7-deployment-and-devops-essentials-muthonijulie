const express = require("express");
const fs = require("fs");
const multer = require("multer");
const Blog = require("../models/Blog"); // Adjust the path based on your project structure

const router = express.Router();
const uploadPath = "image/";

// Ensure the upload directory exists
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Configure Multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });


router.post("/create", upload.single("image"), async (req, res) => {
  try {
    console.log("Request Headers:", req.headers);
    console.log("Request Body:", req.body);
    console.log("Uploaded File:", req.file); 

    const { title, content, authorName, authorRole, authorImageUrl } = req.body;

    if (!title || !content || !req.file) {
      return res.status(400).json({ message: "Title, content, and image are required" });
    }

    const newPost = new Blog({
      title,
      content,
      image: req.file.filename, // Save the uploaded image filename
      author: {
        name: authorName,
        role: authorRole,
        imageUrl: authorImageUrl,
      },
    });

    await newPost.save();
    res.status(201).json({ message: "Post created successfully", post: newPost });

  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Route to Fetch All Posts
router.get("/", async (req, res) => {
  try {
    const posts = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});



router.get("/:id", async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, content, authorName, authorRole, authorImageUrl } = req.body;
    const updateData = { title, content, "author.name": authorName, "author.role": authorRole };

    if (req.file) {
      updateData.image = req.file.filename; // Update image if provided
    }

    const updatedPost = await Blog.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!updatedPost) return res.status(404).json({ message: "Post not found" });

    res.status(200).json({ message: "Post updated successfully", post: updatedPost });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedPost) return res.status(404).json({ message: "Post not found" });

    res.status(200).json({ message: "Post deleted successfully" });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});


module.exports=router;