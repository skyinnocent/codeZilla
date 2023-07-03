const User = require("./../models/UserModel");
const bcrypt = require("bcryptjs");

const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({
      message: "No users found",
    });
  }
  return res.status(200).json({
    users,
  });
};

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User already exists! Login Instead" });
  }
  const hashedPassword = bcrypt.hashSync(password);
  const user = new User({
    name,
    email,
    password: hashedPassword,
    blogs: [],
  });
  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }
  return res.status(201).json({
    user,
  });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "email is not valid" });
  }
  const isPassword = bcrypt.compareSync(password, existingUser.password);
  if (!isPassword) {
    return res.status(400).json({ message: "incorrect password" });
  }
  return res.status(200).json({
    message: "Login Successfull",
  });
};

module.exports = { getAllUsers, signup, login };
