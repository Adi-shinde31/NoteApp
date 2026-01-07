import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from "react-router";
import { ArrowLeftIcon } from "lucide-react";

import api from '../../lib/axios';

function CreateNotePage () {
    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!title.trim() || !content.trim()){
            toast.error("Both fields are required!!");
        }

        setLoading(true);
        
        try{
            await api.post("/notes", {title, content});
            toast.success("Note Created Successfully");
            navigate('/');
        } catch (e) {
            toast.error("Error Creating Note!");
            
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4">
            
            {/* Back link */}
            <div className="w-full max-w-xl mt-6">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
                >
                    <ArrowLeftIcon size={18} />
                    Back to Notes
                </Link>
            </div>

            {/* Card */}
            <div className="w-full max-w-xl bg-white border border-gray-200 rounded-xl shadow-sm mt-6 p-6">
            
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Create New Note
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Title */}
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Note title"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    {/* Content */}
                    <textarea
                        name="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write your note here..."
                        rows={6}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        >
                        {loading ? "Creating..." : "Create Note"}
                    </button>

                </form>
            </div>
        </div>
    );
}

export default CreateNotePage;