import express from "express";
import Blog from "../entities/Blog";

const router = express.Router();

router.post("/blog", async (req, res) => {
  const { id, titleBlog, contentBlog } = req.body;

  const blog = Blog.create({
    id: id,
    title_blog: titleBlog,
    content_blog: contentBlog,
  });
  // if (id != null) {
  //   console.log(id);
  // }
  // if (titleBlog != null) {
  //   console.log(JSON.parse(titleBlog));
  // }
  // if (contentBlog != null) {
  //   console.log(JSON.parse(titleBlog));
  // }
  await blog.save();
  return res.json(blog);
});

export { router as getBlog };
