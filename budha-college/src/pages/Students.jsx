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
    },
    {
      id: "arju",
      name: "Arju Sharma",
      skill: "Python | Machine Learning",
      img: "https://i.ibb.co/hRQdkBh7/Whats-App-Image-2025-05-15-at-11-49-46-AM.jpg",
    },
    {
      id: "gurmer",
      name: "Gurmer",
      skill: "Java | Data Structures",
      img: "https://i.ibb.co/svzNYHYy/9bbd2070-ddf0-4ebc-92ba-f695c16ea947.jpg",
    },
    {
      id: "himanshu",
      name: "Himanshu",
      skill: "C++ | HTML | CSS",
      img: "https://i.ibb.co/4Zf8zCRG/Whats-App-Image-2025-05-15-at-10-16-38-AM.jpg",
    },
    {
      id: "devansh",
      name: "Devansh",
      skill: "Full Stack Development",
      img: "https://i.ibb.co/jv5f9YRB/3ffbfc35-bc30-4ed4-8eb9-f923f8f1638a.jpg",
    },
    {
      id: "robin",
      name: "Robin",
      skill: "React | JavaScript",
      img: "https://i.ibb.co/kVhTqPpb/IMG-20250515-101417-1.jpg",
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
        <div className="mx-auto max-w-6xl px-6 py-10">
          <h1 className="mb-3 text-4xl font-extrabold text-[#112D4E]">
            BCA Students
          </h1>
          <p className="text-slate-500">
            Discover talented students and explore their portfolios.
          </p>
        </div>

        <div className="mx-auto mb-10 flex max-w-6xl gap-3 px-6">
          <input
            type="text"
            placeholder="Search by name or skill..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 rounded-xl border px-5 py-3 outline-none focus:ring-2 focus:ring-blue-100"
          />
          <button className="rounded-xl bg-blue-600 px-6 py-3 text-white">
            Search
          </button>
        </div>

        <div className="mx-auto mb-20 grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.length === 0 ? (
            <p className="col-span-full text-center text-slate-400">
              No students found
            </p>
          ) : (
            filtered.map((student) => (
              <div
                key={student.id}
                className="rounded-2xl bg-white p-6 text-center shadow transition hover:shadow-lg"
              >
                <img
                  src={student.img}
                  alt={student.name}
                  className="mx-auto mb-4 h-24 w-24 rounded-xl object-cover"
                />

                <h3 className="text-xl font-bold">{student.name}</h3>
                <p className="mb-4 text-sm text-slate-400">{student.skill}</p>

                <a
                  href={`/portfolio/${student.id}`}
                  className="block rounded-lg bg-blue-600 py-2 text-white"
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
