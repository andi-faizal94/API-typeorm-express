import express, { Response, Request } from "express";
import Blog from "../entities/Blog";

const router = express.Router();
// create
router.post("/blog", async (req: Request, res: Response) => {
  try {
    const { title_blog: titleBlog, content_blog: contentBlog } = req.body;
    if (!titleBlog) {
      throw new Error("Error titleBlog");
    }
    if (!contentBlog) {
      throw new Error("Error contentBlog");
    }

    const blog = Blog.create({
      title_blog: titleBlog,
      content_blog: contentBlog,
    });
    await blog.save();
    return res.json(blog);
  } catch (error) {
    throw new Error(error);
  }
});
// getAll
router.get("/blog", async (req, res) => {
  try {
    let getBlog = await Blog.find();
    return res.json(getBlog);
  } catch (error) {
    throw new Error(error);
  }
});
// getbyid
router.get("/blog/:id", async (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      throw new Error("it not id");
    }
    let getBlog = await Blog.findOne(Number(id));
    return res.json(getBlog);
  } catch (error) {
    throw new Error(error);
  }
});

// update
router.put("/blog/:id", async (req, res) => {
  try {
    const { title_blog: titleBlog, content_blog: contentBlog } = req.body;
    const id = req.params.id;
    const blog = await Blog.update(Number(id), {
      title_blog: titleBlog,
      content_blog: contentBlog,
    });
    const updateBlog = await Blog.find({
      id: Number(id),
    });
    res.json(updateBlog);
  } catch (error) {
    throw new Error(error);
  }
});

// delete
router.delete("/blog/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Blog.delete(Number(id));
    return res.json(deleted);
  } catch (error) {
    throw new Error(error);
  }
});

export {
  router as createBlog,
  router as getBlog,
  router as getBlogId,
  router as updateBlog,
  router as deleteBlog,
};
