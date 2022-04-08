import dotenv from "dotenv";
import express, { Request } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createConnection } from "typeorm";
import router from "./routes/blog";
import db from "./database/database";
import multer, { FileFilterCallback } from "multer";

dotenv.config();

const app = express();
const PORT = process.env.BASEPORT;
type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

const main = async () => {
  try {
    await createConnection(db);
    const fileStorage = multer.diskStorage({
      destination: (
        req: Request,
        file: Express.Multer.File,
        cb: DestinationCallback
      ): void => {
        cb(null, "image");
      },
      filename: (
        req: Request,
        file: Express.Multer.File,
        cb: FileNameCallback
      ): void => {
        cb(null, new Date().getDate() + "-" + file.originalname);
      },
    });

    const fileFilter = (
      request: Request,
      file: Express.Multer.File,
      callback: FileFilterCallback
    ): void => {
      if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
      ) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    };

    const upload = multer({
      storage: fileStorage,
      limits: {
        fileSize: 1024 * 1024 * 5,
      },
      fileFilter: fileFilter,
    });
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(
      multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
    );
    app.use(cors());
    app.use(router);

    app.listen(PORT, () => {
      console.log(`listening server now running in PORT ${PORT}`);
    });
  } catch (error) {
    throw new Error(error);
  }
};

main();
