import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const heroHighlights = [
  "142 student portfolios are live this term",
  "Rs. 48,600 earned from project sales",
  "Updated by placement cells 2 hours ago",
];

const stats = [
  {
    value: "142",
    label: "Student Portfolios",
    note: "38 marked verified this month",
  },
  {
    value: "18",
    label: "Departments Active",
    note: "BCA, Fashion, Architecture leading",
  },
  {
    value: "Rs. 48,600",
    label: "Student Earnings",
    note: "12 new sales in the past 7 days",
  },
];

const features = [
  {
    title: "Verified Student Profiles",
    badge: "Trusted",
    description:
      "Students showcase projects, skills, and portfolio links with department verification and activity timestamps.",
    meta: "Updated 2 days ago",
  },
  {
    title: "Marketplace That Looks Active",
    badge: "12 Sales Today",
    description:
      "Project listings include seller stats, live pricing, and recent sales so the marketplace feels used instead of staged.",
    meta: "Rs. 2,400 earned by top sellers this week",
  },
  {
    title: "Leaderboards With Context",
    badge: "Rising",
    description:
      "Departments can highlight top students, real earnings, and trending creators without sending people to spreadsheets.",
    meta: "3 students moved up this week",
  },
];

function Home() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />

      <section className="flex min-h-[85vh] items-center bg-gradient-to-b from-blue-50 to-white px-4 py-10 sm:px-6">
        <div className="mx-auto grid max-w-7xl items-center gap-8 sm:gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                Academic SaaS
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                Active now
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-[#112D4E] sm:text-5xl md:text-6xl">
              Build Your <br /> Academic Identity
            </h1>

            <p className="mt-4 text-xl font-semibold text-slate-700 sm:text-2xl">
              Showcase projects. Get discovered. Earn from your work.
            </p>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              EduVault helps students publish polished portfolios, colleges
              verify talent, and project marketplaces stay active with real work
              from real departments.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-4">
              <a href="/portfolio" className="w-full sm:w-auto">
                <button className="w-full rounded-xl bg-blue-600 px-8 py-4 font-bold text-white shadow-[0_14px_28px_rgba(37,99,235,0.22)] transition hover:scale-[1.01] hover:bg-blue-700">
                  Create Portfolio
                </button>
              </a>

              <a href="/department" className="w-full sm:w-auto">
                <button className="w-full rounded-xl border border-slate-200 px-8 py-4 font-bold text-slate-700 transition hover:bg-slate-50">
                  Explore Student Work
                </button>
              </a>
            </div>

            <div className="mt-8 space-y-2">
              {heroHighlights.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-500">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-600"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://cdn.prod.website-files.com/6595ee355a0f462797ab252b/660275fc3924a89897235389_0_3%20(3)-p-800.webp"
              alt="Students using EduVault"
              className="rounded-[2rem] shadow-2xl sm:rounded-[3rem]"
            />

            <div className="mt-4 rounded-3xl border border-white/80 bg-white/95 p-5 shadow-xl backdrop-blur sm:absolute sm:-bottom-5 sm:left-6 sm:mt-0 sm:max-w-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Campus Snapshot
              </p>
              <p className="mt-2 text-lg font-bold text-slate-900">
                24 new project uploads this week
              </p>
              <p className="mt-1 text-sm text-slate-500">
                BCA and Fashion Design are the most active right now.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm ${
                index === 1 ? "md:-mt-2" : ""
              }`}
            >
              <h2 className="text-3xl font-bold text-[#112D4E] sm:text-4xl">{stat.value}</h2>
              <p className="mt-2 text-base font-semibold text-slate-700">{stat.label}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-4 rounded-[2rem] bg-slate-50 px-4 py-16 sm:rounded-[3rem] sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-extrabold text-[#112D4E] sm:text-4xl">
            Why Choose EduVault?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 sm:text-lg">
            The same clean workflow, but with the details people expect from a
            real academic product.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`rounded-3xl bg-white p-6 text-left shadow sm:p-10 ${
                  index === 1 ? "md:translate-y-2" : ""
                }`}
              >
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                  {feature.badge}
                </span>
                <h3 className="mb-3 mt-5 text-xl font-bold">{feature.title}</h3>
                <p className="text-slate-500">{feature.description}</p>
                <p className="mt-6 text-sm font-semibold text-slate-400">
                  {feature.meta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 bg-blue-600 px-4 py-16 text-center text-white sm:px-6 sm:py-24">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Ready to Build Your Academic Identity?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-blue-100 sm:text-base">
          Most students go live with their first portfolio in under 15 minutes.
        </p>

        <a href="/signup">
          <button className="mt-8 w-full rounded-xl bg-white px-8 py-4 font-bold text-blue-600 shadow-[0_14px_26px_rgba(15,23,42,0.18)] sm:w-auto">
            Start Your Portfolio
          </button>
        </a>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
