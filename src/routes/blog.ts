import express from "express";
import {
  createBlog,
  getBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../controllers/blog";
const router = express.Router();

// create
router.post("/api/v1/blog", createBlog);

// getAll
router.get("/api/v1/blog", getBlog);

// getbyid
router.get("/api/v1/blog/:id", getBlogById);

// update
router.put("/api/v1/blog/:id", updateBlog);

// delete
router.delete("/api/v1/blog/:id", deleteBlog);

export default router;
