import express, { Response, Request } from "express";
import Blog from "../entities/Blog";

const router = express.Router();

router.post("/blog", async (req: Request, res: Response) => {
  try {
    const titleBlog = req.body.title_blog;
    const contentBlog = req.body.content_blog;
    const createdAt = req.body.created_at;
    const updateAt = req.body.updated_at;
    const blog = Blog.create({
      title_blog: titleBlog,
      content_blog: contentBlog,
      created_at: createdAt,
      updated_at: updateAt,
    });
    await blog.save();
    return res.json(blog);
  } catch (error) {
    throw new Error(error);
  }
});

export { router as createBlog };
