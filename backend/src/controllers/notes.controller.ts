import { RequestHandler } from "express";
import NoteModel from "../models/note.model";

// get all notes
export const getAllNotes: RequestHandler = async (req, res, next) => {
  try {
    // throw Error("Ogbeni");
    const notes = await NoteModel.find().exec();
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

// create notes
export const createNote: RequestHandler = async (req, res, next) => {
  const title = req.body.title;
  const text = req.body.text;
  try {
    const newNote = await NoteModel.create({
      title: title,
      text: text,
    });
    res.status(201).json(newNote);
  } catch (error) {
    next(error);
  }
};

// get a single note by ID
export const getNoteById: RequestHandler = async (req, res, next) => {
  try {
    // throw Error("Ogbeni");
    const noteId = await NoteModel.findById(req.params.noteId).exec();
    res.status(200).json(noteId);
  } catch (error) {
    next(error);
  }
};
