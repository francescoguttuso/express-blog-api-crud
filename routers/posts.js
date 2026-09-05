import express from "express";
import posts from "../data/posts.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(posts);
});

router.get("/:id", (req, res) => {
  const post = posts.find((post) => post.id === Number(req.params.id));
  res.json(post);
});

router.post("/", (req, res) => {
  res.send("Creazione di un nuovo post");
});

router.put("/:id", (req, res) => {
  res.send(`Modifica del post ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`Cancellazione del post ${req.params.id}`);
});

export default router;
