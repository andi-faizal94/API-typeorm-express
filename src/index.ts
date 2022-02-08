import dotenv from "dotenv";
import bodyParser from "body-parser";
import { createConnection } from "typeorm";
import express from "express";
import cors from "cors";
import Blog from "./entities/Blog";
import {
  createBlog,
  getBlog,
  getBlogId,
  updateBlog,
  deleteBlog,
} from "./routes/Blog";

dotenv.config();

const app = express();
const PORT = 8080;
const dbConnection: any = process.env.DB_CONNECTION;
const main = async () => {
  try {
    await createConnection({
      type: dbConnection,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Blog],
      // don't use synchronize true in production
      synchronize: false,
      logging: false,
    });
    app.use(express.json());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    app.use(createBlog);
    app.use(getBlog);
    app.use(getBlogId);
    app.use(updateBlog);
    app.use(deleteBlog);

    app.listen(8080, () => {
      console.log(`server now running in PORT ${PORT}`);
    });
  } catch (error) {
    throw new Error(error);
  }
};

main();
