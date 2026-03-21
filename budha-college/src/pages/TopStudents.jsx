import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function TopStudents() {
  const topStudents = [
    {
      rank: 1,
      name: "Gavi",
      img: "https://i.ibb.co/yJk2vVn/1510f7e5-11ae-4eb9-8c01-b361ed4fd1a1.jpg",
      sales: 2,
      earning: 200,
      id: "gavi",
    },
    {
      rank: 2,
      name: "Robin",
      img: "https://i.ibb.co/kVhTqPpb/IMG-20250515-101417-1.jpg",
      sales: 0,
      earning: 0,
      id: "robin",
    },
    {
      rank: 3,
      name: "Himanshu",
      img: "https://i.ibb.co/4Zf8zCRG/Whats-App-Image-2025-05-15-at-10-16-38-AM.jpg",
      sales: 0,
      earning: 0,
      id: "himanshu",
    },
  ];

  const students = [
    {
      name: "Gavi",
      dept: "BCA",
      skills: "React | AI",
      img: "https://i.ibb.co/yJk2vVn/1510f7e5-11ae-4eb9-8c01-b361ed4fd1a1.jpg",
    },
    {
      name: "Arju Sharma",
      dept: "BCA",
      skills: "Python | ML",
      img: "https://i.ibb.co/hRQdkBh7/Whats-App-Image-2025-05-15-at-11-49-46-AM.jpg",
    },
    {
      name: "Gurmer",
      dept: "BCA",
      skills: "Java | DSA",
      img: "https://i.ibb.co/svzNYHYy/9bbd2070-ddf0-4ebc-92ba-f695c16ea947.jpg",
    },
    {
      name: "Robin",
      dept: "BCA",
      skills: "React | JS",
      img: "https://i.ibb.co/kVhTqPpb/IMG-20250515-101417-1.jpg",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFF]">
      <Navbar />

      <div className="mx-auto max-w-6xl flex-1 px-6 py-10">
        <h1 className="mb-2 text-4xl font-extrabold">Top Students</h1>
        <p className="mb-10 text-slate-500">
          Top Performing Students from Budha College
        </p>

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {topStudents.map((student) => (
            <div
              key={student.id}
              className="rounded-2xl bg-white p-6 text-center shadow"
            >
              <div className="mb-2 text-xl font-bold">#{student.rank}</div>

              <img
                src={student.img}
                alt={student.name}
                className="mx-auto mb-3 h-20 w-20 rounded-full"
              />

              <h3 className="text-lg font-bold">{student.name}</h3>

              <div className="mt-3 flex justify-center gap-4">
                <span className="text-orange-500">{student.sales} Sales</span>
                <span className="text-green-600">Rs. {student.earning}</span>
              </div>

              <a
                href={`/portfolio/${student.id}`}
                className="mt-4 block rounded-lg bg-blue-600 py-2 text-white"
              >
                View Portfolio
              </a>
            </div>
          ))}
        </div>

        <h2 className="mb-6 text-2xl font-bold">All Students</h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {students.map((student) => (
            <div
              key={student.name}
              className="rounded-xl bg-white p-4 text-center shadow"
            >
              <img
                src={student.img}
                alt={student.name}
                className="mx-auto mb-3 h-16 w-16 rounded-full"
              />

              <h3 className="font-bold">{student.name}</h3>
              <p className="text-xs text-slate-400">{student.dept}</p>
              <p className="mt-1 text-xs text-slate-500">{student.skills}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default TopStudents;
