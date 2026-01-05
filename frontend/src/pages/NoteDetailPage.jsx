import { Link, useNavigate, useParams } from 'react-router';
import { LoaderIcon, ArrowLeftIcon, Trash2Icon } from 'lucide-react'
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useState, useEffect } from 'react';

function NoteDetailPage () {
    const [ note, setNote ] = useState({});
    const [ loading, setLoading ] = useState(true);
    const [ saving, setSaving ] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/notes/${id}`);
                setNote(response.data);

            } catch (e) {
                console.error(e.message);
                toast.error("Something went wrong!");
            } finally {
                setLoading(false);
            }
        } 

        fetchNote();
    }, [id])

    const handleDelete = async (id) => {
        if(!window.confirm("Are you sure you want to delete this note ?")) return;

        try{
            await axios.delete(`http://localhost:3000/api/notes/${id}`);
            toast.success("Note Deleted Successfully!");
            navigate('/');
        } catch (e) {
            console.error(e.message);
            toast.error("Error Deleting Note! Please try again later.");
        }
    }

    const handleSave = async () => {
        if(!note.title.trim() || !note.content.trim()){
            toast.error("Please add title or content");
            return;
        }

        setSaving(true);

        try{
            await axios.put(`http://localhost:3000/api/notes/${id}`, note);
            toast.success("Note Updated Successfully!");
            navigate('/');
        } catch (e) {
            console.error(e.message);
            toast.error("Error Updating Note! Please try again later.");
        } finally {
            setSaving(false);
        }
    }
    if(loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <LoaderIcon className="animate-spin size-10 text-gray-600"/>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-6">
            <div className="max-w-2xl mx-auto flex items-center justify-between mb-6">
                <Link to='/' className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                    <ArrowLeftIcon size={18}/>
                    Back to Note 
                </Link>
                <button onClick={() => handleDelete(note._id)} className="p-2 rounded-lg hover:bg-red-100 text-red-600 cursor-pointer">
                    <Trash2Icon size={18}/>
                </button>
            </div>

            <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                <input 
                    type="text" 
                    name="title" 
                    id="text" 
                    value={note.title || ""} 
                    onChange={(e) => setNote({...note, title: e.target.value})} 
                    placeholder="Note title"
                    className="w-full text-lg font-semibold border-b border-gray-300 pb-2 mb-4 focus:outline-none focus:border-blue-500"
                    />

                <textarea 
                    name="content" 
                    id="content" 
                    value={note.content || ""} 
                    onChange={e => setNote({...note, content: e.target.value})}
                    placeholder="Write your note here..."
                    className="w-full text-sm text-gray-700 resize-none focus:outline-none"
                    />

                <div className="flex justify-end mt-6">
                    
                    <button 
                        disabled={saving} 
                        onClick={handleSave}
                        className="cursor-pointer bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition disabled:opacity-50"
                        >
                        {saving ? "Saving...": "Save Changes" }
                    </button>
                </div>
            
             </div>
        </div>
    )
}

export default NoteDetailPage;