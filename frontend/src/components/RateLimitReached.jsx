import { AlertTriangle } from "lucide-react";

function RateLimitReached() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white border border-red-200 rounded-xl shadow-sm p-6 text-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-4 text-red-500">
          <AlertTriangle size={40} />
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Rate Limit Reached
        </h2>

        {/* Message */}
        <p className="text-sm text-gray-600 mb-6">
          You’ve made too many requests in a short period of time.
          Please wait a few minutes and try again.
        </p>

        {/* Action */}
        <button
          onClick={() => window.location.reload()}
          className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition"
        >
          Retry
        </button>

      </div>
    </div>
  );
}

export default RateLimitReached;
