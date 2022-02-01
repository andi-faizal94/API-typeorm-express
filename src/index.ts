import { createConnection } from "typeorm";
import client from "./entities/client";
const main = async () => {
  try {
    const connection = await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "password",
      database: "Blog",
      entities: [client],
    });
    console.log("connected");
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

main();
