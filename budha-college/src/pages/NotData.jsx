import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function NotData() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">

      <Navbar />

      <div className="flex flex-1 items-center justify-center p-6">

        <div className="max-w-md w-full text-center">

          {/* SVG */}
          <div className="mb-8 flex justify-center">
            <svg className="w-64 h-64 text-gray-300" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="80" fill="#F3F4F6" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
              <rect x="70" y="80" width="60" height="40" rx="4" fill="white" stroke="currentColor" strokeWidth="2" />
              <line x1="80" y1="95" x2="120" y2="95" stroke="currentColor" strokeWidth="2" />
              <line x1="80" y1="105" x2="105" y2="105" stroke="currentColor" strokeWidth="2" />
              <path d="M130 140L150 160" stroke="currentColor" strokeWidth="6" />
              <circle cx="115" cy="125" r="25" fill="white" stroke="currentColor" strokeWidth="2" />
              <path d="M110 120L120 130M120 120L110 130" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          {/* Text */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Data not found
          </h1>

          <p className="text-gray-600 mb-8">
            We couldn't find the information you're looking for.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 bg-white border text-gray-700 rounded-xl hover:bg-gray-50"
            >
              Go Back
            </button>

            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
            >
              Return Home
            </button>

          </div>

          {/* Help */}
          <p className="mt-10 text-sm text-gray-400">
            Need help?{" "}
            <span className="text-indigo-500 hover:underline cursor-pointer">
              Contact Support
            </span>
          </p>

        </div>

      </div>
    </div>
  );
}

export default NotData;