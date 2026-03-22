import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function NotData() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />

      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md text-center">
          <div className="mb-8 flex justify-center">
            <svg className="h-64 w-64 text-gray-300" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="80" fill="#F3F4F6" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
              <rect x="70" y="80" width="60" height="40" rx="4" fill="white" stroke="currentColor" strokeWidth="2" />
              <line x1="80" y1="95" x2="120" y2="95" stroke="currentColor" strokeWidth="2" />
              <line x1="80" y1="105" x2="105" y2="105" stroke="currentColor" strokeWidth="2" />
              <path d="M130 140L150 160" stroke="currentColor" strokeWidth="6" />
              <circle cx="115" cy="125" r="25" fill="white" stroke="currentColor" strokeWidth="2" />
              <path d="M110 120L120 130M120 120L110 130" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          <div className="mb-4 flex flex-wrap justify-center gap-2">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
              Not Live Yet
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
              Checked today
            </span>
          </div>

          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            Data not found
          </h1>

          <p className="mb-8 text-gray-600">
            This page is not public yet. That usually means the department has
            not published portfolios or marketplace listings for this section.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={() => navigate(-1)}
              className="rounded-xl border bg-white px-6 py-3 text-gray-700 hover:bg-gray-50"
            >
              Go Back
            </button>

            <button
              onClick={() => navigate("/")}
              className="rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
            >
              Return Home
            </button>
          </div>

          <p className="mt-10 text-sm text-gray-400">
            Need help?{" "}
            <span className="cursor-pointer text-indigo-500 hover:underline">
              Contact Support
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotData;
