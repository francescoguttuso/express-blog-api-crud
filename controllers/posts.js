import posts from "../data/posts.js";

export const index = (req, res) => {
    const { tag } = req.query;
    if (!tag) {
        return res.status(200).json(posts);
    }
    const filteredPosts = posts.filter((post) =>
        post.tags.includes(tag)
    );
    return res.status(200).json(filteredPosts);
};

export const show = (req, res) => {
    const id = Number(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        return res.status(404).json({
            message: "Post non trovato",
        });
    }
    return res.status(200).json(post);
};