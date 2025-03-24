const mongoose=require('mongoose');
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});
module.exports = mongoose.model("User", userSchema);

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Blog", blogSchema);
