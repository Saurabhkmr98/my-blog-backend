import { Request, Response } from "express";
import Post, { IPost } from "../models/Post";
import Comment, { IComment } from "../models/Comment";

export async function createPost(req: Request, res: Response) {
  try {
    const { title, content, author } = req.body;

    const newPost: IPost = new Post({
      title,
      content,
      author,
    });

    await newPost.save();

    res
      .status(201)
      .json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getPosts(req: Request, res: Response) {
  try {
    const posts: IPost[] = await Post.find();

    res.status(200).json(posts);
  } catch (error) {
    console.error("Error getting posts:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createComment(req: Request, res: Response) {
  try {
    const { postId, content, author } = req.body;

    const newComment: IComment = new Comment({
      postId,
      content,
      author,
    });

    await newComment.save();

    res
      .status(201)
      .json({ message: "Comment created successfully", comment: newComment });
  } catch (error) {
    console.error("Error creating comment:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getComments(req: Request, res: Response) {
  try {
    const { postId } = req.query;

    if (!postId) {
      return res.status(400).json({ message: "Post ID is required" });
    }

    const comments: IComment[] = await Comment.find({ postId });

    res.status(200).json(comments);
  } catch (error) {
    console.error("Error getting comments:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
