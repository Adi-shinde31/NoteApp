import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true // mongodb defaults createdAt and updatedAt fields
    }
);

const Note = mongoose.models.Note || mongoose.model('Note', noteSchema);

export default Note;