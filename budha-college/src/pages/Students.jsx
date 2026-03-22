import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Students() {
  const [search, setSearch] = useState("");

  const students = [
    {
      id: "gavi",
      name: "Gavi",
      skill: "AI | Web Development",
      img: "https://i.ibb.co/yJk2vVn/1510f7e5-11ae-4eb9-8c01-b361ed4fd1a1.jpg",
      department: "BCA",
      projects: "4 projects live",
      sales: "12 sales",
      earnings: "Rs. 4,800 earned",
      status: "Top Seller",
      activity: "Active now",
    },
    {
      id: "arju",
      name: "Arju Sharma",
      skill: "Python | Machine Learning",
      img: "https://i.ibb.co/hRQdkBh7/Whats-App-Image-2025-05-15-at-11-49-46-AM.jpg",
      department: "BCA",
      projects: "3 projects live",
      sales: "5 sales",
      earnings: "Rs. 2,100 earned",
      status: "Rising",
      activity: "Updated yesterday",
    },
    {
      id: "gurmer",
      name: "Gurmer",
      skill: "Java | Data Structures",
      img: "https://i.ibb.co/svzNYHYy/9bbd2070-ddf0-4ebc-92ba-f695c16ea947.jpg",
      department: "BCA",
      projects: "2 projects live",
      sales: "3 sales",
      earnings: "Rs. 1,050 earned",
      status: "Verified",
      activity: "Updated 2 days ago",
    },
    {
      id: "himanshu",
      name: "Himanshu",
      skill: "C++ | HTML | CSS",
      img: "https://i.ibb.co/4Zf8zCRG/Whats-App-Image-2025-05-15-at-10-16-38-AM.jpg",
      department: "BCA",
      projects: "2 projects live",
      sales: "2 sales",
      earnings: "Rs. 900 earned",
      status: "Verified",
      activity: "Updated today",
    },
    {
      id: "devansh",
      name: "Devansh",
      skill: "Full Stack Development",
      img: "https://i.ibb.co/jv5f9YRB/3ffbfc35-bc30-4ed4-8eb9-f923f8f1638a.jpg",
      department: "BCA",
      projects: "3 projects live",
      sales: "7 sales",
      earnings: "Rs. 3,250 earned",
      status: "Rising",
      activity: "Updated 3 days ago",
    },
    {
      id: "robin",
      name: "Robin",
      skill: "React | JavaScript",
      img: "https://i.ibb.co/kVhTqPpb/IMG-20250515-101417-1.jpg",
      department: "BCA",
      projects: "1 project live",
      sales: "1 sale",
      earnings: "Rs. 350 earned",
      status: "New",
      activity: "Just joined marketplace",
    },
  ];

  const filtered = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.skill.toLowerCase().includes(search.toLowerCase())
  );

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

        <div className="mx-auto mb-20 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
          {filtered.length === 0 ? (
            <p className="col-span-full text-center text-slate-400">
              No students found
            </p>
          ) : (
            filtered.map((student, index) => (
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

                <a
                  href={`/portfolio/${student.id}`}
                  className="block rounded-lg bg-blue-600 py-2.5 font-semibold text-white"
                >
                  View Portfolio
                </a>
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
