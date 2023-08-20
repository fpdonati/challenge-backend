import { Post } from "../models/Post.js";
import { matchedData } from "express-validator";

const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    req = matchedData(req);
    const { name, description } = req;
    const newPost = await Post.create({ name, description });
    res.status(201).json(newPost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const postToDelete = await Post.findByPk(id);
    if (postToDelete) {
      postToDelete.destroy();
      const deletedPost = postToDelete;
      res.status(200).json(deletedPost);
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { getPosts, createPost, deletePost };
