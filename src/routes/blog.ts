import express, { Router } from "express";
import {
  createPost,
  getPosts,
  createComment,
  getComments,
} from "../controllers/blog";

export const blogRouter: Router = express.Router();

blogRouter.post("/post", createPost);
blogRouter.get("/posts", getPosts);
blogRouter.post("/comment", createComment);
blogRouter.get("/comments", getComments);
