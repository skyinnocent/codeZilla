const express = require("express");
const blogrouter = express.Router();
const blogController = require("./../controllers/blogController");
// get blogs
blogrouter.get("/", blogController.getAllBlogs);
blogrouter.post("/addnew", blogController.addNewBlog);
blogrouter.put("/update/:id", blogController.updateBlog);
blogrouter.get("/getoneblog/:id", blogController.getOneBlog);
blogrouter.delete("/delete/:id", blogController.deleteBlog);
blogrouter.get("/user/:id", blogController.getByUserId);

module.exports = blogrouter;
