import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';

import NavBar from '../components/NavBar.jsx';
import RateLimitReached from '../components/RateLimitReached.jsx';
import NoteCard from '../components/NoteCard.jsx';

function HomePage () {
    const [ isRateLimited, setIsRateLimited ] = useState(false);
    const [ notes, setNotes ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const fetchNotes = async () => {
            try{
                const response = await axios.get("http://localhost:3000/api/notes");
                setNotes(response.data);
                setIsRateLimited(false);
            } catch (e) {
                if(e.response.status === 429){
                    setIsRateLimited(true);
                    toast.error("Request Limit Exceeded.");
                } else {
                    toast.error("Failed to load notes.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchNotes();
    }, []);
    return (
        <>
            <NavBar />
            {isRateLimited && <RateLimitReached />}

            {!isRateLimited && (
                <div className="p-10">
                    {loading && <div className="text-center text-primary py-10">Loading Notes...</div>}
                    
                    {!loading && notes.length === 0 && (
                        <div className="text-center text-gray-500">
                        No notes found. Create your first note ✍️
                        </div>
                    )}

                    {!loading && notes.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {notes.map(note => (
                                <NoteCard key={note._id} note={note} setNotes={setNotes}/>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

export default HomePage;