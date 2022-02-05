import { createConnection } from "typeorm";
import express from "express";
import Blog from "./entities/Blog";
import { createBlog, getBlog, getBlogId, deleteBlog } from "./routes/Blog";
const app = express();
const PORT = 8080;
const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "password",
      database: "Blog",
      entities: [Blog],
      // don't use synchronize true in production
      synchronize: false,
      logging: false,
    });
    console.log("connected");
    app.use(express.json());
    app.use(createBlog);
    app.use(getBlog);
    app.use(getBlogId);
    app.use(deleteBlog);

    app.listen(8080, () => {
      console.log(`now running in PORT ${PORT}`);
    });
  } catch (error) {
    throw new Error(error);
  }
};

main();
