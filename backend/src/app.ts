import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import NoteRouter from "./routes/notes.route";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/notes", NoteRouter);

app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found!"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errMsg = "Ogbeni, error don happen oo!";
  let statusCode = 500;
  if (isHttpError(error)) {
    statusCode = error.status;
    errMsg = error.message;
  }
  res.status(statusCode).json({ error: errMsg });
});

export default app;
