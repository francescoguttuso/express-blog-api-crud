import express from "express";
import posts from "./data/posts.js";
import postsRouter from "./routers/posts.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/posts", postsRouter);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  res.json(posts);
});

app.use((req, res) => {
  res.statusCode(404).json({
    error: "Indirizzo non raggiungibile",
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    error: "Errore interno del Server",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
