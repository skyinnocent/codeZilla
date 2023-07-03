const { default: mongoose } = require("mongoose");
const User = require("../models/UserModel");
const Blog = require("./../models/BlogModel");

const getAllBlogs = async (req, res, next) => {
  let blogs;
  try {
    blogs = await Blog.find();
  } catch (err) {
    console.log(err);
  }
  if (!blogs) {
    return res.status(404).json({
      message: "blogs not fouund",
    });
  }
  return res.status(200).json({ blogs });
};

const addNewBlog = async (req, res, next) => {
  const { title, description, user, image } = req.body;
  let existingUser;

  //checking if user exists
  try {
    existingUser = await User.findById(user);
  } catch (err) {
    console.log(err);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "Unable to find User" });
  }
  // if user exist the we create and save the blog
  const blog = new Blog({
    title,
    description,
    user,
    image,
  });
  //saving and pushing the newely made blog
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await blog.save({ session });
    existingUser.blogs.push(blog);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
  res.status(200).json({ blog });
};

const updateBlog = async (req, res, next) => {
  const id = req.params.id;
  let blog;
  const { title, description } = req.body;
  try {
    blog = await Blog.findByIdAndUpdate(id, { title, description });
  } catch (err) {
    console.log(err);
  }
  if (!blog) {
    return res.status(500).json({ message: "could not find blog" });
  }
  return res.status(200).json({ blog });
};

const getOneBlog = async (req, res, next) => {
  let blog;
  const id = req.params.id;
  try {
    blog = await Blog.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!blog) {
    res.status(404).json({ message: "blog not found" });
  }
  res.status(200).json({ blog });
};

const deleteBlog = async (req, res, next) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndRemove(id).populate("user");
    await blog.user.blogs.pull(blog);
    await blog.user.save();
    console.log(blog);
  } catch (err) {
    console.log(err);
  }

  if (!blog) {
    return res.status(404).json({ message: "blog not found" });
  }
  return res.status(200).json({ message: "blog is deleted" });
};

const getByUserId = async (req, res, next) => {
  const userId = req.params.id;
  let userBlogs;
  try {
    userBlogs = await User.findById(userId).populate("blogs");
  } catch (err) {
    console.log(err);
  }
  if (!userBlogs) {
    return res.status(404).json({ message: "No Blogs Found" });
  }
  return res.status(200).json({ blogs: userBlogs });
};

module.exports = {
  getByUserId,
  getAllBlogs,
  addNewBlog,
  updateBlog,
  getOneBlog,
  deleteBlog,
};
