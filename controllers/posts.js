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

export const store = (req, res) => {
    const { title, content, image, tags } = req.body;
    if (!title || !content) {
        return res.status(400).json({
            message: "Title e content sono obbligatori",
        });
    }
    const newPost = {
        id: posts.length
            ? Math.max(...posts.map((post) => post.id)) + 1
            : 1,
        title,
        content,
        image,
        tags: tags ?? [],
    };
    posts.push(newPost);
    return res
        .status(201)
        .location(`/posts/${newPost.id}`)
        .json(newPost);
};

export const update = (req, res) => {
    const id = Number(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        return res.status(404).json({
            message: "Post non trovato",
        });
    }
    const { title, content, image, tags } = req.body;
    if (!title || !content) {
        return res.status(400).json({
            message: "Title e content sono obbligatori",
        });
    }
    post.title = title;
    post.content = content;
    post.image = image;
    post.tags = tags ?? [];
    return res.status(200).json(post);
};

export const destroy = (req, res) => {
    const id = Number(req.params.id);
    const index = posts.findIndex((post) => post.id === id);
    if (index === -1) {
        return res.status(404).json({
            message: "Post non trovato",
        });
    }
    posts.splice(index, 1);
    return res.status(204).send();
};

