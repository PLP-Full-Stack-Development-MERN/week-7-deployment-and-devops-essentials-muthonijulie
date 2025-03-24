const express=require('express');
const Blog=require('../models/Blog');
const router=express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  await newUser.save();
  res.json({ message: "User registered" });
});
// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token, user });
});
router.post("/blogs", async (req, res) => {
  const { title, content, author } = req.body;
  const newBlog = new Blog({ title, content, author });
  await newBlog.save();
  res.json(newBlog);
});

router.get("/blogs", async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});
