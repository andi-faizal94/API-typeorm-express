import { Response, Request, NextFunction } from "express";
import Blog from "../entities/Blog";

export const createBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { title_blog: titleBlog, content_blog: contentBlog } = req.body;
    const image = req.file?.path;
    if (!titleBlog) {
      throw new Error("error it's not content in title_blog");
    }
    if (!image) {
      throw new Error("error it's not image");
    }
    if (!contentBlog) {
      throw new Error("error it's not content in content_blog");
    }

    const blog = Blog.create({
      title_blog: titleBlog,
      content_blog: contentBlog,
      image,
    });
    await blog.save();
    return res.status(201).json({
      message: "created blog succesfully",
      data: blog,
    });
  } catch (error) {
    next({ message: error });
  }
};

export const getBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const getBlog = await Blog.find();
    return res.status(200).json(getBlog);
  } catch (error) {
    next(error);
  }
};
export const getBlogById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("it not id");
    }
    if (id === undefined) {
      throw new Error("id not found");
    }
    const getBlogById = await Blog.findOne(Number(id));
    console.log(getBlogById);
    return res.status(200).json({ message: "succesfully", data: getBlogById });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const updateBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { title_blog: titleBlog, content_blog: contentBlog } = req.body;
    const { id } = req.params;
    if (!id) {
      throw new Error("error it's not id");
    }
    if (!titleBlog) {
      throw new Error("error it's not content in title_blog");
    }
    if (!contentBlog) {
      throw new Error("error it's not content in content_blog");
    }

    await Blog.update(Number(id), {
      title_blog: titleBlog,
      content_blog: contentBlog,
    });
    const updateBlog = await Blog.find({
      id: Number(id),
    });
    res.status(200).json(updateBlog);
  } catch (error) {
    next(error);
  }
};
export const deleteBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("it not id");
    }
    const deleteBlog = await Blog.delete(Number(id));
    return res.status(200).json(deleteBlog);
  } catch (error) {
    next(error);
  }
};
