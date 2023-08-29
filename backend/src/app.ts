import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import NoteRouter from "./routes/notes.route";

const app = express();
app.use(express.json());

app.use("/api/notes", NoteRouter);

app.use((req, res, next) => {
  next(Error("Endpoint not found!"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errMsg = "Ogbeni, error don happen oo!";
  if (error instanceof Error) errMsg = error.message;
  res.status(500).json({ error: errMsg });
});

export default app;
