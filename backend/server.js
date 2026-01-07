import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import noteRoutes from './routes/noteRoutes.js';
import connectDB from './config/db.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

if(process.env.NODE_ENV !== 'production'){
    app.use(cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }));
}

app.use(express.json());
app.use("/api/notes", noteRoutes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/dist')));
    
    app.get(/.*/, (_, res) => {
        res.sendFile(path.join(__dirname, '../frontend', 'dist', 'index.html'));
    });
}


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
})