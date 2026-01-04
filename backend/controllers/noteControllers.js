import Note from '../models/noteModel.js'
import mongoose from 'mongoose';

export async function getOneNote(req, res) {
    try{
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
           return res.status(400).json({ message: "Invalid note ID" });
        }
    
        const note = await Note.findById(req.params.id);

        if (!note) {
           return res.status(404).json({ message: "Note not found" });
        }
    
        res.status(200).json(note);
    } catch (e) {
        console.error(e.message);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function getAllNotes (_, res) { // req = _ skipping the convensionals
    try{
        const notes = await Note.find().sort({createdAt: -1}); // newest first
        res.status(200).json(notes);
    } catch (e) {
        console.error(e.message);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function createNote (req, res) {
    try{
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required" });
        }

        const newNote = new Note({title, content});

        await newNote.save();
        res.status(201).json(newNote);
    } catch (e) {
        console.error(e.message);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function updateNote (req, res) {
    try{
        const { title, content } = req.body;

        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid note ID" });
        }

        if (!title && !content) {
            return res.status(400).json({ message: "Nothing to update" });
        }

        const note = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true});

        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json(note);
    } catch (e) {
        console.error(e.message);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function deleteNote (req, res) {
    try {    
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid note ID" });
        }
    
        const note = await Note.findByIdAndDelete(req.params.id);
    
        if (!note) {
           return res.status(404).json({ message: "Note not found" });
        }
    
        res.status(200).json(note);
    } catch (e) {
        console.error(e.message);
        res.status(500).json({message: "Internal server error"});
    }
}