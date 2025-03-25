const mongoose=require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Stores image filename (to be accessed via `/images/`)
    required: true,
  },
  author: {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String, // Stores author's profile image filename (`/authors/`)
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
