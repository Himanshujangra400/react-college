import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function TopStudents() {
  const topStudents = [
    {
      rank: 1,
      name: "Gavi",
      img: "https://i.ibb.co/yJk2vVn/1510f7e5-11ae-4eb9-8c01-b361ed4fd1a1.jpg",
      sales: "12 Sales",
      earning: "Rs. 4,800",
      projects: "4 projects live",
      badge: "Top Seller",
      updated: "Updated today",
      id: "gavi",
    },
    {
      rank: 2,
      name: "Robin",
      img: "https://i.ibb.co/kVhTqPpb/IMG-20250515-101417-1.jpg",
      sales: "5 Sales",
      earning: "Rs. 1,450",
      projects: "2 projects live",
      badge: "Rising",
      updated: "Updated yesterday",
      id: "robin",
    },
    {
      rank: 3,
      name: "Himanshu",
      img: "https://i.ibb.co/4Zf8zCRG/Whats-App-Image-2025-05-15-at-10-16-38-AM.jpg",
      sales: "3 Sales",
      earning: "Rs. 980",
      projects: "2 projects live",
      badge: "Verified",
      updated: "Updated 2 days ago",
      id: "himanshu",
    },
  ];

  const students = [
    {
      name: "Gavi",
      dept: "BCA",
      skills: "React | AI",
      img: "https://i.ibb.co/yJk2vVn/1510f7e5-11ae-4eb9-8c01-b361ed4fd1a1.jpg",
      note: "4 projects live",
    },
    {
      name: "Arju Sharma",
      dept: "BCA",
      skills: "Python | ML",
      img: "https://i.ibb.co/hRQdkBh7/Whats-App-Image-2025-05-15-at-11-49-46-AM.jpg",
      note: "Rising this week",
    },
    {
      name: "Gurmer",
      dept: "BCA",
      skills: "Java | DSA",
      img: "https://i.ibb.co/svzNYHYy/9bbd2070-ddf0-4ebc-92ba-f695c16ea947.jpg",
      note: "3 sales this term",
    },
    {
      name: "Robin",
      dept: "BCA",
      skills: "React | JS",
      img: "https://i.ibb.co/kVhTqPpb/IMG-20250515-101417-1.jpg",
      note: "Updated yesterday",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFF]">
      <Navbar />

      <div className="mx-auto max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
        <h1 className="mb-2 text-3xl font-extrabold text-[#112D4E] sm:text-4xl">
          Top Students
        </h1>
        <p className="mb-10 text-slate-500">
          Top performing students from Budha College, ranked by activity,
          portfolio quality, and marketplace traction.
        </p>

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {topStudents.map((student, index) => (
            <div
              key={student.id}
              className={`rounded-2xl bg-white p-6 text-center shadow ${
                index === 1 ? "md:-mt-2" : ""
              }`}
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xl font-bold text-slate-800">#{student.rank}</div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">
                  {student.badge}
                </span>
              </div>

              <img
                src={student.img}
                alt={student.name}
                className="mx-auto mb-3 h-20 w-20 rounded-full object-cover"
              />

              <h3 className="text-lg font-bold text-slate-900">{student.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{student.updated}</p>

              <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-4">
                  <span className="font-semibold text-orange-500">{student.sales}</span>
                  <span className="font-bold text-green-600">{student.earning}</span>
                </div>
                <p className="mt-2 text-sm text-slate-500">{student.projects}</p>
              </div>

              <a
                href={`/portfolio/${student.id}`}
                className="mt-4 block rounded-lg bg-blue-600 py-2.5 font-semibold text-white"
              >
                View Portfolio
              </a>
            </div>
          ))}
        </div>

        <h2 className="mb-6 text-2xl font-bold text-[#112D4E]">All Students</h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {students.map((student, index) => (
            <div
              key={student.name}
              className={`rounded-xl bg-white p-4 text-center shadow ${
                index === 2 ? "md:translate-y-1" : ""
              }`}
            >
              <img
                src={student.img}
                alt={student.name}
                className="mx-auto mb-3 h-16 w-16 rounded-full object-cover"
              />

              <h3 className="font-bold text-slate-900">{student.name}</h3>
              <p className="text-xs font-semibold text-slate-400">{student.dept}</p>
              <p className="mt-1 text-xs text-slate-500">{student.skills}</p>
              <p className="mt-3 text-xs font-semibold text-blue-600">{student.note}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default TopStudents;
