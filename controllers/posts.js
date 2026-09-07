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
