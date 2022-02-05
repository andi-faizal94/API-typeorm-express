import express, { Response, Request } from "express";
import Blog from "../entities/Blog";

const router = express.Router();

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

export { router as createBlog };
