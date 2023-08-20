import { Router } from "express";
import { createPost, deletePost, getPosts } from "../controllers/posts.js";
import { validatorCreatePost, validatorGetPost } from "../validators/post.js";


const router = Router();

router.get("/posts", getPosts);
router.post("/posts", validatorCreatePost, createPost);
router.delete("/posts/:id", validatorGetPost, deletePost);

export default router;
