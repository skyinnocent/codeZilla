import mongoose from "mongoose";

async function connect() {
  const db = await mongoose
    .connect("mongodb://127.0.0.1:27017/mern-login", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connected to DB"))
    .catch(console.error);

  return db;
}

export default connect;
