import express from 'express';
import { getAllNotes, createNote, updateNote, deleteNote } from '../controllers/noteControllers.js';

const noteRoutes = express.Router();

noteRoutes.get('/', getAllNotes);
noteRoutes.post('/', createNote);
noteRoutes.put('/:id', updateNote);
noteRoutes.delete('/:id', deleteNote);

export default noteRoutes;