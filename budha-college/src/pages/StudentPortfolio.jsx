import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const portfolioData = {
  gavi: {
    name: "Gavi",
    role: "AI & Frontend Developer",
    college: "Budha College",
    bio: "I build student-first products with fast React interfaces, practical AI integrations, and clean portfolio storytelling that non-technical reviewers can actually follow.",
    profileImg: "https://i.ibb.co/yJk2vVn/1510f7e5-11ae-4eb9-8c01-b361ed4fd1a1.jpg",
    stats: ["4 projects live", "12 sales", "Rs. 4,800 earned"],
    projects: [
      {
        id: 1,
        title: "SaaS Admin Dashboard",
        desc: "A clean admin workflow with billing states, user tables, and real status handling.",
        img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
        meta: "Top Seller | Updated today",
      },
      {
        id: 2,
        title: "AI Campus Assistant",
        desc: "AI-powered student support assistant built for department FAQs and admission queries.",
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
        meta: "7 saves this week | 3 sales",
      },
    ],
  },
  arju: {
    name: "Arju Sharma",
    role: "Python & ML Developer",
    college: "Budha College",
    bio: "I enjoy turning messy datasets into products that feel simple. Most of my recent work blends machine learning with practical dashboards and review-friendly writeups.",
    profileImg: "https://i.ibb.co/hRQdkBh7/Whats-App-Image-2025-05-15-at-11-49-46-AM.jpg",
    stats: ["3 projects live", "5 sales", "Rs. 2,100 earned"],
    projects: [
      {
        id: 1,
        title: "Attendance Prediction Model",
        desc: "Predictive workflow for student attendance trends with export-ready charts.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
        meta: "Rising | Updated yesterday",
      },
      {
        id: 2,
        title: "ML Hiring Screen",
        desc: "A small ML screening demo that helps shortlist profiles faster for campus roles.",
        img: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600",
        meta: "2 live reviews | 2 sales",
      },
    ],
  },
  himanshu: {
    name: "Himanshu",
    role: "Full Stack Developer",
    college: "Budha College",
    bio: "Passionate about building modern web apps that are easy to use, easy to demo, and polished enough to show up well in recruiter reviews.",
    profileImg: "https://i.ibb.co/4Zf8zCRG/Whats-App-Image-2025-05-15-at-10-16-38-AM.jpg",
    stats: ["2 projects live", "3 sales", "Rs. 980 earned"],
    projects: [
      {
        id: 1,
        title: "E-Commerce Website",
        desc: "Full-stack shopping platform with product management, cart flow, and payment integration.",
        img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
        meta: "Verified | Updated 2 days ago",
      },
      {
        id: 2,
        title: "AI Chatbot",
        desc: "AI-powered chatbot with conversation history, prompt refinement, and clean UI states.",
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
        meta: "2 sales | 14 saves",
      },
    ],
  },
};

function StudentPortfolio() {
  const { id } = useParams();

  const student = portfolioData[id] || portfolioData.himanshu;

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFF]">
      <Navbar />

      <div className="mx-auto max-w-5xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
        <div className="mb-8 flex flex-wrap items-start gap-4 rounded-2xl bg-white p-5 shadow sm:items-center sm:p-6">
          <img
            src={student.profileImg}
            alt={student.name}
            className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
          />
          <div className="flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <h2 className="text-2xl font-bold text-slate-900">{student.name}</h2>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">
                Verified
              </span>
            </div>
            <p className="text-slate-500">{student.role}</p>
            <p className="text-sm text-slate-400">{student.college}</p>
          </div>

          <div className="flex w-full flex-wrap gap-2 lg:w-auto">
            {student.stats.map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8 rounded-2xl bg-white p-6 shadow">
          <div className="mb-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <h3 className="font-bold text-slate-900">About</h3>
            <span className="text-sm font-semibold text-slate-400">
              Updated 2 days ago
            </span>
          </div>
          <p className="text-slate-500">{student.bio}</p>
        </div>

        <div>
          <div className="mb-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <h3 className="text-xl font-bold text-slate-900">Projects</h3>
            <span className="text-sm font-semibold text-slate-400">
              {student.projects.length} projects live
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {student.projects.map((project, index) => (
              <div
                key={project.id}
                className={`rounded-2xl bg-white p-4 shadow ${
                  index === 1 ? "md:translate-y-1" : ""
                }`}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="mb-3 rounded-xl"
                />

                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <h4 className="font-bold text-slate-900">{project.title}</h4>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600">
                    Live
                  </span>
                </div>
                <p className="text-sm text-slate-500">{project.desc}</p>
                <p className="mt-3 text-xs font-semibold text-slate-400">
                  {project.meta}
                </p>

                <button className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white sm:w-auto">
                  View Project Details
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
