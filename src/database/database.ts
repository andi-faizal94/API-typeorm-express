import dotenv from "dotenv";
import Blog from "../entities/Blog";
dotenv.config();

const dbConnection: any = process.env.DB_CONNECTION;

export default {
  type: dbConnection,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ["src/entities/*.ts"],
  // don't use synchronize true in production
  synchronize: false,
  logging: false,
  migrationsTableName: "blog",
  migrations: ["dist/src/migrations/*.ts"],
  cli: {
    migrationsDir: "src/migrations",
  },
};
