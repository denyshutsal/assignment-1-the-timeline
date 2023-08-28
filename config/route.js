const express = require("express");
const route = express.Router();
const postController = require("../controller/postController");

route.get("/", postController.getPost);
route.post("/create-post", postController.createPost);

module.exports = route;
