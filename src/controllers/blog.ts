import { Response, Request } from "express";
import Blog from "../entities/Blog";

export const createBlog = async (req: Request, res: Response) => {
  try {
    const { title_blog: titleBlog, content_blog: contentBlog } = req.body;
    if (!titleBlog) {
      throw new Error("error it's not content in title_blog");
    }
    if (!contentBlog) {
      throw new Error("error it's not content in content_blog");
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
};
export const getBlog = async (req: Request, res: Response) => {
  try {
    const getBlog = await Blog.find();
    return res.json(getBlog);
  } catch (error) {
    throw new Error(error);
  }
};
export const getBlogById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("it not id");
    }
    const getBlogById = await Blog.findOne(Number(id));
    return res.json(getBlogById);
  } catch (error) {
    throw new Error(error);
  }
};
export const updateBlog = async (req: Request, res: Response) => {
  try {
    const { title_blog: titleBlog, content_blog: contentBlog } = req.body;
    const { id } = req.params;
    await Blog.update(Number(id), {
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
};
export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteBlog = await Blog.delete(Number(id));
    return res.json(deleteBlog);
  } catch (error) {
    throw new Error(error);
  }
};
