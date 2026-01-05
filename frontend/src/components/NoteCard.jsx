import { Link } from 'react-router';
import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { toast } from 'react-hot-toast';
import axios from 'axios';

function NoteCard({note, setNotes}) {

    const handleDelete = async (id) => {
        console.log(id);

        if(!window.confirm("Are you sure you want to delete this note ?")) return;

        try{
            await axios.delete(`http://localhost:3000/api/notes/${id}`);
            setNotes((prev) => prev.filter(note => note._id !== id));
            toast.success("Note Deleted Successfully!");
        } catch (e) {
            console.error(e.message);
            toast.error("Error Deleting Note! Please try again later.");
        }
    }
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition relative">
        <Link to={`/note/${note._id}`} className="block">
            <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
                {note.title}
            </h3>
            
            <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                {note.content}
            </p>
            
            <div className="text-xs text-gray-400">
                {new Date(note.createdAt).toLocaleDateString()}
            </div>
        </Link>

        <div className="absolute top-3 right-3 flex gap-2">
            <PenSquareIcon className="p-1.5 rounded-md hover:bg-gray-100 text-gray-600" />
            <Trash2Icon className="p-1.5 rounded-md hover:bg-red-100 text-red-600" onClick={() => handleDelete(note._id)} />
        </div>
    </div>
  );
}

export default NoteCard;
