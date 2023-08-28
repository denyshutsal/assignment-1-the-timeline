const Post = require("../model/postModel");

const getPost = (reg, res) => {
  Post.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { posts: result });
    })
    .catch((err) => console.log(err));
};

const createPost = (req, res) => {
  let newPost = new Post(req.body);

  newPost
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getPost,
  createPost,
};
