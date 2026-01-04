import express from 'express';
import { getOneNote, getAllNotes, createNote, updateNote, deleteNote } from '../controllers/noteControllers.js';

const noteRoutes = express.Router();

noteRoutes.get('/', getAllNotes);
noteRoutes.get('/:id', getOneNote);
noteRoutes.post('/', createNote);
noteRoutes.put('/:id', updateNote);
noteRoutes.delete('/:id', deleteNote);

export default noteRoutes;