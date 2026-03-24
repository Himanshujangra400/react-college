import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Department() {
  const departments = [
    {
      name: "BCA",
      desc: "Computer Applications",
      students: "16 Students",
      projects: "9 projects live",
      status: "Top Seller",
      note: "Rs. 7,800 earned this month",
      link: "/students",
      btn: "View BCA Students",
    },
    {
      name: "BBA",
      desc: "Business Administration",
      students: "4 Students",
      projects: "2 portfolios published",
      status: "Rising",
      note: "Updated 4 days ago",
      link: "/notdata",
      btn: "View Department",
    },
    {
      name: "Fashion",
      desc: "Creative Design",
      students: "6 Students",
      projects: "3 collections live",
      status: "Verified",
      note: "12 catalog saves this week",
      link: "/notdata",
      btn: "View Department",
    },
    {
      name: "Architecture",
      desc: "Architecture & Design",
      students: "3 Students",
      projects: "2 studio portfolios",
      status: "New",
      note: "Recently opened for review",
      link: "/notdata",
      btn: "View Department",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFF] text-slate-900">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-4 text-sm text-slate-400 sm:px-6">
        <span>Home</span> &gt; <span>Colleges</span> &gt;
        <span className="ml-1 font-medium text-slate-600">
          Budha College of Architecture
        </span>
      </div>

      <main className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative mb-16 h-[320px] w-full overflow-hidden rounded-[2rem] shadow-xl sm:mb-20 sm:h-[400px] sm:rounded-[2.5rem]">
          <img
            src="https://i.ibb.co/yrWBGzJ/budha-group-of-institutions-karnal-computer-training-institutes-w8bww0h9mc.avif"
            alt="Budha College"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="absolute bottom-0 left-0 p-6 text-white sm:p-10">
            <h1 className="mb-3 text-3xl font-extrabold sm:text-4xl">
              Departments at Budha College
            </h1>
            <p className="mb-4 text-sm text-white/80 sm:text-base">
              Budha College of Architecture, Karnal
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-900">
                NAAC A+
              </span>
              <span className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-900">
                1200+ Students
              </span>
              <span className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-900">
                Updated 2 days ago
              </span>
            </div>
          </div>
        </div>

        <section className="mb-20 grid items-center gap-10 sm:gap-16 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#112D4E]">
              About Our College
            </h2>
            <p className="mb-4 text-slate-500">
              Budha College is committed to excellence in education, innovation,
              and career-focused learning.
            </p>
            <p className="text-sm font-semibold text-slate-400">
              Active this semester: 58 public portfolios, 19 project listings,
              and 3 departments with verified student profiles.
            </p>
          </div>

          <img
            src="https://i.ibb.co/yrWBGzJ/budha-group-of-institutions-karnal-computer-training-institutes-w8bww0h9mc.avif"
            alt="Campus"
            className="h-64 w-full rounded-3xl object-cover shadow-lg sm:h-80"
          />
        </section>

        <section className="mb-28">
          <h2 className="mb-12 text-3xl font-bold text-[#112D4E]">
            Departments
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((department, index) => (
              <div
                key={department.name}
                className={`rounded-3xl border bg-white p-8 shadow transition hover:shadow-xl ${
                  index === 1 ? "lg:-mt-1" : ""
                }`}
              >
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-2xl font-bold text-blue-600">
                    {department.name}
                  </h3>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">
                    {department.status}
                  </span>
                </div>

                <p className="mb-2 font-medium text-slate-600">{department.desc}</p>
                <p className="mb-4 text-sm text-slate-400">{department.note}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="inline-block rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold text-blue-600">
                    {department.students}
                  </span>
                  <span className="inline-block rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold text-slate-600">
                    {department.projects}
                  </span>
                </div>

                <Link to={department.link}>
                  <button className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
                    {department.btn}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 rounded-[2rem] bg-blue-100 p-8 text-center sm:rounded-[2.5rem] sm:p-16">
          <h2 className="mb-4 text-2xl font-bold text-[#112D4E] sm:text-3xl">
            Explore Our Students' Work
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-slate-600">
            See which students are publishing portfolios, selling projects, and
            climbing the leaderboard this week.
          </p>

          <Link to="/top-students">
            <button className="w-full rounded-xl bg-white px-10 py-4 font-semibold text-blue-600 shadow-sm sm:w-auto">
              View Student Leaderboard
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Department;
