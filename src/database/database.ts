import dotenv from "dotenv";
import Blog from "../entities/Blog";
// import * as path from "path";
// import * as fs from "fs";
dotenv.config();

const dbConnection: any = process.env.DB_CONNECTION;

// const path_migrations = path.join(__dirname, "..", "migrations");
// const migrations = [];
// fs.readdirSync(path_migrations).forEach(function (migrate) {
//   migrations.push(require(path.join(path_migrations, migrate)));
// });

// console.log(process.env);
export default {
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
  migrationsTableName: "blog",
  migrations: ["dist/src/migrations/*.ts"],
  cli: {
    migrationsDir: "src/migrations",
  },
};
