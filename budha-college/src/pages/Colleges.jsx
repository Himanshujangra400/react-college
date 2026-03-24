import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Colleges() {
  const colleges = [
    {
      name: "Budha College of Architecture",
      location: "Karnal",
      desc: "A leading architecture institution in Karnal focused on design excellence, innovation, and practical learning.",
      img: "https://i.ibb.co/yrWBGzJ/budha-group-of-institutions-karnal-computer-training-institutes-w8bww0h9mc.avif",
      link: "/department",
      badge: "Verified Campus",
      departments: "4 departments live",
      portfolios: "58 portfolios",
      update: "Updated 2 days ago",
    },
    {
      name: "D.A.V. (PG) College",
      location: "Karnal",
      desc: "D.A.V. (PG) College in Karnal is known for overall development and is one of the premier institutions of Haryana.",
      img: "https://davcollegekarnal.ac.in/images/contact-dav-pg-college.JPG",
      link: "/notdata",
      badge: "Rolling Out",
      departments: "2 departments onboarding",
      portfolios: "18 draft portfolios",
      update: "Updated 5 days ago",
    },
    {
      name: "Dyal Singh College",
      location: "Karnal",
      desc: "A premier co-educational centre offering Arts, Science and Commerce with postgraduate programs.",
      img: "https://www.dsckarnal.ac.in/wp-content/uploads/2022/03/Dyal-Singh-College.png",
      link: "/notdata",
      badge: "Rising",
      departments: "3 departments shortlisted",
      portfolios: "11 student requests",
      update: "Updated 1 week ago",
    },
    {
      name: "Pt Chiranji Lal Sharma Government College",
      location: "Karnal",
      desc: "Focused on continuous learning and self-development with a strong academic foundation.",
      img: "https://content3.jdmagicbox.com/v2/comp/karnal/c6/9999px184.x184.140618175810.f6c6/catalogue/pt-chiranji-lal-sharma-government-college-karnal-sector-14-karnal-government-colleges-5Dv0NX0K6f.jpg",
      link: "/notdata",
      badge: "New Campus",
      departments: "1 department in review",
      portfolios: "9 seller profiles",
      update: "Updated yesterday",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#112D4E] sm:text-5xl">
            Explore Top Colleges
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-500 sm:text-lg">
            Discover campuses already publishing student work, verified
            portfolios, and project listings that feel active.
          </p>
        </div>

        <div className="mx-auto mb-16 flex max-w-4xl flex-col items-center gap-3 rounded-3xl border border-slate-100 bg-white p-3 shadow sm:gap-4 sm:p-4 md:flex-row">
          <input
            type="text"
            placeholder="Search colleges, departments, or locations..."
            className="w-full rounded-2xl bg-slate-50 px-6 py-4 outline-none focus:ring-2 focus:ring-blue-100"
          />

          <select className="w-full rounded-2xl bg-slate-50 px-6 py-4 outline-none focus:ring-2 focus:ring-blue-100 md:w-64">
            <option>All Locations</option>
            <option>Karnal</option>
          </select>

          <button className="w-full rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700 md:w-auto">
            Search Colleges
          </button>
        </div>

        <div className="mx-auto max-w-2xl space-y-10">
          {colleges.map((college, index) => (
            <div
              key={college.name}
              className={`overflow-hidden rounded-[2.5rem] border border-slate-50 bg-white shadow ${
                index === 1 ? "md:translate-x-2" : ""
              }`}
            >
              <div className="m-3 h-56 overflow-hidden rounded-[1.5rem] sm:m-4 sm:h-72 sm:rounded-[2rem]">
                <img
                  src={college.img}
                  alt={college.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="px-5 pb-6 pt-2 sm:px-10 sm:pb-10 sm:pt-4">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                    {college.badge}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                    {college.update}
                  </span>
                </div>

                <h2 className="mb-1 text-2xl font-extrabold text-[#112D4E] sm:text-3xl">
                  {college.name}
                </h2>

                <p className="mb-5 text-base font-bold text-blue-600 sm:mb-6 sm:text-lg">
                  {college.location}
                </p>

                <p className="mb-6 text-base leading-7 text-slate-500 sm:mb-8 sm:text-lg sm:leading-relaxed">
                  {college.desc}
                </p>

                <div className="mb-8 flex flex-wrap gap-3">
                  <span className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
                    {college.departments}
                  </span>
                  <span className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
                    {college.portfolios}
                  </span>
                </div>

                <div className="flex flex-col items-start gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
                  <span className="text-base text-slate-500 sm:text-lg">Karnal, Haryana</span>

                  <Link
                    to={college.link}
                    className="w-full rounded-xl bg-blue-600 px-8 py-3 text-center font-bold text-white transition hover:bg-blue-700 sm:w-auto"
                  >
                    Explore Departments
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Colleges;
