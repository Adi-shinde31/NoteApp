import express from 'express';
import { getOneNote, getAllNotes, createNote, updateNote, deleteNote } from '../controllers/noteControllers.js';
import notesRateLimiter from '../middlewares/rateLimiter.js';

const noteRoutes = express.Router();

// Apply rate limiter to all note routes
noteRoutes.use(notesRateLimiter);

noteRoutes.get('/', getAllNotes);
noteRoutes.get('/:id', getOneNote);
noteRoutes.post('/', createNote);
noteRoutes.put('/:id', updateNote);
noteRoutes.delete('/:id', deleteNote);

export default noteRoutes;