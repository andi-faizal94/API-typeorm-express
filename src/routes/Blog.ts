import express from "express";
import {
  createBlog,
  getBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../controller/blog";

const router = express.Router();

// create
router.post("/blog", createBlog);

// getAll
router.get("/blog", getBlog);

// getbyid
router.get("/blog/:id", getBlogById);

// update
router.put("/blog/:id", updateBlog);

// delete
router.delete("/blog/:id", deleteBlog);

export {
  router as createBlog,
  router as getBlog,
  router as getBlogId,
  router as updateBlog,
  router as deleteBlog,
};
