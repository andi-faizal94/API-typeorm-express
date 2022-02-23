import express from "express";
import {
  createBlog,
  getBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../controllers/blog";
import { uploadFile } from "../controllers/file";
const router = express.Router();

router.post("/blog", uploadFile);

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
  router as uploadFile,
  router as createBlog,
  router as getBlog,
  router as getBlogId,
  router as updateBlog,
  router as deleteBlog,
};
