import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createConnection } from "typeorm";
import {
  createBlog,
  getBlog,
  getBlogId,
  updateBlog,
  deleteBlog,
} from "./routes/blog";
import db from "./database/database";

dotenv.config();

const app = express();
const PORT = process.env.BASEPORT;

const main = async () => {
  try {
    await createConnection(db);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    app.use(createBlog);
    app.use(getBlog);
    app.use(getBlogId);
    app.use(updateBlog);
    app.use(deleteBlog);

    app.listen(PORT, () => {
      console.log(`listening server now running in PORT ${PORT}`);
    });
  } catch (error) {
    throw new Error(error);
  }
};

main();
