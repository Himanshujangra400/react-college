import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function StudentPortfolio() {

  const student = {
    name: "Himanshu",
    role: "Full Stack Developer",
    college: "Budha College",
    bio: "Passionate about building modern web apps and solving real-world problems.",
    profileImg: "https://i.pravatar.cc/150?img=5"
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      desc: "Full-stack shopping platform with payment integration.",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600"
    },
    {
      id: 2,
      title: "AI Chatbot",
      desc: "AI-powered chatbot using OpenAI API.",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600"
    }
  ];

  return (
    <div className="bg-[#F8FAFF] min-h-screen flex flex-col">

      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-10 flex-1">

        {/* PROFILE */}
        <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-6 mb-8">
          <img
            src={student.profileImg}
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold">{student.name}</h2>
            <p className="text-slate-500">{student.role}</p>
            <p className="text-sm text-slate-400">{student.college}</p>
          </div>
        </div>

        {/* BIO */}
        <div className="bg-white p-6 rounded-2xl shadow mb-8">
          <h3 className="font-bold mb-2">About</h3>
          <p className="text-slate-500">{student.bio}</p>
        </div>

        {/* PROJECTS */}
        <div>
          <h3 className="text-xl font-bold mb-4">Projects</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div key={p.id} className="bg-white p-4 rounded-2xl shadow">

                <img src={p.img} className="rounded-xl mb-3" />

                <h4 className="font-bold">{p.title}</h4>
                <p className="text-sm text-slate-500">{p.desc}</p>

                <button className="mt-3 bg-blue-600 text-white px-4 py-1 rounded-lg">
                  View Project
                </button>

              </div>
            ))}
          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default StudentPortfolio;