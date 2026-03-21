import Navbar from "../components/Navbar";

function Colleges() {
  const colleges = [
    {
      name: "Budha College of Architecture",
      location: "Karnal",
      desc: "A leading architecture institution in Karnal focused on design excellence, innovation, and practical learning.",
      img: "https://i.ibb.co/yrWBGzJ/budha-group-of-institutions-karnal-computer-training-institutes-w8bww0h9mc.avif",
      link: "/department",
    },
    {
      name: "D.A.V. (PG) College",
      location: "Karnal",
      desc: "D.A.V. (PG) College in Karnal is known for overall development and is one of the premier institutions of Haryana.",
      img: "https://davcollegekarnal.ac.in/images/contact-dav-pg-college.JPG",
      link: "/notdata",
    },
    {
      name: "Dyal Singh College",
      location: "Karnal",
      desc: "A premier co-educational centre offering Arts, Science and Commerce with postgraduate programs.",
      img: "https://www.dsckarnal.ac.in/wp-content/uploads/2022/03/Dyal-Singh-College.png",
      link: "/notdata",
    },
    {
      name: "Pt Chiranji Lal Sharma Government College",
      location: "Karnal",
      desc: "Focused on continuous learning and self-development with a strong academic foundation.",
      img: "https://content3.jdmagicbox.com/v2/comp/karnal/c6/9999px184.x184.140618175810.f6c6/catalogue/pt-chiranji-lal-sharma-government-college-karnal-sector-14-karnal-government-colleges-5Dv0NX0K6f.jpg",
      link: "/notdata",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-10">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-[#112D4E]">
            Explore Top Colleges
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Discover institutions, compare facilities, and find the right fit
            for your academic journey.
          </p>
        </div>

        <div className="mx-auto mb-20 flex max-w-4xl flex-col items-center gap-4 rounded-3xl border border-slate-100 bg-white p-4 shadow md:flex-row">
          <input
            type="text"
            placeholder="Search colleges..."
            className="w-full rounded-2xl bg-slate-50 px-6 py-4 outline-none focus:ring-2 focus:ring-blue-100"
          />

          <select className="w-full rounded-2xl bg-slate-50 px-6 py-4 outline-none focus:ring-2 focus:ring-blue-100 md:w-64">
            <option>All Locations</option>
            <option>Karnal</option>
          </select>

          <button className="w-full rounded-2xl bg-blue-600 px-10 py-4 font-bold text-white transition hover:bg-blue-700 md:w-auto">
            Search
          </button>
        </div>

        <div className="mx-auto max-w-2xl space-y-10">
          {colleges.map((college) => (
            <div
              key={college.name}
              className="overflow-hidden rounded-[2.5rem] border border-slate-50 bg-white shadow"
            >
              <div className="m-4 h-72 overflow-hidden rounded-[2rem]">
                <img
                  src={college.img}
                  alt={college.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="px-10 pb-10 pt-4">
                <h2 className="mb-1 text-3xl font-extrabold text-[#112D4E]">
                  {college.name}
                </h2>

                <p className="mb-6 text-lg font-bold text-blue-600">
                  {college.location}
                </p>

                <p className="mb-10 text-lg leading-relaxed text-slate-500">
                  {college.desc}
                </p>

                <div className="flex items-center justify-between border-t border-slate-100 pt-8">
                  <span className="text-lg text-slate-500">Karnal, Haryana</span>

                  <a
                    href={college.link}
                    className="rounded-xl bg-blue-600 px-8 py-3 font-bold text-white transition hover:bg-blue-700"
                  >
                    View Details
                  </a>
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
