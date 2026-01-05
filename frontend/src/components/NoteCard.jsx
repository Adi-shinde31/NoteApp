import { Link } from 'react-router';
import { PenSquareIcon, Trash2Icon } from 'lucide-react'

function NoteCard({note}) {
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
            <Trash2Icon className="p-1.5 rounded-md hover:bg-red-100 text-red-600" />
        </div>
    </div>
  );
}

export default NoteCard;
