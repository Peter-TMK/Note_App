import express from "express";
import * as NotesController from "../controllers/notes.controller";
const router = express.Router();

router.get("/", NotesController.getAllNotes);
router.get("/:noteId", NotesController.getNoteById);
router.post("/", NotesController.createNote);

export default router;
