import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getStudents } from "../lib/api";

function Students() {
  const [search, setSearch] = useState("");
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const loadStudents = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await getStudents(search);
        if (active) {
          setStudents(response.data || []);
        }
      } catch (requestError) {
        if (active) {
          setError(requestError.message);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadStudents();

    return () => {
      active = false;
    };
  }, [search]);

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFF]">
      <Navbar />

      <main className="flex-grow">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
          <h1 className="mb-3 text-3xl font-extrabold text-[#112D4E] sm:text-4xl">
            BCA Students
          </h1>
          <p className="text-slate-500">
            Discover talented students, their active portfolios, and the
            projects already getting attention.
          </p>
        </div>

        <div className="mx-auto mb-10 flex max-w-6xl flex-col gap-3 px-4 sm:px-6 md:flex-row">
          <input
            type="text"
            placeholder="Search by student name, skill, or stack..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 rounded-xl border border-slate-200 bg-white px-5 py-3 outline-none focus:ring-2 focus:ring-blue-100"
          />
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm">
            Find Students
          </button>
        </div>

        {error ? (
          <div className="mx-auto mb-8 max-w-6xl px-4 text-red-600 sm:px-6">{error}</div>
        ) : null}

        {loading ? (
          <div className="mx-auto mb-8 max-w-6xl px-4 text-slate-500 sm:px-6">Loading students...</div>
        ) : null}

        <div className="mx-auto mb-20 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
          {!loading && students.length === 0 ? (
            <p className="col-span-full text-center text-slate-400">
              No students found
            </p>
          ) : (
            students.map((student, index) => (
              <div
                key={student.id}
                className={`rounded-2xl bg-white p-6 text-center shadow transition hover:shadow-lg ${
                  index === 1 ? "lg:-mt-1" : ""
                }`}
              >
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3 text-left">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">
                    {student.status}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {student.activity}
                  </span>
                </div>

                <img
                  src={student.img}
                  alt={student.name}
                  className="mx-auto mb-4 h-24 w-24 rounded-2xl object-cover"
                />

                <h3 className="text-xl font-bold text-slate-900">{student.name}</h3>
                <p className="mt-1 text-sm font-medium text-slate-400">
                  {student.department}
                </p>
                <p className="mb-4 mt-2 text-sm text-slate-500">{student.skill}</p>

                <div className="mb-5 space-y-2 rounded-2xl bg-slate-50 p-4 text-left">
                  <div className="flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-slate-500">{student.projects}</span>
                    <span className="font-semibold text-slate-700">{student.sales}</span>
                  </div>
                  <p className="text-sm font-bold text-blue-600">{student.earnings}</p>
                </div>

                <Link
                  to={`/portfolio/${student.id}`}
                  className="block rounded-lg bg-blue-600 py-2.5 font-semibold text-white"
                >
                  View Portfolio
                </Link>
              </div>
            ))
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Students;
