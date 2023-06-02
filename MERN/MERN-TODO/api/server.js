const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const port = 3001;

mongoose
  .connect("mongodb://127.0.0.1:27017/mern-todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to DB"))
  .catch(console.error);

// importing the todo DB
const Todo = require("./models/Todo");
app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});
app.post("/todo/new", async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  });
  await todo.save();
  res.json(todo);
});

app.delete("/todo/delete/:id", async (req, res) => {
  const result = await Todo.findByIdAndDelete(req.params.id);
  res.json(result);
});

app.get("/todo/complete/:id", async (req, res) => {
  const result = await Todo.findById(req.params.id);
  result.complete = !result.complete;
  result.save();
  res.json(result);
});

app.listen(port, () => console.log("app started on port: ", port));
