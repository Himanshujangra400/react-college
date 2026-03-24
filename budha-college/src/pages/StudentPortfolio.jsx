import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getPortfolio } from "../lib/api";

function StudentPortfolio() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const loadPortfolio = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await getPortfolio(id || "himanshu");
        if (active) {
          setStudent(response.data);
        }
      } catch (requestError) {
        if (active) {
          setError(requestError.message);
          setStudent(null);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadPortfolio();

    return () => {
      active = false;
    };
  }, [id]);

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFF]">
      <Navbar />

      <div className="mx-auto max-w-5xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
        {error ? <p className="mb-6 rounded-xl bg-red-50 p-4 text-red-600">{error}</p> : null}
        {loading ? <p className="mb-6 text-slate-500">Loading portfolio...</p> : null}

        {!student && !loading ? (
          <p className="mb-6 rounded-xl bg-slate-100 p-4 text-slate-600">Portfolio not available.</p>
        ) : null}

        {student ? (
          <>
        <div className="mb-8 flex flex-wrap items-start gap-4 rounded-2xl bg-white p-5 shadow sm:items-center sm:p-6">
          <img
            src={student.profileImg}
            alt={student.name}
            className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
          />
          <div className="flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <h2 className="text-2xl font-bold text-slate-900">{student.name}</h2>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">
                Verified
              </span>
            </div>
            <p className="text-slate-500">{student.role}</p>
            <p className="text-sm text-slate-400">{student.college}</p>
          </div>

          <div className="flex w-full flex-wrap gap-2 lg:w-auto">
            {student.stats.map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8 rounded-2xl bg-white p-6 shadow">
          <div className="mb-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <h3 className="font-bold text-slate-900">About</h3>
            <span className="text-sm font-semibold text-slate-400">
              Updated 2 days ago
            </span>
          </div>
          <p className="text-slate-500">{student.bio}</p>
        </div>

        <div>
          <div className="mb-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <h3 className="text-xl font-bold text-slate-900">Projects</h3>
            <span className="text-sm font-semibold text-slate-400">
              {student.projects.length} projects live
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {student.projects.map((project, index) => (
              <div
                key={project.id}
                className={`rounded-2xl bg-white p-4 shadow ${
                  index === 1 ? "md:translate-y-1" : ""
                }`}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="mb-3 rounded-xl"
                />

                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <h4 className="font-bold text-slate-900">{project.title}</h4>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600">
                    Live
                  </span>
                </div>
                <p className="text-sm text-slate-500">{project.desc}</p>
                <p className="mt-3 text-xs font-semibold text-slate-400">
                  {project.meta}
                </p>

                <button className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white sm:w-auto">
                  View Project Details
                </button>
              </div>
            ))}
          </div>
        </div>
          </>
        ) : null}
      </div>

      <Footer />
    </div>
  );
}

export default StudentPortfolio;
