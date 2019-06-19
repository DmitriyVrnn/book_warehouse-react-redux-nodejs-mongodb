const express = require('express');
const postRoute = express.Router();

const {addPost, getAllPost, deletePost} = require("../controllers/postController");

postRoute.post('/add', addPost);

postRoute.get('/', getAllPost);

postRoute.get('/delete/:id', deletePost);

module.exports = postRoute;
