import multer from "multer";
import { Response, Request, NextFunction } from "express";

const upload = multer({ dest: "uploads/" });

export const uploadFile =
  (upload.single("profile"),
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      res.json(req.file);
    } catch (error) {
      next(error);
    }
  });
