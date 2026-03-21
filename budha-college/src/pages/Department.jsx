import Navbar from "../components/Navbar";

function Department() {
  const departments = [
    {
      name: "BCA",
      desc: "Computer Applications",
      students: "5+ Students",
      link: "/students",
      btn: "View Students",
    },
    {
      name: "BBA",
      desc: "Business Administration",
      students: "0 Students",
      link: "/notdata",
      btn: "View Department",
    },
    {
      name: "Fashion",
      desc: "Creative Design",
      students: "0 Students",
      link: "/notdata",
      btn: "View Department",
    },
    {
      name: "Architecture",
      desc: "Architecture & Design",
      students: "0 Students",
      link: "/notdata",
      btn: "View Department",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFF] text-slate-900">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-slate-400">
        <span>Home</span> &gt; <span>Colleges</span> &gt;
        <span className="ml-1 font-medium text-slate-600">
          Budha College of Architecture
        </span>
      </div>

      <main className="mx-auto max-w-7xl px-6">
        <div className="relative mb-20 h-[400px] w-full overflow-hidden rounded-[2.5rem] shadow-xl">
          <img
            src="https://i.ibb.co/yrWBGzJ/budha-group-of-institutions-karnal-computer-training-institutes-w8bww0h9mc.avif"
            alt="Budha College"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="absolute bottom-0 left-0 p-10 text-white">
            <h1 className="mb-3 text-4xl font-extrabold">
              Departments at Budha College
            </h1>
            <p className="mb-4">Budha College of Architecture, Karnal</p>

            <div className="flex gap-3">
              <span className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-900">
                NAAC A+
              </span>
              <span className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-900">
                1200+ Students
              </span>
            </div>
          </div>
        </div>

        <section className="mb-28 grid items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#112D4E]">
              About Our College
            </h2>
            <p className="text-slate-500">
              Budha College is committed to excellence in education, innovation,
              and career-focused learning.
            </p>
          </div>

          <img
            src="https://i.ibb.co/yrWBGzJ/budha-group-of-institutions-karnal-computer-training-institutes-w8bww0h9mc.avif"
            alt="Campus"
            className="h-80 w-full rounded-3xl object-cover shadow-lg"
          />
        </section>

        <section className="mb-28">
          <h2 className="mb-12 text-3xl font-bold text-[#112D4E]">
            Departments
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((department) => (
              <div
                key={department.name}
                className="rounded-3xl border bg-white p-8 shadow transition hover:shadow-xl"
              >
                <h3 className="mb-2 text-2xl font-bold text-blue-600">
                  {department.name}
                </h3>

                <p className="mb-4 text-slate-500">{department.desc}</p>

                <span className="mb-6 inline-block rounded-full bg-blue-50 px-4 py-1 text-xs text-blue-600">
                  {department.students}
                </span>

                <a href={department.link}>
                  <button className="w-full rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700">
                    {department.btn}
                  </button>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 rounded-[2.5rem] bg-blue-100 p-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#112D4E]">
            Explore Our Students' Work
          </h2>

          <a href="/top-students">
            <button className="rounded-xl bg-white px-10 py-4 font-semibold text-blue-600">
              View Students
            </button>
          </a>
        </section>
      </main>
    </div>
  );
}

export default Department;
