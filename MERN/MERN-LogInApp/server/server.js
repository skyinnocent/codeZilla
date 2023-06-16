import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/conn.js";
import router from "./router/route.js";
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

const port = 8000;

/** HTTP get request */
app.get("/", (req, res) => {
  res.status(201).json("Home Get Request");
});

/**Routes */
app.use("/api", router);

/**start server after verifying */
connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log("server connected to port: " + `http://localhost:${port}`);
      });
    } catch {
      console.log("cannot connect to the server");
    }
  })
  .catch((error) => console.log("invalid connection"));
