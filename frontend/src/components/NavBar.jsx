import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

function NavBar() {
  return (
    <nav className="w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      
      <div className="text-xl font-semibold text-gray-800">
        NoteApp
      </div>

      <Link
        to="/create"
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
      >
        <PlusIcon size={18} />
        Create Note
      </Link>

    </nav>
  );
}

export default NavBar;
